// File: src/utils/triage.js
export const calculateRisk = (selectedIds, painLevel) => {
  const reasons = [];
  
  // 1. HIGH RISK CHECKS
  if (selectedIds.includes("chest_pain")) reasons.push("Chest pain requires immediate evaluation—do not let anyone dismiss this.");
  if (selectedIds.includes("shortness_breath")) reasons.push("Difficulty breathing is a critical warning sign that must be taken seriously.");
  if (selectedIds.includes("heavy_bleeding")) reasons.push("Heavy bleeding indicates potential hemorrhage—this is an emergency.");

  // Conditional High Risk - Preeclampsia (higher risk in Black women)
  if (selectedIds.includes("vision_changes") && painLevel >= 7) {
    reasons.push("Vision changes with severe pain may indicate Preeclampsia—Black women are at higher risk for this condition.");
  }
  if (selectedIds.includes("severe_headache") && selectedIds.includes("vision_changes")) {
    reasons.push("Headache with vision changes is a strong indicator of Preeclampsia—insist on blood pressure monitoring.");
  }

  if (reasons.length > 0) {
    return {
      level: "high",
      label: "Seek Immediate Care",
      color: "bg-red-50 border-red-200 text-red-800",
      reasons,
      action: "Call 911 or go to the Emergency Room immediately. You have the right to be examined and taken seriously. Bring your Advocacy Report."
    };
  }

  // 2. MEDIUM RISK CHECKS
  if (selectedIds.includes("fever")) reasons.push("Fever indicates possible infection—request testing to rule out sepsis.");
  if (selectedIds.includes("swelling")) reasons.push("Sudden swelling can be an early sign of blood pressure issues or Preeclampsia.");
  if (selectedIds.includes("dizziness")) reasons.push("Dizziness requires a medical check-up—do not be sent home without evaluation.");
  if (selectedIds.includes("severe_headache")) reasons.push("Persistent severe headache requires attention—ask for blood pressure monitoring.");
  if (painLevel >= 5 && painLevel < 7) reasons.push("Your pain level warrants medical attention—your pain is real and valid.");

  if (reasons.length > 0) {
    return {
      level: "medium",
      label: "Contact Provider Today",
      color: "bg-amber-50 border-amber-200 text-amber-800",
      reasons,
      action: "Call your OB/GYN or midwife now. Do not wait for your next appointment. If dismissed, ask: 'Can you document in my chart that you're declining to examine me?'"
    };
  }

  // 3. LOW RISK
  return {
    level: "low",
    label: "Monitor and Follow Up",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    reasons: ["Symptoms appear mild, but trust your instincts—you know your body best."],
    action: "Log these symptoms in your timeline. If anything changes or worsens, come back immediately. Your concerns are always valid."
  };
};