export const MILESTONES = [
    {
        id: 'week1',
        label: 'Week 1',
        title: 'Week 1: Rest, healing, and monitoring',
        description:
            'Focus on rest, hydration, and gentle movement. Keep an eye on bleeding, blood pressure, and any sudden symptom changes. Ask for help—your job is to recover.',
        showPreeclampsiaWarning: true,
    },
    {
        id: 'week2',
        label: 'Week 2',
        title: 'Week 2: Building a simple routine',
        description:
            'You may have small energy improvements. Continue tracking symptoms and prioritizing sleep. Short, slow walks are okay if you feel up to it and your provider has not advised otherwise.',
        showPreeclampsiaWarning: true,
    },
    {
        id: 'week3',
        label: 'Week 3',
        title: 'Week 3: Recovery check-in',
        description:
            'Pay attention to pain levels, incision healing (if applicable), and mood shifts. It’s normal to have ups and downs—but persistent sadness, anxiety, or overwhelm deserves support.',
        showPreeclampsiaWarning: true,
    },
    {
        id: 'week4',
        label: 'Week 4',
        title: 'Week 4: Gaining momentum',
        description:
            'You may be settling into a routine, but recovery is still happening. Watch for delayed warning signs like headaches, swelling, or mood changes. Keep tracking symptoms and don\'t skip follow-ups—your body is still healing even when you feel stronger.',
        showPreeclampsiaWarning: true,
    },
    {
        id: 'week6',
        label: 'Week 6',
        title: 'Week 6: Postpartum visit and next steps',
        description:
            'This is a common milestone for your postpartum checkup. Bring notes on symptoms, bleeding, sleep, feeding, and mood. Ask about activity, pelvic floor rehab, and contraception options.',
        showPreeclampsiaWarning: true,
    },
    {
        id: 'month3',
        label: 'Month 3',
        title: 'Month 3: Strength and support',
        description:
            'Many people notice gradual improvements. Continue rebuilding strength gently. If you’re having ongoing pain, bleeding, dizziness, or mood concerns, follow up—ongoing symptoms are not “just normal.”',
        showPreeclampsiaWarning: false,
    },
    {
        id: 'month6',
        label: 'Month 6',
        title: 'Month 6: Longer-term health check',
        description:
            'If anything still feels off, it’s worth a focused visit. Your recovery timeline is personal—support, sleep, nutrition, and medical follow-up all matter. Celebrate progress, even if it’s small.',
        showPreeclampsiaWarning: false,
    },
];

export const PREECLAMPSIA_WARNING = {
    title: 'Warning signs (Weeks 1–6): Postpartum preeclampsia',
    description:
        'If you notice any of the following, consider urgent medical evaluation—especially with high blood pressure or symptoms that are sudden or worsening.',
    items: [
        'Severe headache that won’t go away',
        'Vision changes (blurred vision, spots, flashing lights)',
        'Sudden swelling in face or hands',
        'Shortness of breath or chest pain',
        'Pain in the upper right abdomen',
        'Nausea/vomiting that feels unusual or severe',
    ],
};

export const ACTION_CHECKLIST_ITEMS = [
    { id: 'bp', label: 'Log blood pressure' },
    { id: 'checkup', label: 'Schedule 6-week checkup' },
    { id: 'walks', label: 'Start gentle walks' },
    { id: 'incision', label: 'Check incision site' },
];

export const MOOD_OPTIONS = [
    { id: 'great', emoji: '😊', label: 'Feeling good' },
    { id: 'okay', emoji: '🙂', label: 'Feeling okay' },
    { id: 'low', emoji: '😕', label: 'Feeling low' },
    { id: 'overwhelmed', emoji: '😣', label: 'Feeling overwhelmed' },
];

export const SUGGESTED_READING = [
    { id: 'advocacy', title: 'Self-advocacy: getting concerns documented', readTime: '4 min read' },
    { id: 'bp', title: 'How to track blood pressure at home', readTime: '5 min read' },
    { id: 'mood', title: 'Postpartum mood: when to seek extra support', readTime: '6 min read' },
];

