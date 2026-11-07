import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div><Logo /><p>Little details. Big impact.</p></div>
        <div className="footer-links">
          <Link href="/components">Components</Link>
          <Link href="/components/physics">Motion Lab</Link>
          <Link href="/docs">Getting Started</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
        </div>
      </div>
      <div className="page-width footer-bottom"><span>UIKIT / BUILT FOR BUILDERS</span><span>OPEN SOURCE. OPEN TO POSSIBILITY.</span></div>
    </footer>
  );
}