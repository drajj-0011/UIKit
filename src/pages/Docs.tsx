import { ArrowRight, Check, Code2, Copy, MousePointer2 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { copyText } from "@/utils/copy";

const command = "npm install framer-motion lucide-react";

export function DocsPage() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");
  async function copy() {
    try { setCopyState((await copyText(command)) ? "copied" : "error"); }
    catch { setCopyState("error"); }
    window.setTimeout(() => setCopyState("idle"), 2200);
  }

  return (
    <main className="docs-page page-width">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><span>Getting started</span></div>
      <div className="docs-intro"><p className="section-kicker"><span /> THE QUICK START</p><h1>Make it <em>yours.</em></h1><p>Great interfaces start with the details. Here's how to bring them into your next project.</p></div>
      <div className="docs-content">
        <div className="docs-step"><span className="step-number">01</span><div><h2>Pick your component</h2><p>Explore the library, try the live previews, and find the interaction that fits your project.</p><Link href="/components" className="text-link">Browse the library <ArrowRight size={16} /></Link></div><MousePointer2 className="step-icon" /></div>
        <div className="docs-step"><span className="step-number">02</span><div><h2>Install the essentials</h2><p>These examples use React, Tailwind CSS, Framer Motion, and Lucide icons. In an existing React and Tailwind project, install the animation and icon packages:</p><div className="docs-code"><code>$ {command}</code><button type="button" onClick={copy} aria-label="Copy install command">{copyState === "copied" ? <Check size={16} /> : <Copy size={16} />}</button></div><p className="copy-message" aria-live="polite">{copyState === "copied" ? "Copied to clipboard." : copyState === "error" ? "Unable to copy. Select the command instead." : ""}</p></div><Code2 className="step-icon" /></div>
        <div className="docs-step"><span className="step-number">03</span><div><h2>Copy, paste, create</h2><p>Open a component's Code tab and copy its complete source into a new file in your project. Import it, then customize the colors, content, and behavior to make it yours.</p><Link href="/components" className="primary-button docs-button">Find your first component <ArrowRight size={16} /></Link></div></div>
      </div>
    </main>
  );
}