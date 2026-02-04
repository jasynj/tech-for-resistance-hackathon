// src/components/education/FilterPills.jsx
import React from "react";

export default function FilterPills({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={
              "rounded-full border px-3 py-1 text-xs font-semibold transition " +
              (isActive
                ? "border-blue-200 bg-blue-50 text-blue-700"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50")
            }
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
