import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText("npm install framer-motion");
        setStatus("copied");
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = "npm install framer-motion";
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        textarea.remove();
        setStatus(copied ? "copied" : "error");
      }
    } catch {
      setStatus("error");
    }
    window.setTimeout(() => setStatus("idle"), 2000);
  }

  return (
    <div className="flex w-64 max-w-full items-center gap-3 rounded-lg border border-white/10 bg-[#171b16] p-3">
      <code className="min-w-0 flex-1 truncate text-xs text-[#b7c2ae]">npm install framer-motion</code>
      <button type="button" onClick={copy} aria-label="Copy install command" className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-[#baff39] outline-none transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#baff39]">{status === "copied" ? <Check size={15} /> : <Copy size={15} />}</button>
      <span className="sr-only" aria-live="polite">{status === "copied" ? "Copied" : status === "error" ? "Could not copy" : ""}</span>
    </div>
  );
}