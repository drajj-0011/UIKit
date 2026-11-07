import { useId, useState } from "react";
import { motion } from "framer-motion";

export default function SpringSlider() {
  const [value, setValue] = useState(65);
  const id = useId();

  return (
    <div className="w-64 max-w-full rounded-lg border border-white/10 bg-[#171b16] p-4">
      <div className="mb-4 flex items-center justify-between"><label htmlFor={id} className="text-xs font-medium text-white">Spring tension</label><span className="font-mono text-xs text-[#baff39]">{value}%</span></div>
      <div className="relative h-2 rounded-full bg-white/10">
        <motion.span animate={{ width: `${value}%` }} transition={{ type: "spring", stiffness: 170, damping: 23 }} className="absolute inset-y-0 left-0 rounded-full bg-[#baff39] shadow-[0_0_12px_rgba(186,255,57,.4)]" />
        <input id={id} aria-label="Spring tension" type="range" min="0" max="100" value={value} onChange={(event) => setValue(Number(event.target.value))} className="absolute -top-2 left-0 h-6 w-full cursor-pointer opacity-0 focus-visible:opacity-100" />
      </div>
      <div className="mt-3 flex justify-between text-[10px] text-[#818b7b]"><span>Soft</span><span>Snappy</span></div>
    </div>
  );
}