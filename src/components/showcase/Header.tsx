import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [location, navigate] = useLocation();

  function openSearch() {
    setOpen(false);
    navigate("/components");
    window.setTimeout(() => document.getElementById("component-search")?.focus(), 100);
  }

  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" className={location === "/" ? "active" : ""}>Home</Link>
          <Link href="/components" className={location.startsWith("/components") && !location.includes("physics") ? "active" : ""}>Components</Link>
          <Link href="/components/physics" className={location.includes("physics") ? "active" : ""}>Motion Lab</Link>
          <Link href="/docs" className={location === "/docs" ? "active" : ""}>Getting Started</Link>
        </nav>
        <div className="header-actions">
          <button type="button" className="icon-button header-search" onClick={openSearch} aria-label="Search components"><Search size={18} /></button>
          <a className="github-link" href="https://github.com" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
          <Link href="/components" className="header-cta">Explore library <ArrowUpRight size={15} /></Link>
          <button type="button" className="icon-button mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/components" onClick={() => setOpen(false)}>All components</Link>
          <Link href="/components/physics" onClick={() => setOpen(false)}>Motion Lab</Link>
          <Link href="/docs" onClick={() => setOpen(false)}>Getting Started</Link>
          <button type="button" onClick={openSearch}><Search size={16} /> Search components</button>
        </nav>
      )}
    </header>
  );
}