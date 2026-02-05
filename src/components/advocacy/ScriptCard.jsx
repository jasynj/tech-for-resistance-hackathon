// src/components/advocacy/ScriptCard.jsx

import React from "react";

export default function ScriptCard({ title, script }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed italic">“{script}”</p>
    </div>
  );
}
