import { useId, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function FloatingInput() {
  const [submitted, setSubmitted] = useState(false);
  const id = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="w-64 max-w-full">
      <label htmlFor={id} className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9da696]">Email address</label>
      <div className="flex overflow-hidden rounded-md border border-white/15 bg-[#161a15] transition-colors focus-within:border-[#baff39]">
        <input id={id} required type="email" placeholder="you@example.com" onChange={() => setSubmitted(false)} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-[#737b70]" />
        <button type="submit" aria-label="Submit email" className="px-3 text-[#baff39] outline-none hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#baff39]"><ArrowRight size={17} /></button>
      </div>
      <p className="mt-2 min-h-4 text-xs text-[#99a393]" aria-live="polite">{submitted ? "You're on the list." : "A little good news, occasionally."}</p>
    </form>
  );
}