// File: src/data/symptoms.js
// Symptoms data focused on maternal health warning signs
// Note: Black women face 3x higher maternal mortality rates - early detection saves lives

export const SYMPTOM_DATA = [
  {
    category: "Physical Symptoms",
    items: [
      { id: "chest_pain", label: "Chest pain or trouble breathing", description: "Shortness of breath, gasping, or pressure", baseSeverity: "high" },
      { id: "shortness_breath", label: "Shortness of breath / Difficulty breathing", description: "Can't catch your breath or speak in full sentences", baseSeverity: "high" },
      { id: "heavy_bleeding", label: "Heavy bleeding (soaking a pad in <1 hour)", description: "Postpartum hemorrhage risk", baseSeverity: "high" },
      { id: "severe_headache", label: "Severe headache that won't go away", description: "Even after taking medication or resting", baseSeverity: "variable" },
      { id: "vision_changes", label: "Changes in your vision", description: "Seeing spots, flashing lights, or blurriness", baseSeverity: "variable" },
      { id: "fever", label: "Fever of 100.4°F or higher", description: "Feeling hot, chills, or flushed skin", baseSeverity: "medium" },
      { id: "swelling", label: "Sudden swelling in face or hands", description: "Swelling that appeared quickly", baseSeverity: "medium" },
      { id: "dizziness", label: "Dizziness or fainting", description: "Feeling lightheaded or losing consciousness", baseSeverity: "medium" },
      { id: "cramping", label: "Severe abdominal pain", description: "Pain that doesn't improve with rest", baseSeverity: "medium" },
      { id: "fatigue", label: "Extreme fatigue or weakness", description: "Beyond normal tiredness", baseSeverity: "low" },
      { id: "nausea", label: "Persistent nausea or vomiting", description: "Can't keep food or water down", baseSeverity: "low" }
    ]
  }
];