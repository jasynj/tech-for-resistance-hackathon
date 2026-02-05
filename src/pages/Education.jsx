import React, { useMemo, useState } from "react";

const TOPICS = [
  "All Topics",
  "Health Risks",
  "Equity & Justice",
  "Patient Advocacy",
  "Recovery",
  "Nutrition",
  "Mental Wellness",
];

const RESOURCE_ITEMS = [
  {
    id: "r1",
    topic: "Health Risks",
    label: "Risks",
    readTime: "5 min read",
    published: "Published Jan 12",
    title: "Identifying Postpartum Warning Signs: What Every Mother Should Know",
    desc:
      "A practical guide to recognizing postpartum red flags and knowing when to seek medical evaluation. Not a diagnosis.",
    img:
      "https://images.pexels.com/photos/19856611/pexels-photo-19856611.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    body: {
      bullets: [
        "If symptoms feel severe, sudden, or 'not right', seek medical evaluation.",
        "Ask what warning signs require urgent care and how to contact your team after hours.",
        "Bring a written timeline: onset date + severity + what changed.",
      ],
      actions: [
        "If you feel you may be in danger, call 911 or seek emergency care.",
        "Use the Advocacy page to generate a structured provider summary.",
        'Ask: "What are we ruling out today?"',
      ],
    },
  },
  {
    id: "r2",
    topic: "Equity & Justice",
    label: "Equity",
    readTime: "10 min read",
    published: "Published Jan 10",
    title: "Closing the Gap: Addressing Racial Disparities in Maternal Care",
    desc:
      "A plain-language overview of how systems, access, and bias affect maternal outcomes—focused on equity and human-centered care.",
    img:
      "https://images.pexels.com/photos/3945603/pexels-photo-3945603.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    body: {
      bullets: [
        "Race is not a biological risk factor—structural factors drive disparities.",
        "Delays in recognition and escalation can be dangerous.",
        "Quality and access gaps matter: follow-up pathways should be clear.",
      ],
      actions: [
        "Ask for clear next steps and a timeline for follow-up.",
        "Request documentation if a concern is not addressed.",
        "Use calm scripts to ask for escalation when needed.",
      ],
    },
  },
  {
    id: "r3",
    topic: "Recovery",
    label: "Recovery",
    readTime: "6 min read",
    published: "Published Jan 08",
    title: "The First 40 Days: Nutrition and Rest After Childbirth",
    desc:
      "Holistic basics for early recovery: rest, hydration, nutrition, and pacing. Not medical treatment guidance.",
    img:
      "https://images.pexels.com/photos/7089332/pexels-photo-7089332.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    body: {
      bullets: [
        "Prioritize rest and hydration when possible—small steps matter.",
        "Ask your care team about safe activity progression for your situation.",
        "If something feels wrong, do not self-dismiss—seek evaluation.",
      ],
      actions: [
        "Write down your top 3 recovery concerns before visits.",
        'Ask: "Is this normal for me right now?"',
        "Seek urgent care if you feel you may be in danger.",
      ],
    },
  },
  {
    id: "r4",
    topic: "Patient Advocacy",
    label: "Advocacy",
    readTime: "7 min read",
    published: "Published Jan 06",
    title: "How to Advocate for Your Care: Calm Scripts That Work",
    desc:
      "Use short, respectful phrases to request documentation, escalation, and second opinions when needed.",
    img:
      "https://images.pexels.com/photos/6149302/pexels-photo-6149302.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    body: {
      bullets: [
        "Name the symptom + impact on function.",
        "Ask what is being ruled out and what happens next.",
        "Request documentation if a test is declined.",
      ],
      actions: [
        "Use the Advocacy page to generate a provider summary.",
        'Ask: "What would make you change the plan?"',
        'Ask: "Can you document my request in my chart?"',
      ],
    },
  },
  {
    id: "r5",
    topic: "Mental Wellness",
    label: "Wellness",
    readTime: "6 min read",
    published: "Published Jan 04",
    title: "Postpartum Mood Check-ins: A Simple Daily Practice",
    desc:
      "A gentle daily check-in approach that can help you notice patterns and know when to seek support.",
    img:
      "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=1200&q=60",
    body: {
      bullets: [
        "Tracking mood can support clearer conversations with your care team.",
        "You deserve mental health screening and support.",
        "If you feel unsafe, seek urgent help immediately.",
      ],
      actions: [
        "Share your mood log at follow-ups.",
        "Ask for mental health screening resources.",
        "Reach out to a trusted person before appointments.",
      ],
    },
  },
  {
    id: "r6",
    topic: "Nutrition",
    label: "Nutrition",
    readTime: "4 min read",
    published: "Published Jan 03",
    title: "Hydration, Iron, and Energy: Postpartum Basics",
    desc:
      "Nutrition basics that support recovery. Always confirm personal needs with your provider.",
    img:
      "https://images.pexels.com/photos/6991894/pexels-photo-6991894.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    body: {
      bullets: [
        "Small, consistent meals can help stabilize energy.",
        "Ask about iron needs if you've experienced heavy bleeding.",
        "Hydration matters, especially if breastfeeding.",
      ],
      actions: [
        'Ask: "Are there labs or supplements I should discuss?"',
        "Bring your questions written down.",
        "Seek evaluation if symptoms feel severe or worsening.",
      ],
    },
  },
  {
    id: "r7",
    topic: "Health Risks",
    label: "Risks",
    readTime: "8 min read",
    published: "Published Jan 02",
    title: "Blood Pressure After Birth: Why Monitoring Matters",
    desc:
      "A plain-language overview of why blood pressure monitoring may be important postpartum, and what to ask your provider.",
    img:
      "https://images.pexels.com/photos/6303585/pexels-photo-6303585.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    body: {
      bullets: [
        "High blood pressure symptoms can be serious and deserve evaluation.",
        "Ask about home monitoring if recommended by your team.",
        "Know what numbers or symptoms require urgent action.",
      ],
      actions: [
        'Ask: "What readings should trigger a call today?"',
        'Ask: "What are the warning signs I should watch?"',
        "Seek emergency care if you feel in danger.",
      ],
    },
  },
  {
    id: "r8",
    topic: "Equity & Justice",
    label: "Equity",
    readTime: "9 min read",
    published: "Published Dec 29",
    title: "Why Being Dismissed Happens—and How to Respond",
    desc:
      "Examples of dismissal language and questions that prompt clearer evaluation and next steps.",
    img:
      "https://images.pexels.com/photos/6149223/pexels-photo-6149223.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    body: {
      bullets: [
        'Dismissal often sounds like: "That\'s normal."',
        'Ask: "What are we ruling out?"',
        'Ask: "What is the plan and timeline?"',
      ],
      actions: [
        "Repeat symptom + severity + function impact.",
        "Request documentation if concerns are declined.",
        "Ask for a second opinion if you feel unsafe with the plan.",
      ],
    },
  },
  {
    id: "r9",
    topic: "Patient Advocacy",
    label: "Advocacy",
    readTime: "12 min read",
    published: "Published Dec 27",
    title: "Preparing for Visits: The SBAR Method (Situation, Background, Assessment, Request)",
    desc:
      "A simple structure to communicate concerns clearly and efficiently during visits and triage calls.",
    img:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=60",
    body: {
      bullets: [
        "Situation: what's happening now.",
        "Background: relevant context (postpartum week, prior issues).",
        "Assessment: what you notice and how it's changing.",
        "Request: what you need (evaluation, tests, specialist).",
      ],
      actions: [
        "Write your SBAR in notes before the appointment.",
        "Bring it up early in the visit.",
        "Ask for a plan and follow-up timeline.",
      ],
    },
  },
];

