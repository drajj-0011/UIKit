import { useState, type PointerEvent } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function SpotlightCard() {
  const [point, setPoint] = useState({ x: 120, y: 70 });
  const [saved, setSaved] = useState(false);

  function moveSpotlight(event: PointerEvent<HTMLButtonElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPoint({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
  }

  return (
    <button
      type="button"
      onPointerMove={moveSpotlight}
      onClick={() => setSaved((value) => !value)}
      className="relative w-60 overflow-hidden rounded-xl border border-white/10 bg-[#141714] p-5 text-left outline-none transition-colors hover:border-[#baff39]/50 focus-visible:ring-2 focus-visible:ring-[#baff39]"
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: `radial-gradient(160px circle at ${point.x}px ${point.y}px, rgba(185,255,57,.16), transparent 70%)` }} />
      <span className="relative flex items-start justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#baff39]/10 text-[#baff39]"><Sparkles size={17} /></span>
        <ArrowUpRight size={16} className="text-[#82897b]" />
      </span>
      <span className="relative mt-6 block text-sm font-semibold text-white">Creative energy</span>
      <span className="relative mt-1 block text-xs leading-5 text-[#92998d]">{saved ? "Saved to your collection." : "A little detail goes a long way."}</span>
    </button>
  );
}