import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ShimmerButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setClicked((value) => !value)}
      className="group relative inline-flex min-h-12 items-center gap-4 overflow-hidden rounded-md border border-[#baff39]/50 bg-[#171d10] px-5 text-sm font-medium text-white outline-none transition-colors hover:border-[#baff39] focus-visible:ring-2 focus-visible:ring-[#baff39]"
    >
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1/2 -translate-x-[140%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[280%]" />
      <span className="relative">{clicked ? "You're all set" : "Get started"}</span>
      <ArrowRight size={16} className="relative text-[#baff39] transition-transform group-hover:translate-x-1" />
    </button>
  );
}