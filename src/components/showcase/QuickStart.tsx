import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";
import { Link } from "wouter";
import { copyText } from "@/utils/copy";

const command = "npm install framer-motion lucide-react";

export function QuickStart() {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copyCommand() {
    try { setState((await copyText(command)) ? "copied" : "error"); }
    catch { setState("error"); }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2200);
  }

  return (
    <section className="quick-start-section">
      <div className="quick-start-inner page-width">
        <div>
          <p className="section-kicker"><span /> MADE TO BE REMIXED</p>
          <h2>Less setup.<br /><em>More spark.</em></h2>
          <p className="quick-description">Find a component you love, make it yours, and get back to building something great.</p>
          <Link href="/docs" className="text-link">Read the quick start <ArrowRight size={16} /></Link>
        </div>
        <div className="terminal-block">
          <div className="terminal-top"><span><i /><i /><i /></span><span>YOUR PROJECT</span><span>01 / 02</span></div>
          <div className="terminal-body"><span className="terminal-comment">// Start with the essentials</span><div className="terminal-command"><span>$</span><code>{command}</code><button type="button" onClick={copyCommand} aria-label="Copy install command" title="Copy install command">{state === "copied" ? <Check size={16} /> : <Copy size={16} />}</button></div><span className="terminal-status" aria-live="polite">{state === "copied" ? "Command copied to clipboard." : state === "error" ? "Unable to copy. Select the command instead." : "Then copy a component and make it your own."}</span></div>
        </div>
      </div>
    </section>
  );
}