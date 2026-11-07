import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Move } from "lucide-react";

export default function DragChip() {
  const constraints = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);

  return (
    <div ref={constraints} className="relative flex h-36 w-64 max-w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-white/15 bg-[#141814]">
      <motion.button type="button" drag dragConstraints={constraints} dragElastic={0.25} dragSnapToOrigin whileTap={{ scale: 1.06, cursor: "grabbing" }} onClick={() => setClicked((value) => !value)} className="z-10 flex touch-none cursor-grab items-center gap-2 rounded-full border border-[#baff39]/50 bg-[#243018] px-4 py-2.5 text-xs font-semibold text-[#baff39] shadow-[0_0_25px_rgba(186,255,57,.1)] outline-none focus-visible:ring-2 focus-visible:ring-[#baff39]">
        <Move size={14} />{clicked ? "Nice move" : "Drag me around"}
      </motion.button>
      <span className="absolute bottom-3 text-[10px] text-[#818b7b]">Release to spring back</span>
    </div>
  );
}