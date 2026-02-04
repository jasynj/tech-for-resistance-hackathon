// src/pages/Advocacy.jsx


import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

function Icon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function dateToISO(dateObj) {
  if (!dateObj) return "";
  const y = dateObj.getFullYear();
  const m = pad2(dateObj.getMonth() + 1);
  const d = pad2(dateObj.getDate());
  return `${y}-${m}-${d}`;
}

function formatMonthYear(date) {
  return date.toLocaleString(undefined, { month: "long", year: "numeric" });
}

function getDaysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function getFirstDayOfMonth(year, monthIndex) {
  return new Date(year, monthIndex, 1).getDay(); // 0=Sun
}

// Template-based "translation" (NO AI)
function translateToClinicalTemplate({ rawText, pain, visitDateISO, triageSymptoms = [] }) {
  const cleaned = (rawText || "").trim();

  const chiefComplaint = cleaned
    ? cleaned.split("\n")[0].slice(0, 140)
    : "Postpartum concerns; requesting evaluation.";

  const hpi = cleaned
    ? cleaned
    : "Patient reports postpartum concerns and requests evaluation and guidance.";

  const assoc = triageSymptoms?.length ? triageSymptoms.join(", ") : "Not provided";
  const dateLine = visitDateISO ? `Date noted: ${visitDateISO}.` : "Date not specified.";

  // Keep language safe: no diagnosis, no guarantees.
  return {
    chiefComplaint: `Chief Complaint: ${chiefComplaint}`,
    hpi: `HPI: ${hpi}\nPain: ${pain}/10. ${dateLine}`,
    associated: `Associated Symptoms: ${assoc}.`,
    goals:
      "Patient Goals: Clarify what is being considered / ruled out; understand next steps; confirm urgent warning signs and follow-up plan.",
    closing:
      "Request: Please document assessment and plan. If tests are declined, please document the reason and recommended alternatives.",
  };
}

function buildProviderNoteText(t) {
  return [
    t.chiefComplaint,
    "",
    t.hpi,
    "",
    t.associated,
    "",
    t.goals,
    "",
    t.closing,
    "",
    "Not medical advice. If you feel you may be in danger, call 911 or seek emergency care.",
  ].join("\n");
}

