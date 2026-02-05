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
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-4 sm:px-6 sm:py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">Early Warning Symptom Checker</h1>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Select all symptoms that apply to you right now. Trust your body—if something feels wrong, it matters.
          </p>
          <div className="inline-block mt-4 px-4 py-2 bg-white border border-[#E2E8F0] text-[#2563EB] rounded-full text-sm font-semibold">
            Module 1: Triage
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-6">
          {/* LEFT COL: Input */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0]">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h2 className="text-xl font-bold text-[#0F172A]">Physical Symptoms</h2>
            </div>
            
            <div className="space-y-2 mb-8">
              {SYMPTOM_DATA[0].items.map((symptom) => (
                <label 
                  key={symptom.id} 
                  className={`flex items-start gap-3 cursor-pointer p-4 rounded-xl border transition-all ${
                    selectedSymptoms.includes(symptom.id)
                      ? 'border-[#2563EB] bg-[#F8FAFC]'
                      : 'border-[#E2E8F0] hover:border-[#2563EB]/60 hover:bg-[#F8FAFC]'
                  }`}
                >
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 text-[#2563EB] rounded mt-0.5 focus:ring-2 focus:ring-[#2563EB]/30"
                    checked={selectedSymptoms.includes(symptom.id)}
                    onChange={() => toggleSymptom(symptom.id)}
                  />
                  <div className="flex-1">
                    <div className="font-medium text-[#0F172A]">{symptom.label.split(' (')[0]}</div>
                    {symptom.label.includes('(') && (
                      <div className="text-sm text-[#64748B] mt-0.5">
                        {symptom.label.match(/\((.*?)\)/)?.[1]}
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>

            <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E2E8F0] mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="font-bold text-[#0F172A]">Pain Severity (1-10)</label>
                <span className="text-3xl font-bold text-[#2563EB]">{painLevel}</span>
              </div>
              <input 
                type="range" min="1" max="10" 
                value={painLevel}
                onChange={(e) => setPainLevel(parseInt(e.target.value))}
                className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                style={{
                  background: `linear-gradient(to right, #2563EB 0%, #2563EB ${(painLevel - 1) * 11.11}%, #E2E8F0 ${(painLevel - 1) * 11.11}%, #E2E8F0 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-[#64748B] mt-2">
                <span>Mild</span>
                <span>Moderate</span>
                <span>Severe</span>
              </div>
            </div>

            <button 
              onClick={handleAssessment}
              className="w-full py-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-xl transition-all shadow-sm text-lg"
            >
              Update Assessment
            </button>
          </div>

          {/* RIGHT COL: Results Panel */}
          <div className="space-y-6">
            {!result ? (
              <div className="bg-white p-12 rounded-2xl shadow-sm border border-[#E2E8F0] text-center">
                <div className="text-[#64748B] mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-[#64748B] text-lg">Select your symptoms and click <br/><strong>"Update Assessment"</strong> to see results.</p>
              </div>
            ) : (
              <>
                {/* Emergency Alert Box */}
                <div className={`rounded-2xl shadow-sm overflow-hidden border ${
                  result.level === 'high' 
                    ? 'border-[#DC2626]/30 bg-white' 
                    : result.level === 'medium'
                    ? 'border-[#F59E0B]/40 bg-white'
                    : 'border-[#2563EB]/30 bg-white'
                }`}>
                  <div className={`p-6 ${
                    result.level === 'high' ? 'bg-[#DC2626]' : result.level === 'medium' ? 'bg-[#F59E0B]' : 'bg-[#2563EB]'
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
                    <div className="bg-white rounded-xl p-5 mb-6 shadow-sm border border-[#E2E8F0]">
                      <p className="text-[#0F172A] text-lg leading-relaxed mb-3">{result.action}</p>
                    </div>

                    <div className="bg-white rounded-xl p-5 mb-6 border border-[#E2E8F0]">
                      <p className="font-bold text-[#0F172A] mb-3">Why is this flagged?</p>
                      <ul className="space-y-2">
                        {result.reasons.map((r, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[#0F172A]">
                            <span className="text-[#2563EB] mt-1">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      {result.level === 'high' && (
                        <button className={`w-full py-4 font-bold rounded-xl transition-all shadow-sm text-lg flex items-center justify-center gap-2 ${
                          result.level === 'high' 
                            ? 'bg-[#DC2626] text-white hover:bg-[#B91C1C]' 
                            : 'bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC]'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Call Provider Now
                        </button>
                      )}
                      
                      <button
                        onClick={handleAdvocacyRoute}
                        className="w-full py-4 bg-[#0F172A] text-white font-bold rounded-xl hover:bg-[#0F172A]/90 transition-all shadow-sm text-lg flex items-center justify-center gap-2"
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
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0]">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face" 
                    alt="Healthcare professional"
                    className="w-14 h-14 rounded-full object-cover border border-[#E2E8F0]"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-lg mb-2">Know your rights</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                    You know your body best. If you feel dismissed, use the "Advocacy Report" to show a documented timeline of your symptoms. Ask the provider to document specifically <em className="font-medium">why</em> they might be ruling out your concerns.
                  </p>
                  <a 
                    href="/advocacy" 
                    className="text-[#2563EB] font-semibold text-sm hover:text-[#1D4ED8] inline-flex items-center gap-1 transition-colors"
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