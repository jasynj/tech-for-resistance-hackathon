// File: src/pages/Symptoms.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SYMPTOM_DATA } from '../data/symptoms';
import { calculateRisk } from '../utils/triage';

const Symptoms = () => {
  const navigate = useNavigate();
  
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [painLevel, setPainLevel] = useState(1);
  const [result, setResult] = useState(null); 

  const toggleSymptom = (id) => {
    setSelectedSymptoms(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleAssessment = () => {
    const assessment = calculateRisk(selectedSymptoms, painLevel);
    setResult(assessment);
  };

  const handleAdvocacyRoute = () => {
    navigate('/advocacy', { 
      state: { symptoms: selectedSymptoms, pain: painLevel, risk: result?.level } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Early Warning Symptom Checker</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Select all symptoms that apply to you right now. Trust your body—if something feels wrong, it matters.
          </p>
          <div className="inline-block mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Module 1: Triage
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-6">
          {/* LEFT COL: Input */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h2 className="text-xl font-bold text-slate-900">Physical Symptoms</h2>
            </div>
            
            <div className="space-y-2 mb-8">
              {SYMPTOM_DATA[0].items.map((symptom) => (
                <label 
                  key={symptom.id} 
                  className={`flex items-start gap-3 cursor-pointer p-4 rounded-xl border-2 transition-all ${
                    selectedSymptoms.includes(symptom.id)
                      ? 'border-blue-500 bg-blue-50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 text-blue-600 rounded mt-0.5 focus:ring-2 focus:ring-blue-500"
                    checked={selectedSymptoms.includes(symptom.id)}
                    onChange={() => toggleSymptom(symptom.id)}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{symptom.label.split(' (')[0]}</div>
                    {symptom.label.includes('(') && (
                      <div className="text-sm text-slate-500 mt-0.5">
                        {symptom.label.match(/\((.*?)\)/)?.[1]}
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="font-bold text-slate-900">Pain Severity (1-10)</label>
                <span className="text-3xl font-bold text-blue-600">{painLevel}</span>
              </div>
              <input 
                type="range" min="1" max="10" 
                value={painLevel}
                onChange={(e) => setPainLevel(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(painLevel - 1) * 11.11}%, #e2e8f0 ${(painLevel - 1) * 11.11}%, #e2e8f0 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>Mild</span>
                <span>Moderate</span>
                <span>Severe</span>
              </div>
            </div>

            <button 
              onClick={handleAssessment}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Update Assessment
            </button>
          </div>

          {/* RIGHT COL: Results Panel */}
          <div className="space-y-6">
            {!result ? (
              <div className="bg-white p-12 rounded-2xl shadow-lg border border-slate-100 text-center">
                <div className="text-slate-400 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-slate-600 text-lg">Select your symptoms and click <br/><strong>"Update Assessment"</strong> to see results.</p>
              </div>
            ) : (
              <>
                {/* Emergency Alert Box */}
                <div className={`rounded-2xl shadow-xl overflow-hidden border-2 ${
                  result.level === 'high' 
                    ? 'border-red-500 bg-gradient-to-br from-red-50 to-red-100' 
                    : result.level === 'medium'
                    ? 'border-yellow-500 bg-gradient-to-br from-yellow-50 to-yellow-100'
                    : 'border-green-500 bg-gradient-to-br from-green-50 to-green-100'
                }`}>
                  <div className={`p-6 ${
                    result.level === 'high' ? 'bg-red-600' : result.level === 'medium' ? 'bg-yellow-600' : 'bg-green-600'
                  }`}>
                    <div className="flex items-center gap-3">
                      {result.level === 'high' ? (
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      ) : result.level === 'medium' ? (
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      <h3 className="text-2xl font-bold text-white uppercase tracking-wide">{result.label}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="bg-white rounded-xl p-5 mb-6 shadow-sm border border-slate-200">
                      <p className="text-slate-900 text-lg leading-relaxed mb-3">{result.action}</p>
                    </div>

                    <div className="bg-white bg-opacity-80 rounded-xl p-5 mb-6">
                      <p className="font-bold text-slate-900 mb-3">Why is this flagged?</p>
                      <ul className="space-y-2">
                        {result.reasons.map((r, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-700">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      {result.level === 'high' && (
                        <button className={`w-full py-4 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2 ${
                          result.level === 'high' 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-white border-2 border-slate-300 text-slate-700 hover:bg-slate-50'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call Provider Now
                        </button>
                      )}
                      
                      <button 
                        onClick={handleAdvocacyRoute}
                        className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Generate Advocacy Report
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Info Card - Know Your Rights (Always visible) */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face" 
                    alt="Healthcare professional"
                    className="w-14 h-14 rounded-full object-cover border-2 border-teal-100"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Know your rights</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    You know your body best. If you feel dismissed, use the "Advocacy Report" to show a documented timeline of your symptoms. Ask the provider to document specifically <em className="font-medium">why</em> they might be ruling out your concerns.
                  </p>
                  <a 
                    href="/advocacy" 
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
                  >
                    Read more about self-advocacy 
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;