export default function Advocacy() {
  const location = useLocation();

  // Optional prefill from Symptom Checker (Angel’s page):
  // navigate("/advocacy", { state: { triageSymptoms: [...], pain: 7, narrative: "..." } })
  const incoming = location.state || {};
  const incomingSymptoms = Array.isArray(incoming.triageSymptoms) ? incoming.triageSymptoms : [];
  const incomingPain = typeof incoming.pain === "number" ? incoming.pain : 6;
  const incomingNarrative = typeof incoming.narrative === "string" ? incoming.narrative : "";

  const [symptomText, setSymptomText] = useState(incomingNarrative);
  const [pain, setPain] = useState(clamp(incomingPain, 0, 10));
  const [triageSymptoms] = useState(incomingSymptoms);

  const [selectedDate, setSelectedDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  });

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [monthCursor, setMonthCursor] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const [template, setTemplate] = useState(null);
  const [copied, setCopied] = useState("");

  const visitDateISO = useMemo(() => dateToISO(selectedDate), [selectedDate]);

  const calendar = useMemo(() => {
    const y = monthCursor.getFullYear();
    const m = monthCursor.getMonth();
    const days = getDaysInMonth(y, m);
    const first = getFirstDayOfMonth(y, m);

    return {
      y,
      m,
      first,
      daysArray: Array.from({ length: days }, (_, i) => i + 1),
    };
  }, [monthCursor]);

  const providerNote = useMemo(() => {
    if (!template) return "";
    return buildProviderNoteText(template);
  }, [template]);

  function handleTranslate() {
    const t = translateToClinicalTemplate({
      rawText: symptomText,
      pain,
      visitDateISO,
      triageSymptoms,
    });
    setTemplate(t);
  }

  async function handleCopy() {
    if (!providerNote) return;
    try {
      await navigator.clipboard.writeText(providerNote);
      setCopied("Copied!");
      setTimeout(() => setCopied(""), 1200);
    } catch {
      setCopied("Copy failed");
      setTimeout(() => setCopied(""), 1200);
    }
  }

  function pickDay(day) {
    const newDate = new Date(calendar.y, calendar.m, day);
    setSelectedDate(newDate);
    setCalendarOpen(false);
  }

  const scripts = [
    {
      title: "If a test is denied",
      body: "“Please document in my chart that you are declining this test, and explain why. What alternative evaluation can we do today?”",
      icon: "block",
    },
    {
      title: "Clarifying risks",
      body: "“What are the risks if we wait versus acting now? What warning signs mean I should seek urgent care?”",
      icon: "question_mark",
    },
    {
      title: "Pain management",
      body: "“My pain is affecting my ability to function. What options are available to manage it safely today?”",
      icon: "health_and_safety",
    },
    {
      title: "Second opinion",
      body: "“I’d like a second opinion to feel confident in this plan. Who can we consult today?”",
      icon: "record_voice_over",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-6 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0F172A]">
            Self-Advocacy Tools
          </h1>
          <p className="mt-2 text-sm md:text-base text-[#64748B] max-w-3xl">
            Document your symptoms clearly and generate a short provider-ready summary.{" "}
            <span className="font-semibold">
              Not medical advice. If you feel you may be in danger, call 911 or seek emergency care.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Form */}
          <section className="lg:col-span-6 rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="edit_note" className="text-[#2563EB]" />
              <h2 className="text-lg font-bold text-[#0F172A]">Describe your symptoms</h2>
            </div>

            <textarea
              value={symptomText}
              onChange={(e) => setSymptomText(e.target.value)}
              placeholder="Example: “I’m 2 weeks postpartum. I have a severe headache since yesterday, blurry vision, and swelling in my hands.”"
              className="w-full min-h-[180px] resize-none rounded-xl border border-[#E2E8F0] bg-white p-4 text-base text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-4 focus:ring-[#2563EB]/10 focus:border-[#2563EB]"
            />

            {triageSymptoms.length > 0 && (
              <div className="mt-4 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                  Selected symptoms (from checker)
                </div>
                <div className="flex flex-wrap gap-2">
                  {triageSymptoms.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-sm font-semibold text-[#0F172A]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Date + Pain */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Date picker trigger */}
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">When did it start?</p>
                    <p className="mt-1 text-sm text-[#64748B]">{visitDateISO}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCalendarOpen(true)}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] transition-colors"
                    aria-label="Open calendar"
                  >
                    <Icon name="calendar_today" className="text-[#2563EB]" />
                  </button>
                </div>
              </div>

              {/* Pain slider */}
              <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-[#0F172A]">Pain level</p>
                  <span className="rounded-full bg-[#2563EB] px-3 py-1 text-sm font-bold text-white">
                    {pain}/10
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={pain}
                  onChange={(e) => setPain(clamp(Number(e.target.value), 0, 10))}
                  className="mt-3 w-full accent-[#2563EB]"
                />
                <div className="mt-2 flex justify-between text-xs font-medium text-[#64748B]">
                  <span>None</span>
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
              </div>
            </div>

            {/* Translate button */}
            <button
              type="button"
              onClick={handleTranslate}
              className="mt-6 w-full rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-4 px-4 transition-colors flex items-center justify-center gap-2"
            >
              <Icon name="history_edu" className="text-white" />
              Translate to Clinical Terms
            </button>
          </section>

          {/* Right: Provider summary + Scripts */}
          <div className="lg:col-span-6 space-y-6">
            {/* Provider Summary */}
            <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="description" className="text-[#2563EB]" />
                  <h2 className="text-lg font-bold text-[#0F172A]">Provider Summary</h2>
                </div>

                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={!providerNote}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                    providerNote
                      ? "border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#0F172A]"
                      : "border border-[#E2E8F0] bg-white text-[#64748B] cursor-not-allowed"
                  }`}
                >
                  <Icon name="content_copy" className="text-[#2563EB]" />
                  {copied || "Copy"}
                </button>
              </div>

              {!template ? (
                <div className="rounded-xl border border-dashed border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <p className="text-sm text-[#64748B]">
                    Your provider-ready summary will appear here after you click{" "}
                    <span className="font-semibold text-[#0F172A]">Translate to Clinical Terms</span>.
                  </p>
                </div>
              ) : (
                <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
                  <pre className="whitespace-pre-wrap text-sm text-[#0F172A] font-medium leading-relaxed">
                    {providerNote}
                  </pre>
                </div>
              )}

              <p className="mt-4 text-xs text-[#64748B] font-medium">
                Not medical advice. If you feel you may be in danger, call 911 or seek emergency care.
              </p>
            </section>

            {/* Script cards */}
            <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="campaign" className="text-[#2563EB]" />
                <h2 className="text-lg font-bold text-[#0F172A]">Self-advocacy scripts</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scripts.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-[#2563EB]/10">
                        <Icon name={s.icon} className="text-[#2563EB]" />
                      </span>
                      <p className="text-sm font-extrabold text-[#0F172A]">{s.title}</p>
                    </div>
                    <p className="text-sm text-[#0F172A] italic leading-relaxed">“{s.body}”</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Calendar popup */}
      {calendarOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-[#0F172A]/40"
            onClick={() => setCalendarOpen(false)}
            aria-label="Close calendar overlay"
          />
          <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#E2E8F0] bg-white shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-[#E2E8F0] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon name="calendar_month" className="text-[#2563EB]" />
                <p className="text-sm font-extrabold text-[#0F172A]">Select a date</p>
              </div>
              <button
                type="button"
                onClick={() => setCalendarOpen(false)}
                className="h-10 w-10 rounded-full hover:bg-[#F8FAFC] flex items-center justify-center"
                aria-label="Close"
              >
                <Icon name="close" className="text-[#0F172A]" />
              </button>
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <button
                  type="button"
                  onClick={() => {
                    const y = monthCursor.getFullYear();
                    const m = monthCursor.getMonth();
                    setMonthCursor(new Date(y, m - 1, 1));
                  }}
                  className="h-10 w-10 rounded-full hover:bg-[#F8FAFC] flex items-center justify-center"
                  aria-label="Previous month"
                >
                  <Icon name="chevron_left" className="text-[#0F172A]" />
                </button>

                <p className="text-sm font-extrabold text-[#0F172A]">{formatMonthYear(monthCursor)}</p>

                <button
                  type="button"
                  onClick={() => {
                    const y = monthCursor.getFullYear();
                    const m = monthCursor.getMonth();
                    setMonthCursor(new Date(y, m + 1, 1));
                  }}
                  className="h-10 w-10 rounded-full hover:bg-[#F8FAFC] flex items-center justify-center"
                  aria-label="Next month"
                >
                  <Icon name="chevron_right" className="text-[#0F172A]" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                  <div key={d} className="h-9 flex items-center justify-center text-xs font-bold text-[#64748B]">
                    {d}
                  </div>
                ))}

                {Array.from({ length: calendar.first }).map((_, i) => (
                  <div key={`blank-${i}`} className="h-9" />
                ))}

                {calendar.daysArray.map((day) => {
                  const isSelected =
                    selectedDate &&
                    selectedDate.getFullYear() === calendar.y &&
                    selectedDate.getMonth() === calendar.m &&
                    selectedDate.getDate() === day;

                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => pickDay(day)}
                      className={`h-9 rounded-full text-sm font-semibold transition-colors ${
                        isSelected
                          ? "bg-[#2563EB] text-white"
                          : "text-[#0F172A] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 text-center text-xs text-[#64748B] font-medium">
                Selected: <span className="font-bold text-[#0F172A]">{visitDateISO}</span>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => setCalendarOpen(false)}
                  className="w-full rounded-xl border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-bold py-3 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
