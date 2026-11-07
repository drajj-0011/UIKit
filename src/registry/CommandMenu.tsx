import { useState } from "react";
import { Command, Search } from "lucide-react";

const commands = ["Go to dashboard", "Create a project", "Open settings"];

export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("");
  const results = commands.filter((command) => command.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="relative w-64 max-w-full">
      <button type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)} className="flex w-full items-center gap-3 rounded-lg border border-white/15 bg-[#171b16] px-3 py-3 text-left text-xs text-[#aeb8a7] outline-none hover:border-[#baff39]/60 focus-visible:ring-2 focus-visible:ring-[#baff39]">
        <Search size={15} className="text-[#baff39]" /><span className="flex-1 truncate">{selected || "Jump to anything..."}</span><Command size={14} />
      </button>
      {open && (
        <div className="mt-1 rounded-lg border border-white/15 bg-[#20251e] p-1 shadow-2xl" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
          <input autoFocus aria-label="Search commands" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search commands..." className="w-full border-b border-white/10 bg-transparent px-2 py-2 text-xs text-white outline-none placeholder:text-[#778072]" />
          {results.length ? results.map((command) => <button type="button" key={command} onClick={() => { setSelected(command); setOpen(false); setQuery(""); }} className="block w-full rounded px-2 py-2 text-left text-xs text-[#c5cec0] hover:bg-white/5 focus-visible:bg-white/10 focus-visible:outline-none">{command}</button>) : <p className="px-2 py-3 text-xs text-[#8a9485]">No commands found.</p>}
        </div>
      )}
    </div>
  );
}