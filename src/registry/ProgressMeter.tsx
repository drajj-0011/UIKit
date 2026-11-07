import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProgressMeter() {
  const [progress, setProgress] = useState(60);

  return (
    <div className="w-64 max-w-full rounded-lg border border-white/10 bg-[#171b16] p-4">
      <div className="flex items-center justify-between"><span className="text-xs font-semibold text-white">Project progress</span><span className="font-mono text-xs text-[#baff39]">{progress}%</span></div>
      <div role="progressbar" aria-label="Project progress" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><motion.div animate={{ width: `${progress}%` }} transition={{ type: "spring", stiffness: 120, damping: 22 }} className="h-full rounded-full bg-[#baff39]" /></div>
      <button type="button" onClick={() => setProgress(progress >= 100 ? 0 : progress + 20)} className="mt-4 flex items-center gap-1 text-xs text-[#a9b3a3] outline-none hover:text-[#baff39] focus-visible:ring-2 focus-visible:ring-[#baff39]">{progress >= 100 ? "Start again" : "Complete a task"}<ArrowRight size={13} /></button>
    </div>
  );
}