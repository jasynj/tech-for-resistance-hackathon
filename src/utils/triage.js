// File: src/utils/triage.js
export const calculateRisk = (selectedIds, painLevel) => {
  const reasons = [];
  
  // 1. HIGH RISK CHECKS
  if (selectedIds.includes("chest_pain")) reasons.push("Chest pain requires immediate evaluation.");
  if (selectedIds.includes("shortness_breath")) reasons.push("Difficulty breathing is a critical warning sign.");
  if (selectedIds.includes("heavy_bleeding")) reasons.push("Heavy bleeding indicates potential hemorrhage.");

  // Conditional High Risk
  if (selectedIds.includes("vision_changes") && painLevel >= 7) {
    reasons.push("Vision changes combined with severe pain may indicate Preeclampsia.");
  }
  if (selectedIds.includes("severe_headache") && selectedIds.includes("vision_changes")) {
    reasons.push("Headache with vision changes is a strong indicator of Preeclampsia.");
  }

  if (reasons.length > 0) {
    return {
      level: "high",
      label: "Seek Immediate Care",
      color: "bg-red-50 border-red-200 text-red-800",
      reasons,
      action: "Call 911 or go to the Emergency Room immediately."
    };
  }

  // 2. MEDIUM RISK CHECKS
  if (selectedIds.includes("fever")) reasons.push("Fever indicates possible infection.");
  if (selectedIds.includes("swelling")) reasons.push("Sudden swelling can be an early sign of blood pressure issues.");
  if (selectedIds.includes("dizziness")) reasons.push("Dizziness requires medical check-up.");
  if (selectedIds.includes("severe_headache")) reasons.push("Persistent severe headache requires attention.");
  if (painLevel >= 5 && painLevel < 7) reasons.push("Moderate pain levels should be assessed by a provider.");

  if (reasons.length > 0) {
    return {
      level: "medium",
      label: "Contact Provider Today",
      color: "bg-amber-50 border-amber-200 text-amber-800",
      reasons,
      action: "Call your OB/GYN or midwife now. Do not wait for your next appointment."
    };
  }

  // 3. LOW RISK
  return {
    level: "low",
    label: "Monitor and Follow Up",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    reasons: ["Symptoms appear mild, but listen to your body."],
    action: "Log these symptoms. If they worsen, return here immediately."
  };
};