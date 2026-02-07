function Timeline() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">Care Timeline</h1>
        <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
          Document every symptom, every appointment, every concern. Your medical history is your power.
        </p>
      </div>

      <section className="rounded-2xl border border-[#E2E8F0] bg-white shadow-sm p-6 sm:p-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB]">
          <span className="material-symbols-outlined text-base">schedule</span>
          Your Timeline
        </div>
        <div className="text-center py-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#EFF6FF] border border-[#E2E8F0] mb-6">
            <span className="material-symbols-outlined text-4xl text-[#2563EB]">schedule</span>
          </div>
          <h2 className="text-xl font-bold text-[#0F172A] mb-2">Track your journey</h2>
          <p className="text-[#64748B] max-w-md mx-auto">
            Start tracking your symptoms to build a documented history you can share with healthcare providers.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
