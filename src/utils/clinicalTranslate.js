// src/utils/clinicalTranslate.js

// NOTE:
// This is NOT medical advice or diagnosis.
// This utility only formats user-provided information into a structured, shareable summary
// to support clearer communication with a provider.

const DEFAULT_DENIED_SYMPTOMS = ["Nausea", "Fever", "Shortness of breath"];

function sanitizeText(str = "") {
  return String(str).replace(/\s+/g, " ").trim();
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  // Accept YYYY-MM-DD (from <input type="date">)
  const s = sanitizeText(dateStr);
  return s;
}

function daysAgoFromDateInput(dateStr) {
  try {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return null;

    const now = new Date();
    // Normalize to midnight to avoid timezone noise
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const diffMs = end - start;
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 0;
    return diffDays;
  } catch {
    return null;
  }
}

function titleCase(s) {
  return sanitizeText(s)
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ");
}

function buildAssociatedSymptoms(selectedSymptoms = []) {
  const set = new Set((selectedSymptoms || []).map((s) => sanitizeText(s)).filter(Boolean));
  const present = Array.from(set);

  // If none are present, keep a neutral minimal list
  const baseDenied = DEFAULT_DENIED_SYMPTOMS;

  return {
    present,
    denied: baseDenied,
  };
}

/**
 * createClinicalNote
 * @param {Object} payload
 * @param {string} payload.freeText - user's description
 * @param {string} payload.onsetDate - YYYY-MM-DD
 * @param {number} payload.painLevel - 1..10
 * @param {string[]} payload.selectedSymptoms - optional from symptom checker
 * @param {string} payload.triageLevel - "High" | "Medium" | "Low" optional
 * @param {string[]} payload.triageReasons - optional
 * @returns {Object} note sections + assembledText
 */
export function createClinicalNote(payload = {}) {
  const freeText = sanitizeText(payload.freeText);
  const onsetDate = formatDate(payload.onsetDate);
  const painLevelRaw = Number(payload.painLevel);
  const painLevel = Number.isFinite(painLevelRaw) ? Math.min(10, Math.max(1, painLevelRaw)) : 5;

  const selectedSymptoms = (payload.selectedSymptoms || []).map(sanitizeText).filter(Boolean);
  const triageLevel = sanitizeText(payload.triageLevel);
  const triageReasons = (payload.triageReasons || []).map(sanitizeText).filter(Boolean);

  const daysAgo = daysAgoFromDateInput(onsetDate);

  // CC: keep it human-safe and non-diagnostic.
  // Use either selected symptoms, or the first phrase of free text.
  const cc =
    selectedSymptoms.length > 0
      ? `Patient reports ${selectedSymptoms.slice(0, 2).join(" and ")}.`
      : freeText
        ? `Patient reports: ${freeText.length > 80 ? freeText.slice(0, 80) + "…" : freeText}`
        : "Patient reports symptoms and requests evaluation.";

  // HPI: standard structure without making medical claims.
  const onsetLine =
    onsetDate && daysAgo !== null
      ? `Symptoms began approximately ${daysAgo} day${daysAgo === 1 ? "" : "s"} ago (on ${onsetDate}).`
      : onsetDate
        ? `Symptoms began on ${onsetDate}.`
        : "Symptom onset date not specified.";

  const severityLine = `Patient rates pain severity as ${painLevel}/10.`;

  const contextLine =
    triageLevel
      ? `Prior symptom screening indicated: ${titleCase(triageLevel)} concern.`
      : "Prior symptom screening information not available.";

  const reasonsLine =
    triageReasons.length > 0 ? `Flags noted: ${triageReasons.join("; ")}.` : "";

  const hpi = [onsetLine, severityLine, contextLine, reasonsLine].filter(Boolean).join(" ");

  const assoc = buildAssociatedSymptoms(selectedSymptoms);

  // Goals: focus on patient goals, informed consent, and documentation.
  const goals = [
    "Request medical evaluation and guidance.",
    "Discuss whether any tests or monitoring are appropriate.",
    "Understand warning signs and when to seek urgent care.",
  ];

  const sections = {
    cc,
    hpi,
    associatedSymptoms: assoc,
    goals,
    raw: {
      freeText,
      onsetDate,
      painLevel,
      selectedSymptoms,
      triageLevel,
      triageReasons,
    },
  };

  const assembledText = [
    "CHIEF COMPLAINT (CC)",
    sections.cc,
    "",
    "HISTORY OF PRESENT ILLNESS (HPI)",
    sections.hpi,
    "",
    "ASSOCIATED SYMPTOMS",
    ...(assoc.present.length > 0
      ? assoc.present.map((s) => `• ${s} (reported)`)
      : ["• None specified (reported)"]),
    ...assoc.denied.map((s) => `• ${s} (denied)`),
    "",
    "PATIENT GOALS",
    ...goals.map((g) => `• ${g}`),
  ].join("\n");

  return { ...sections, assembledText };
}
