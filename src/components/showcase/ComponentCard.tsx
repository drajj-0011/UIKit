import { useEffect, useRef, useState } from "react";
import { Check, Code2, Copy, Eye } from "lucide-react";
import type { ComponentDefinition } from "@/data/registry";
import { copyText } from "@/utils/copy";

export function ComponentCard({ item }: { item: ComponentDefinition }) {
  const [view, setView] = useState<"preview" | "code">("preview");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleCopy() {
    try {
      setCopyState((await copyText(item.source)) ? "copied" : "error");
    } catch {
      setCopyState("error");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopyState("idle"), 2200);
  }

  return (
    <article className="component-card">
      <div className={`component-stage ${view === "code" ? "is-code" : ""}`}>
        {view === "preview" ? <div className="stage-content"><item.Component /></div> : <pre className="source-code" tabIndex={0}><code>{item.source}</code></pre>}
        <span className="stage-corner" aria-hidden="true" />
      </div>
      <div className="component-info">
        <div className="component-title-row"><h3>{item.title}</h3><span>{item.label}</span></div>
        <p>{item.description}</p>
        <div className="component-controls" aria-label={`${item.title} controls`}>
          <div className="view-switch">
            <button type="button" className={view === "preview" ? "selected" : ""} aria-pressed={view === "preview"} onClick={() => setView("preview")}><Eye size={14} /> Preview</button>
            <button type="button" className={view === "code" ? "selected" : ""} aria-pressed={view === "code"} onClick={() => setView("code")}><Code2 size={14} /> Code</button>
          </div>
          <button type="button" className="copy-control" onClick={handleCopy} aria-label={`Copy ${item.title} source code`} title="Copy source code">{copyState === "copied" ? <Check size={15} /> : <Copy size={15} />}<span>{copyState === "copied" ? "Copied" : copyState === "error" ? "Failed" : "Copy"}</span></button>
        </div>
      </div>
    </article>
  );
}