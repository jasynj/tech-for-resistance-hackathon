// src/components/education/ResourceCard.jsx
import React from "react";

export default function ResourceCard({ resource, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(resource)}
      className="text-left rounded-2xl border border-slate-200 bg-white shadow-sm p-4 hover:bg-slate-50 transition"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700">
          {resource.category}
        </span>
        <span className="text-xs font-medium text-slate-500">{resource.readTime}</span>
      </div>

      <div className="mt-3 text-sm font-semibold text-slate-900">{resource.title}</div>

      <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
        {resource.summary}
      </p>

      <div className="mt-3 text-xs font-semibold text-blue-700">
        Open →
      </div>
    </button>
  );
}
