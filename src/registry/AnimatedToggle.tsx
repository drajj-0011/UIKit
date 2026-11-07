import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedToggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex w-64 items-center justify-between rounded-lg border border-white/10 bg-[#171b16] px-4 py-4">
      <div>
        <p className="text-sm font-medium text-white">Motion effects</p>
        <p className="mt-1 text-xs text-[#8b9488]">{enabled ? "Enabled" : "Disabled"}</p>
      </div>
      <button type="button" role="switch" aria-label="Motion effects" aria-checked={enabled} onClick={() => setEnabled((value) => !value)} className={`relative h-7 w-12 rounded-full p-1 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white ${enabled ? "bg-[#baff39]" : "bg-[#4b5248]"}`}>
        <motion.span animate={{ x: enabled ? 20 : 0 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} className="block h-5 w-5 rounded-full bg-[#10140d]" />
      </button>
    </div>
  );
}