import { Link } from 'react-router-dom';
import profilePic from '../assets/profile pic.jpg';

function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
            <div className="flex items-center gap-3">
              <img
                src={profilePic}
                alt="User avatar"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-[#E2E8F0] bg-white object-cover"
              />
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Welcome back, Maya.</h1>
            </div>
            <p className="mt-2 text-[#64748B]">
              You are doing great. Remember to take it one day at a time. Your health is a priority.
            </p>

            <div className="mt-6 rounded-2xl border border-[#E2E8F0] bg-white p-5">
              <div className="flex items-center justify-between text-sm text-[#64748B]">
                <span className="uppercase tracking-wide font-semibold">Recovery Progress</span>
                <span className="font-bold text-[#2563EB]">33%</span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-[#2563EB]">Week 4</span>
                <span className="text-sm text-[#64748B]">of 12 weeks</span>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-[#E2E8F0]">
                <div className="h-2 w-1/3 rounded-full bg-[#2563EB]" />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-[#64748B]">
                <span>Birth</span>
                <span>First Checkup</span>
                <span>Full Recovery</span>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
              <span className="material-symbols-outlined text-base">health_and_safety</span>
              Symptom Checker
            </div>
            <h2 className="mt-3 text-xl font-bold text-[#0F172A]">Feeling something unusual?</h2>
            <p className="mt-2 text-[#64748B]">
              Don&apos;t ignore the signs. Check your symptoms against our equity-focused database designed for
              Black maternal health.
            </p>
            <Link
              to="/symptoms"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
            >
              Start Symptom Check
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </section>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#64748B]">
                <span className="material-symbols-outlined text-base">timeline</span>
                Timeline
              </div>
              <h3 className="mt-3 text-lg font-bold text-[#0F172A]">Pediatrician Visit</h3>
              <p className="mt-1 text-sm text-[#64748B]">Upcoming on Oct 24th, 10:00 AM</p>
              <Link
                to="/timeline"
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                View details
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </section>

            <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#64748B]">
                <span className="material-symbols-outlined text-base">note_alt</span>
                Advocacy Log
              </div>
              <h3 className="mt-3 text-lg font-bold text-[#0F172A]">Your voice matters.</h3>
              <p className="mt-1 text-sm text-[#64748B]">
                Log your recent provider interactions to keep track of your care quality.
              </p>
              <Link
                to="/advocacy"
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-semibold text-[#0F172A] hover:bg-[#F8FAFC]"
              >
                Log New Interaction
              </Link>
            </section>
          </div>
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#DC2626]">
              <span className="material-symbols-outlined text-base">warning</span>
              Urgent Warning Signs
            </div>
            <p className="mt-2 text-sm text-[#64748B]">
              If you experience any of these, seek help immediately:
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#0F172A]">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#DC2626] text-base">error</span>
                <div>
                  <div className="font-semibold">Severe Headache</div>
                  <div className="text-[#64748B]">That won&apos;t go away with medicine</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#DC2626] text-base">visibility</span>
                <div>
                  <div className="font-semibold">Vision Changes</div>
                  <div className="text-[#64748B]">Blurriness or seeing spots</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#DC2626] text-base">thermostat</span>
                <div>
                  <div className="font-semibold">High Fever</div>
                  <div className="text-[#64748B]">Temperature over 100.4°F</div>
                </div>
              </div>
            </div>
            <button className="mt-5 w-full rounded-xl bg-[#DC2626] px-4 py-3 text-sm font-semibold text-white hover:bg-[#B91C1C]">
              Call Provider Now
            </button>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
              <span className="material-symbols-outlined text-base">lightbulb</span>
              Daily Tip
            </div>
            <p className="mt-3 text-sm text-[#64748B]">
              Hydration is key for recovery and milk supply. Aim for 8-10 glasses of water today. Keep a bottle next to
              you while nursing.
            </p>
            <button className="mt-4 text-sm font-semibold text-[#2563EB]">Read more tips</button>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-[#64748B]">Community</div>
              <span className="material-symbols-outlined text-[#64748B] text-base">arrow_forward</span>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#E2E8F0]" />
              <div>
                <div className="text-sm font-semibold text-[#0F172A]">Tasha M.</div>
                <div className="text-xs text-[#64748B]">Anyone else feeling super exhausted even after sleep?</div>
                <div className="mt-2 flex items-center gap-4 text-xs text-[#64748B]">
                  <span className="inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">favorite</span>12
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">chat_bubble</span>4
                  </span>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;
