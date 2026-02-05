// src/components/advocacy/ProviderSummary.jsx

import React, { useMemo, useState } from "react";

export default function ProviderSummary({ note }) {
  const [copied, setCopied] = useState(false);

  const textToCopy = useMemo(() => {
    if (!note?.assembledText) return "";
    return note.assembledText;
  }, [note]);

  async function handleCopy() {
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // Fallback: do nothing (clipboard may be blocked). User can still manually copy.
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
        <div>
          <div className="text-sm font-semibold text-slate-900">Provider Summary</div>
          <div className="text-xs text-slate-500 mt-0.5">Generated clinical-style note</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            aria-label="Copy provider summary"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <div className="px-5 py-4">
        {!note ? (
          <div className="text-sm text-slate-600">
            Generate a summary to see a structured note here.
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-800 font-mono">
              {note.assembledText}
            </pre>
          </div>
        )}

        <div className="mt-3 text-xs text-slate-500">
          Not medical advice. This summary is generated from your input to support communication.
          Always verify details with your provider. If you feel you may be in danger, call 911 or
          seek emergency care.
        </div>
      </div>
    </div>
  );
}
