import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <motion.button type="button" aria-pressed={liked} onClick={() => setLiked((value) => !value)} whileTap={{ scale: 0.9 }} className={`flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#baff39] ${liked ? "border-[#baff39]/60 bg-[#baff39]/10 text-[#baff39]" : "border-white/15 bg-[#171b16] text-[#d8dfd3]"}`}>
      <motion.span animate={{ scale: liked ? [1, 1.35, 1] : 1 }} transition={{ duration: 0.3 }}><Heart size={17} fill={liked ? "currentColor" : "none"} /></motion.span>
      {liked ? "Appreciated" : "Appreciate"}<span className="text-xs opacity-60">{liked ? "129" : "128"}</span>
    </motion.button>
  );
}