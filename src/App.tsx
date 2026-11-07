import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Header } from "@/components/showcase/Header";
import { Footer } from "@/components/showcase/Footer";
import { categories, type CategoryId } from "@/data/registry";
import { HomePage } from "@/pages/Home";
import { LibraryPage } from "@/pages/Library";
import { DocsPage } from "@/pages/Docs";

function NotFound() {
  return <main className="not-found page-width"><p className="section-kicker"><span /> 404 / OFF THE GRID</p><h1>Nothing here <em>yet.</em></h1><p>Let's get you back to something inspiring.</p><Link href="/components" className="primary-button">Explore components <ArrowRight size={16} /></Link></main>;
}

export default function App() {
  const [location] = useLocation();
  const path = location.replace(/\/+$/, "") || "/";
  const parts = path.split("/").filter(Boolean);
  const categoryName = parts[0] === "components" ? parts[1] : parts.length === 1 ? parts[0] : undefined;
  const category = categories.find((item) => item.id === categoryName);
  const isLibrary = path === "/components" || Boolean(category && ((parts[0] === "components" && parts.length === 2) || parts.length === 1));

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = path === "/" ? "UIKIT | Interfaces that feel alive" : path === "/docs" ? "Getting Started | UIKIT" : category ? `${category.name} Components | UIKIT` : "Components | UIKIT";
  }, [path, category]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <Header />
        {path === "/" ? <HomePage /> : path === "/docs" ? <DocsPage /> : isLibrary ? <LibraryPage categoryId={category?.id as CategoryId | undefined} /> : <NotFound />}
        <Footer />
      </div>
    </MotionConfig>
  );
}