const FEATURED = {
  tag: "Top Advocacy",
  readTime: "12 min read",
  title: "Advocating for Your Care: A Comprehensive Guide to Postpartum Rights & Racial Equity",
  desc:
    "Learn how to navigate the healthcare system with confidence and ensure your voice is heard during your postpartum journey.",
  img:
    "https://images.pexels.com/photos/4614505/pexels-photo-4614505.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
  body: {
    bullets: [
      "You deserve clear explanations and a documented plan.",
      "Use structured notes (SBAR) to reduce confusion and speed up evaluation.",
      "Advocacy can be calm, respectful, and firm.",
    ],
    actions: [
      'Ask: "What are we ruling out?"',
      'Ask: "What would make you change the plan?"',
      'Ask: "Can you document this in my chart?"',
    ],
  },
};

function MaterialIcon({ name, className = "" }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function TopicPills({ active, setActive }) {
  return (
    <div className="flex items-center justify-center gap-3 mt-6 overflow-x-auto no-scrollbar pb-2">
      {TOPICS.map((t) => {
        const isActive = t === active;
        return (
          <button
            key={t}
            type="button"
            onClick={() => setActive(t)}
            className={
              isActive
                ? "px-5 py-2 rounded-full bg-[#2563EB] text-white text-sm font-semibold whitespace-nowrap hover:bg-[#1D4ED8] transition-colors"
                : "px-5 py-2 rounded-full bg-white border border-[#E2E8F0] hover:border-[#2563EB] text-[#64748B] hover:text-[#2563EB] text-sm font-medium transition-colors whitespace-nowrap"
            }
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

function ResourceModal({ open, onClose, resource }) {
  if (!open || !resource) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-[#0F172A]/50" onClick={onClose} aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#E2E8F0] bg-white shadow-xl overflow-hidden">
        <div className="p-6 border-b border-[#E2E8F0] flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              {resource.label || "Resource"} • {resource.readTime}
            </div>
            <h3 className="text-xl font-extrabold mt-1 tracking-tight text-[#0F172A]">{resource.title}</h3>
            <p className="text-sm text-[#64748B] mt-2">{resource.desc}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-2 rounded-lg border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-sm font-bold text-[#0F172A]"
          >
            Close
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
              <div className="text-sm font-bold mb-2 text-[#0F172A]">Key points</div>
              <ul className="text-sm text-[#64748B] space-y-2 list-disc pl-5">
                {(resource.body?.bullets || []).map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
              <div className="text-sm font-bold mb-2 text-[#0F172A]">Action steps</div>
              <ul className="text-sm text-[#64748B] space-y-2 list-disc pl-5">
                {(resource.body?.actions || []).map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <MaterialIcon name="info" className="text-[#F59E0B]" />
            <div>
              <h4 className="text-sm font-bold text-amber-900">Medical Disclaimer</h4>
              <p className="text-sm text-amber-800/90">
                This content is for informational purposes only and does not substitute for professional
                medical advice, diagnosis, or treatment. Always seek the advice of your physician.
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIAssistant({ open, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm your maternal health education assistant. I can help you find resources, answer questions about postpartum care, or guide you to the right information. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "That's a great question. Let me help you find the right resources. I recommend checking out our 'Identifying Postpartum Warning Signs' article in the Health Risks section.",
        "I understand your concern. Based on what you're asking, I suggest exploring our Patient Advocacy resources. They provide calm scripts for communicating with healthcare providers.",
        "Recovery is unique for everyone. Our 'First 40 Days' guide covers nutrition and rest essentials. Would you like me to point you to that resource?",
        "Mental wellness is so important. We have evidence-based resources on postpartum mood check-ins. I can help you navigate to those materials.",
        "That's an important topic related to health equity. I recommend our article on 'Closing the Gap: Addressing Racial Disparities in Maternal Care.'",
      ];

      const assistantMessage = {
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-24 right-8 w-96 max-w-[calc(100vw-4rem)] rounded-2xl border border-[#E2E8F0] bg-white shadow-xl z-50 flex flex-col max-h-[600px]">
      <div className="p-4 border-b border-[#E2E8F0] flex items-center justify-between bg-[#2563EB] rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <MaterialIcon name="psychology" className="text-white" />
          </div>
          <div>
            <div className="font-bold text-white">AI Health Assistant</div>
            <div className="text-xs text-white/80">Always here to help</div>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors"
        >
          <MaterialIcon name="close" className="text-xl" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8FAFC]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.role === "user"
                  ? "bg-[#2563EB] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#0F172A]"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div
                  className="w-2 h-2 rounded-full bg-[#64748B] animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-[#64748B] animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-[#64748B] animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-[#E2E8F0] bg-white rounded-b-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all text-sm text-[#0F172A] placeholder-[#64748B]"
          />
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-[#E2E8F0] disabled:text-[#64748B] text-white rounded-lg font-bold transition-colors"
          >
            <MaterialIcon name="send" className="text-lg" />
          </button>
        </div>
        <p className="text-xs text-[#64748B] mt-2 text-center">This is a demo assistant. Responses are simulated.</p>
      </div>
    </div>
  );
}

export default function Education() {
  const [search, setSearch] = useState("");
  const [activeTopic, setActiveTopic] = useState("All Topics");
  const [viewMode, setViewMode] = useState("grid");
  const [visibleCount, setVisibleCount] = useState(6);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalResource, setModalResource] = useState(null);

  const [chatOpen, setChatOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return RESOURCE_ITEMS.filter((r) => {
      const topicOk = activeTopic === "All Topics" || r.topic === activeTopic;
      if (!topicOk) return false;

      if (!q) return true;
      const hay = `${r.title} ${r.desc} ${r.topic} ${r.label}`.toLowerCase();
      return hay.includes(q);
    });
  }, [search, activeTopic]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  function openResource(r) {
    setModalResource(r);
    setModalOpen(true);
  }

  function openFeatured() {
    openResource({
      id: "featured",
      topic: "Patient Advocacy",
      label: FEATURED.tag,
      readTime: FEATURED.readTime,
      title: FEATURED.title,
      desc: FEATURED.desc,
      img: FEATURED.img,
      body: FEATURED.body,
    });
  }

  function handleLoadMore() {
    setVisibleCount((c) => Math.min(filtered.length, c + 6));
  }

  const trending = [
    { tag: "#MentalHealthMatters", views: "2.4k views" },
    { tag: "#BirthEquity", views: "1.8k views" },
    { tag: "#PostpartumRights", views: "1.2k views" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="sticky top-0 z-50 w-full bg-white border-b border-[#E2E8F0] h-16 shadow-sm">
        <div className="max-w-[1440px] mx-auto h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer" role="button" tabIndex={0}>
              <div className="bg-[#2563EB] p-1.5 rounded-lg">
                <MaterialIcon name="school" className="text-white text-2xl" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">EduHub</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button type="button" className="text-sm font-semibold text-[#2563EB]">
                Resources
              </button>
              <button
                type="button"
                className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
                onClick={() => alert("Demo: Vitals tab is out of scope for MVP.")}
              >
                Vitals
              </button>
              <button
                type="button"
                className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
                onClick={() => alert("Demo: Community tab is out of scope for MVP.")}
              >
                Community
              </button>
              <button
                type="button"
                className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors"
                onClick={() => alert("Demo: Advocacy is available via the Advocacy page in the app navigation.")}
              >
                Advocacy
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#64748B] hover:bg-[#F8FAFC] rounded-full transition-colors" type="button">
              <MaterialIcon name="notifications" />
            </button>

            <div className="flex items-center gap-2 pl-4 border-l border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-full bg-[#E2E8F0] overflow-hidden">
                <img
                  alt="User"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRvXbqnjkAYCQjLSh9snvwLhuFt7_44T-JwkcXUXOQdqgMUOFTQTmDXkv-sWuSL6_cGKx1zlCVSmGOsUcfbwPMKWlj2A0SyQFwvsmxASlEyQQHYV3dG4e7lOVTr6HXKKHZvnB0P2y3IpsWm2vmLBHa8cVvV0KsvEtyIyEIXaJmvKYJIJ1AEnTz6iaDgDnvlrjjvGbTEZpTDzEebBWN1YztS52VdUfJm2qXoYDYeWqFGArFy0OvgSiEOxtDaCkIx7nupAgEU4C4m3Y"
                />
              </div>
              <span className="text-sm font-semibold hidden lg:block text-[#0F172A]">Sarah Johnson</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-6 py-6">
        <section className="mb-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-4 tracking-tight text-[#0F172A]">
              What would you like to learn today?
            </h1>
            <p className="text-[#64748B] text-lg">
              Access evidence-based postpartum resources focused on maternal health equity.
            </p>
          </div>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <MaterialIcon
                name="search"
                className="text-[#64748B] group-focus-within:text-[#2563EB] transition-colors"
              />
            </div>
            <input
              className="block w-full pl-12 pr-24 py-4 bg-white border border-[#E2E8F0] rounded-2xl focus:ring-4 focus:ring-[#2563EB]/10 focus:border-[#2563EB] transition-all text-base shadow-sm text-[#0F172A] placeholder-[#64748B]"
              placeholder="Search for risks, equity, rights, or care guides..."
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(6);
              }}
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-semibold text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] rounded-md mr-2">
                ⌘K
              </kbd>
            </div>
          </div>

          <TopicPills
            active={activeTopic}
            setActive={(t) => {
              setActiveTopic(t);
              setVisibleCount(6);
            }}
          />
        </section>

        <div className="mb-10 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
          <MaterialIcon name="info" className="text-[#F59E0B]" />
          <div>
            <h4 className="text-sm font-bold text-amber-900">Medical Disclaimer</h4>
            <p className="text-sm text-amber-800/90">
              This content is for informational purposes only and does not substitute for professional medical advice,
              diagnosis, or treatment. Always seek the advice of your physician.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-10">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#0F172A]">Featured Spotlight</h2>
                <button type="button" className="text-[#2563EB] text-sm font-bold hover:underline">
                  View Featured Gallery
                </button>
              </div>

              <div
                className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-[#E2E8F0]"
                onClick={openFeatured}
                role="button"
                tabIndex={0}
              >
                <img
                  alt="Featured Article"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={FEATURED.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex gap-3 mb-4">
                    <span className="px-3 py-1 rounded bg-[#2563EB] text-white text-xs font-bold uppercase tracking-wider">
                      {FEATURED.tag}
                    </span>
                    <span className="px-3 py-1 rounded bg-white/20 backdrop-blur-md text-white text-xs font-bold">
                      {FEATURED.readTime}
                    </span>
                  </div>
                  <h3 className="text-white text-3xl font-extrabold mb-3 max-w-2xl leading-tight">
                    {FEATURED.title}
                  </h3>
                  <p className="text-white/90 text-lg max-w-xl mb-6">{FEATURED.desc}</p>
                  <button
                    className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3 rounded-lg font-bold transition-colors"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openFeatured();
                    }}
                  >
                    Start Reading
                  </button>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#0F172A]">Latest Resources</h2>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={`p-2 border border-[#E2E8F0] rounded-lg bg-white hover:bg-[#F8FAFC] transition-colors ${
                      viewMode === "grid" ? "ring-2 ring-[#2563EB]/20 border-[#2563EB]" : ""
                    }`}
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                  >
                    <MaterialIcon name="grid_view" className="text-sm text-[#0F172A]" />
                  </button>
                  <button
                    type="button"
                    className={`p-2 border border-[#E2E8F0] rounded-lg bg-white hover:bg-[#F8FAFC] transition-colors ${
                      viewMode === "list" ? "ring-2 ring-[#2563EB]/20 border-[#2563EB]" : ""
                    }`}
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                  >
                    <MaterialIcon name="format_list_bulleted" className="text-sm text-[#0F172A]" />
                  </button>
                </div>
              </div>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {visible.map((r) => (
                    <div
                      key={r.id}
                      className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col"
                      onClick={() => openResource(r)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          alt="Resource"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          src={r.img}
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold text-[#2563EB] uppercase">{r.label}</span>
                          <span className="w-1 h-1 rounded-full bg-[#E2E8F0]"></span>
                          <span className="text-xs text-[#64748B]">{r.readTime}</span>
                        </div>
                        <h4 className="font-bold text-[#0F172A] mb-2 leading-snug">{r.title}</h4>
                        <p className="text-sm text-[#64748B] line-clamp-2 mb-4">{r.desc}</p>
                        <div className="mt-auto pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                          <span className="text-xs font-medium text-[#64748B]">{r.published}</span>
                          <MaterialIcon name="arrow_forward" className="text-[#2563EB]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {visible.map((r) => (
                    <div
                      key={r.id}
                      className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer flex items-start gap-4"
                      onClick={() => openResource(r)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                        <img alt="Resource" className="w-full h-full object-cover" src={r.img} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[#2563EB] uppercase">{r.label}</span>
                          <span className="w-1 h-1 rounded-full bg-[#E2E8F0]"></span>
                          <span className="text-xs text-[#64748B]">{r.readTime}</span>
                          <span className="ml-auto text-xs font-medium text-[#64748B]">{r.published}</span>
                        </div>
                        <div className="font-bold text-[#0F172A]">{r.title}</div>
                        <div className="text-sm text-[#64748B] line-clamp-2 mt-1">{r.desc}</div>
                      </div>
                      <MaterialIcon name="arrow_forward" className="text-[#2563EB]" />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={visibleCount >= filtered.length}
                  className={`px-6 py-2 border border-[#E2E8F0] bg-white rounded-lg text-sm font-bold transition-colors ${
                    visibleCount >= filtered.length
                      ? "opacity-50 cursor-not-allowed text-[#64748B]"
                      : "hover:bg-[#F8FAFC] text-[#0F172A]"
                  }`}
                >
                  Load More Resources
                </button>
              </div>
            </section>
          </div>

          <aside className="w-full lg:w-[320px] shrink-0 space-y-6">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#2563EB]/10 rounded-lg">
                  <MaterialIcon name="lightbulb" className="text-[#2563EB]" />
                </div>
                <h3 className="font-bold text-[#0F172A]">Daily Advocacy Tip</h3>
              </div>
              <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                "When speaking with your provider, use a simple structure: what's happening now, what changed, what
                you're worried about, and what you're requesting. Clear structure helps reduce misunderstanding."
              </p>
              <button type="button" className="text-[#2563EB] text-xs font-bold uppercase tracking-wider hover:underline">
                Read more tips
              </button>
            </div>

            <div className="bg-[#0F172A] text-white rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Join our Community</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                  Connect with other mothers and professional advocates committed to maternal health equity.
                </p>
                <button
                  type="button"
                  onClick={() => alert("Demo: Community features are out of scope for MVP.")}
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Join the Circle
                </button>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <MaterialIcon name="groups" className="text-8xl" />
              </div>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
              <h3 className="font-bold mb-4 text-[#0F172A]">Trending Search Topics</h3>
              <div className="space-y-3">
                {trending.map((t) => (
                  <div
                    key={t.tag}
                    className="flex items-center justify-between text-sm group cursor-pointer"
                    onClick={() => {
                      setSearch(t.tag.replace("#", ""));
                      setVisibleCount(6);
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="text-[#64748B] group-hover:text-[#2563EB] transition-colors">{t.tag}</span>
                    <span className="text-[#64748B] text-xs">{t.views}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-2 py-4">
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
                <button type="button" className="text-xs text-[#64748B] hover:text-[#0F172A]">
                  About
                </button>
                <button type="button" className="text-xs text-[#64748B] hover:text-[#0F172A]">
                  Privacy
                </button>
                <button type="button" className="text-xs text-[#64748B] hover:text-[#0F172A]">
                  Terms
                </button>
                <button type="button" className="text-xs text-[#64748B] hover:text-[#0F172A]">
                  Contact
                </button>
              </div>
              <p className="text-[10px] text-[#64748B]">© 2024 Maternal Health Education Hub. All rights reserved.</p>
            </div>
          </aside>
        </div>
      </main>

      <button
        type="button"
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-8 right-8 bg-[#2563EB] hover:bg-[#1D4ED8] shadow-xl w-14 h-14 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
        aria-label="Open AI assistant"
      >
        <MaterialIcon name="psychology" className="text-2xl" />
      </button>

      <AIAssistant open={chatOpen} onClose={() => setChatOpen(false)} />

      <ResourceModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setModalResource(null);
        }}
        resource={modalResource}
      />
    </div>
  );
}
