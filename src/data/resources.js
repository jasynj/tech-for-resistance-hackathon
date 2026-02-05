// src/data/resources.js
// Hardcoded resources for hackathon MVP (no external APIs)
// NOTE: Keep language safe, non-diagnostic, and supportive.

export const CATEGORIES = [
  "All Resources",
  "Patient Rights",
  "Systemic Factors",
  "Data & Stats",
  "Stories",
  "Postpartum Care",
];

export const RESOURCES = [
  // Patient Rights (2+)
  {
    id: "rights-1",
    category: "Patient Rights",
    title: "You have the right to ask questions and get clear answers",
    readTime: "3 min",
    summary:
      "A simple checklist of questions to ask during prenatal and postpartum visits, plus how to ask for clarification when you feel rushed.",
    keyTakeaways: [
      "Ask: What are we ruling out?",
      "Ask: What should make me come back today?",
      "Ask: Can you document my concerns in my chart?",
    ],
    actionSteps: [
      "Bring a written list of questions",
      "Ask for a plain-language explanation",
      "Request a summary of the plan before leaving",
    ],
    sourceLabel: "Patient advocacy guidance (general)",
    href: "",
    featured: false,
  },
  {
    id: "rights-2",
    category: "Patient Rights",
    title: "If you feel dismissed: phrases that keep things calm and firm",
    readTime: "4 min",
    summary:
      "Scripts you can use if your pain or symptoms are minimized. These scripts focus on documentation, escalation, and next steps.",
    keyTakeaways: [
      "Use 'I’m concerned because…'",
      "Ask for risk vs. wait explanation",
      "Ask for chart documentation if a test is declined",
    ],
    actionSteps: [
      "Repeat the symptom + impact on function",
      "Ask for what would trigger urgent care",
      "Request a second opinion if needed",
    ],
    sourceLabel: "Self-advocacy scripts (general)",
    href: "",
    featured: false,
  },

  // Warning Signs / Postpartum Care (2+ postpartum)
  {
    id: "pp-1",
    category: "Postpartum Care",
    title: "Postpartum warning signs that should never be ignored",
    readTime: "5 min",
    summary:
      "Common postpartum symptoms that may require urgent medical evaluation. This does not diagnose—it's an awareness list to support faster care.",
    keyTakeaways: [
      "Heavy bleeding can be urgent",
      "Severe headache + vision changes can be urgent",
      "Chest pain or trouble breathing can be urgent",
    ],
    actionSteps: [
      "If you feel you may be in danger, call 911 or seek emergency care",
      "Bring your symptom summary to the visit",
      "Ask what signs require immediate return",
    ],
    sourceLabel: "Public health guidance (general)",
    href: "",
    featured: true,
  },
  {
    id: "pp-2",
    category: "Postpartum Care",
    title: "The first 6 weeks postpartum: why follow-up matters",
    readTime: "4 min",
    summary:
      "Many severe complications happen after delivery. This explains what follow-ups are commonly missed and how to plan for them.",
    keyTakeaways: [
      "Schedule follow-up early",
      "Track symptoms over time",
      "Ask about blood pressure and mental health screening",
    ],
    actionSteps: [
      "Book your check-up before leaving the hospital (if possible)",
      "Keep a simple daily log: symptoms + severity",
      "Ask who to contact after hours",
    ],
    sourceLabel: "Postpartum care basics (general)",
    href: "",
    featured: false,
  },

  // Advocacy Scripts (2+) — keep in Education too
  {
    id: "adv-1",
    category: "Patient Rights",
    title: "How to request escalation without conflict",
    readTime: "3 min",
    summary:
      "A calm, structured way to ask for escalation when you feel something is wrong—focused on safety and clarity.",
    keyTakeaways: [
      "Name the symptom",
      "Name what changed",
      "Ask for what we are ruling out",
    ],
    actionSteps: [
      "Use 'I’m worried because this is different from my normal'",
      "Ask for a plan and timeline",
      "Ask what would change the plan",
    ],
    sourceLabel: "Communication tips (general)",
    href: "",
    featured: false,
  },
  {
    id: "adv-2",
    category: "Patient Rights",
    title: "What to say if you want a second opinion",
    readTime: "2 min",
    summary:
      "Short script options for requesting a second opinion or specialist consult while staying respectful and direct.",
    keyTakeaways: [
      "Be clear and calm",
      "Ask for next steps",
      "Ask for documentation",
    ],
    actionSteps: [
      "Say: 'I’d like a second opinion to feel safe with this plan'",
      "Ask: 'Who is the best specialist to consult?'",
      "Ask: 'Can you document my request?'",
    ],
    sourceLabel: "Self-advocacy scripts (general)",
    href: "",
    featured: false,
  },

  // Data & Stats (2+)
  {
    id: "data-1",
    category: "Data & Stats",
    title: "Why maternal outcomes differ: the role of systems, not biology",
    readTime: "6 min",
    summary:
      "A plain-language overview of how structural factors—access, quality of care, and bias—drive disparities in outcomes.",
    keyTakeaways: [
      "Race is not a biological risk factor",
      "Quality and access gaps matter",
      "Bias can delay escalation",
    ],
    actionSteps: [
      "Ask about your care plan and follow-up schedule",
      "Bring written symptom notes",
      "Know when to seek urgent evaluation",
    ],
    sourceLabel: "Equity framing (general)",
    href: "",
    featured: false,
  },
  {
    id: "data-2",
    category: "Data & Stats",
    title: "Many pregnancy-related deaths are considered preventable",
    readTime: "5 min",
    summary:
      "Public health reviews often find a large share of pregnancy-related deaths could be prevented with timely recognition, quality care, and follow-up.",
    keyTakeaways: [
      "Delays can be dangerous",
      "Follow-up is critical",
      "Systems must respond faster",
    ],
    actionSteps: [
      "Use the symptom checker for early awareness",
      "Use the advocacy summary at visits",
      "Ask what to do if symptoms worsen",
    ],
    sourceLabel: "Public health summaries (general)",
    href: "",
    featured: false,
  },

  // Systemic Factors (2+)
  {
    id: "sys-1",
    category: "Systemic Factors",
    title: "What 'being dismissed' can look like in healthcare settings",
    readTime: "4 min",
    summary:
      "Examples of dismissal and how to respond with questions that prompt clearer evaluation and documentation.",
    keyTakeaways: [
      "Dismissal often sounds like 'it’s normal'",
      "Ask for what is being ruled out",
      "Ask for a written plan",
    ],
    actionSteps: [
      "Repeat symptom + severity + function impact",
      "Ask for the next step and timeline",
      "Request documentation if concerns are not addressed",
    ],
    sourceLabel: "Patient experience patterns (general)",
    href: "",
    featured: false,
  },
  {
    id: "sys-2",
    category: "Systemic Factors",
    title: "Why postpartum care is where systems often fail",
    readTime: "5 min",
    summary:
      "A practical explanation of care gaps after delivery: follow-ups, transitions home, and who to call when symptoms change.",
    keyTakeaways: [
      "Transitions home are high-risk",
      "Follow-up can be fragmented",
      "Clear escalation pathways matter",
    ],
    actionSteps: [
      "Save your clinic’s after-hours number",
      "Ask who to contact for urgent questions",
      "Bring symptom logs to every visit",
    ],
    sourceLabel: "Care navigation (general)",
    href: "",
    featured: false,
  },

  // Stories (2+)
  {
    id: "story-1",
    category: "Stories",
    title: "A short story: how documentation changes the conversation",
    readTime: "3 min",
    summary:
      "A fictional, respectful vignette showing how a structured symptom note can help a patient be taken more seriously during a visit.",
    keyTakeaways: [
      "Specific details reduce misunderstanding",
      "A timeline helps clinicians act faster",
      "Clear goals improve shared decisions",
    ],
    actionSteps: [
      "Write symptoms + dates + severity",
      "Bring a summary to the appointment",
      "Ask: 'What is our plan if this worsens?'",
    ],
    sourceLabel: "Fictional vignette (MVP)",
    href: "",
    featured: false,
  },
  {
    id: "story-2",
    category: "Stories",
    title: "A short story: postpartum symptoms that were 'not normal'",
    readTime: "4 min",
    summary:
      "A fictional scenario illustrating why persistent symptoms deserve evaluation—especially in the weeks after delivery.",
    keyTakeaways: [
      "Persistent symptoms deserve attention",
      "Escalation can be life-saving",
      "Follow-up plans reduce uncertainty",
    ],
    actionSteps: [
      "Track symptom patterns",
      "Use advocacy scripts calmly",
      "Seek urgent care if you feel in danger",
    ],
    sourceLabel: "Fictional vignette (MVP)",
    href: "",
    featured: false,
  },
];

export const FEATURED_RESOURCE_ID = "pp-1";
