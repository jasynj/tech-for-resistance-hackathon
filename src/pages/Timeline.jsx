function Timeline() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 px-4 py-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Care Timeline</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Document every symptom, every appointment, every concern. Your medical history is your power.
          </p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-slate-200/50 border border-white/50 ring-1 ring-slate-900/5 p-8">
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl mb-6">
              <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Your Timeline</h2>
            <p className="text-slate-600 max-w-md mx-auto">
              Start tracking your symptoms to build a documented history you can share with healthcare providers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
