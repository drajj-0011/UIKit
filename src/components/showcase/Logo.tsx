import { Link } from "wouter";

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="UIKit home">
      <svg className="brand-mark" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <path d="M4 4h8v8H4zM18 4h8v8h-8zM4 18h8v8H4z" fill="currentColor" />
        <path d="M18 18h8v8h-8z" fill="currentColor" opacity=".45" />
      </svg>
      <span>UIKIT<span className="brand-period">.</span></span>
    </Link>
  );
}