import { Link } from 'react-router-dom';

function Emergency() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <header className="space-y-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#DC2626]">
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            emergency
          </span>
          Emergency
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
          Get help now
        </h1>
        <p className="text-[#64748B] max-w-3xl">
          This page is a quick guide for urgent postpartum warning signs and what to do next. It’s for support and
          planning only — not medical advice.
        </p>
      </header>

      <section className="rounded-2xl border border-[#FECACA] bg-[#FEF2F2] shadow-sm p-6">
        <div className="flex items-start gap-3">
          <span className="material-symbols-outlined text-[#DC2626] text-base" aria-hidden="true">
            warning
          </span>
          <div className="space-y-3">
            <h2 className="text-lg font-extrabold text-[#7F1D1D]">If you feel unsafe or symptoms are severe</h2>
            <p className="text-sm text-[#7F1D1D]">
              Call emergency services (911 in the U.S.) or go to the nearest emergency department right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:911"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#DC2626] px-5 py-3 text-sm font-semibold text-white hover:bg-[#B91C1C]"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  call
                </span>
                Call 911
              </a>
              <a
                href="tel:988"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#FECACA] bg-white px-5 py-3 text-sm font-semibold text-[#7F1D1D] hover:bg-[#FEF2F2]"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  support_agent
                </span>
                Call/Text 988 (U.S.)
              </a>
            </div>
            <p className="text-xs text-[#7F1D1D]">
              If you’re outside the U.S., contact your local emergency number or crisis line.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#DC2626]">
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              health_and_safety
            </span>
            Warning signs to get urgent care
          </div>
          <p className="mt-2 text-sm text-[#64748B]">
            If any of these are sudden, worsening, or feel “not right,” seek urgent evaluation.
          </p>

          <ul className="mt-4 space-y-3 text-sm text-[#0F172A]">
            {[
              { title: 'Severe headache', desc: "Especially if it won’t go away" },
              { title: 'Vision changes', desc: 'Blurred vision, spots, flashing lights' },
              { title: 'Chest pain or shortness of breath', desc: 'Trouble breathing or new chest pressure' },
              { title: 'Heavy bleeding', desc: 'Soaking a pad in an hour, large clots, or dizziness' },
              { title: 'High fever', desc: 'Temperature over 100.4°F (38°C)' },
              { title: 'Swelling in face/hands', desc: 'Sudden swelling or rapid weight gain' },
              { title: 'Seizure or fainting', desc: 'Call emergency services immediately' },
              { title: 'Thoughts of self-harm', desc: 'You deserve immediate support' },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#DC2626] text-base" aria-hidden="true">
                  error
                </span>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-[#64748B]">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
            <span className="material-symbols-outlined text-base" aria-hidden="true">
              description
            </span>
            What to say (quick script)
          </div>
          <p className="mt-2 text-sm text-[#64748B]">
            Use clear, calm language. Ask for the plan and what is being ruled out.
          </p>

          <div className="mt-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
            <p className="text-sm text-[#0F172A] font-semibold">Example:</p>
            <p className="mt-2 text-sm text-[#0F172A] leading-relaxed italic">
              “I’m postpartum and I’m having <span className="font-semibold">[symptom]</span>. It started{' '}
              <span className="font-semibold">[when]</span> and is getting <span className="font-semibold">[worse/better]</span>. I
              need urgent evaluation. What are we ruling out today, and what’s the next step if it doesn’t improve?”
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/symptoms"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
            >
              <span className="material-symbols-outlined text-base text-[#2563EB]" aria-hidden="true">
                health_and_safety
              </span>
              Symptom Checker
            </Link>
            <Link
              to="/advocacy"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
            >
              <span className="material-symbols-outlined text-base text-[#2563EB]" aria-hidden="true">
                note_alt
              </span>
              Advocacy Tools
            </Link>
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#64748B]">
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            checklist
          </span>
          Quick prep (optional)
        </div>
        <p className="mt-2 text-sm text-[#64748B]">
          If you’re heading to urgent care, this can help you be taken seriously and evaluated faster.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
            <div className="font-semibold text-[#0F172A]">Bring / note</div>
            <ul className="mt-2 space-y-2 text-[#64748B]">
              {[
                'When symptoms started + what changed',
                'Any home readings (temperature, blood pressure)',
                'Medications + allergies',
                'Recent delivery details (date, complications if any)',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-base text-[#2563EB]" aria-hidden="true">
                    check_circle
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
            <div className="font-semibold text-[#0F172A]">Ask for</div>
            <ul className="mt-2 space-y-2 text-[#64748B]">
              {[
                'What are we ruling out?',
                'What should I watch for tonight?',
                'How do I reach someone after hours?',
                'Can you document this in my chart?',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-base text-[#2563EB]" aria-hidden="true">
                    check_circle
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Emergency;

