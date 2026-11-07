import { useEffect, useMemo, useState } from "react";
import { ArrowRight, LayoutGrid, Search, X } from "lucide-react";
import { Link } from "wouter";
import { categories, components, countInCategory, type CategoryId } from "@/data/registry";
import { ComponentCard } from "@/components/showcase/ComponentCard";

export function LibraryPage({ categoryId }: { categoryId?: CategoryId }) {
  const [query, setQuery] = useState("");
  const current = categories.find((category) => category.id === categoryId);

  useEffect(() => { setQuery(""); }, [categoryId]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return components.filter((item) => (!categoryId || item.category === categoryId) && (!normalized || `${item.title} ${item.description} ${item.category} ${item.label}`.toLowerCase().includes(normalized)));
  }, [categoryId, query]);

  return (
    <main className="library-page page-width">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/components">Components</Link>{current && <><span>/</span><span>{current.name}</span></>}</div>
      <div className="library-heading">
        <div><p className="section-kicker"><span /> THE UIKIT LIBRARY</p><h1>{current ? <>{current.name}<em>.</em></> : <>Made to <em>move.</em></>}</h1><p>{current ? current.description : "Thoughtful, interactive components. Yours to explore, copy, and make your own."}</p></div>
        <div className="library-heading-note"><span className="note-dot" /> BUILT FOR THE DETAILS</div>
      </div>
      <div className="library-layout">
        <aside className="library-sidebar" aria-label="Component categories">
          <p className="sidebar-heading">BROWSE BY CATEGORY</p>
          <div className="sidebar-links">
            <Link href="/components" onClick={() => setQuery("")} aria-current={!categoryId ? "page" : undefined} className={`sidebar-link ${!categoryId ? "selected" : ""}`}><LayoutGrid size={16} /><span>All components</span><small>{String(components.length).padStart(2, "0")}</small></Link>
            {categories.map((category) => <Link href={`/components/${category.id}`} key={category.id} onClick={() => setQuery("")} aria-current={category.id === categoryId ? "page" : undefined} className={`sidebar-link ${category.id === categoryId ? "selected" : ""}`}><category.icon size={16} /><span>{category.name}</span><small>{String(countInCategory(category.id)).padStart(2, "0")}</small></Link>)}
          </div>
          <div className="sidebar-help"><span>NEW HERE?</span><p>Make it yours in a few simple steps.</p><Link href="/docs">Getting started <ArrowRight size={14} /></Link></div>
        </aside>
        <div className="library-results">
          <div className="results-toolbar"><div><h2>{current ? `${current.name} components` : "All components"}</h2><p>{results.length} {results.length === 1 ? "component" : "components"} {query ? "found" : "ready to explore"}</p></div><div className="search-field"><Search size={16} /><input id="component-search" type="search" placeholder="Search components..." value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search components" />{query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search"><X size={15} /></button>}</div></div>
          {results.length > 0 ? <div className={`library-grid ${categoryId ? "category-results-grid" : ""}`}>{results.map((item) => <ComponentCard key={item.id} item={item} />)}</div> : <div className="empty-state"><Search size={22} /><h3>No components found</h3><p>Try a different search or browse another category.</p><button type="button" onClick={() => setQuery("")}>Clear search</button></div>}
        </div>
      </div>
    </main>
  );
}