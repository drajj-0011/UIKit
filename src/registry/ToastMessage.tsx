import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ToastMessage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => setOpen(false), 3500);
    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <div className="relative flex h-32 w-64 max-w-full items-center justify-center">
      <button type="button" onClick={() => setOpen(true)} className="rounded-md border border-white/20 px-4 py-2.5 text-xs font-semibold text-white outline-none transition-colors hover:border-[#baff39] focus-visible:ring-2 focus-visible:ring-[#baff39]">Show notification</button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 12, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8 }} className="absolute inset-x-0 bottom-0 flex items-center gap-3 rounded-lg border border-[#baff39]/30 bg-[#20291b] p-3 shadow-xl" role="status">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#baff39] text-[#10150a]"><Check size={15} /></span>
            <span className="flex-1 text-left"><span className="block text-xs font-semibold text-white">Changes saved</span><span className="mt-0.5 block text-[10px] text-[#a5b29d]">Everything is up to date.</span></span>
            <button type="button" aria-label="Dismiss notification" onClick={() => setOpen(false)} className="text-[#a5b29d] hover:text-white"><X size={14} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}