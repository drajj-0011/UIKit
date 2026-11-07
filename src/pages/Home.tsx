import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { categories, components, countInCategory } from "@/data/registry";
import { CategoryArtwork } from "@/components/showcase/CategoryArtwork";
import { ComponentCard } from "@/components/showcase/ComponentCard";
import { QuickStart } from "@/components/showcase/QuickStart";

const featuredIds = ["magnetic-button", "animated-tabs", "drag-chip"];

export function HomePage() {
  const featured = featuredIds.map((id) => components.find((component) => component.id === id)!);

  return (
    <main>
      <section className="hero">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-light" aria-hidden="true" />
        <div className="hero-inner page-width">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }}>
            <p className="hero-eyebrow"><span /> THE INTERACTIVE COMPONENT LIBRARY</p>
            <h1><span className="hero-brand">UIKIT<span>.</span></span><span className="hero-title">Interfaces that<br /><em>feel alive.</em></span></h1>
            <p className="hero-description">Beautifully interactive components for the modern web. Copy, paste, and make something unforgettable.</p>
            <div className="hero-actions">
              <Link href="/components" className="primary-button">Explore components <ArrowUpRight size={17} /></Link>
              <Link href="/docs" className="hero-secondary">How it works <ArrowRight size={16} /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="categories-section section-spacing" id="categories">
        <div className="page-width">
          <div className="section-heading">
            <div><p className="section-kicker"><span /> 01 / THE COLLECTION</p><h2>Start with the <em>details.</em></h2><p className="section-description">The building blocks for your next great idea. Pick a category and explore.</p></div>
            <Link href="/components" className="text-link">View all components <ArrowUpRight size={16} /></Link>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link key={category.id} href={`/components/${category.id}`} className="category-card" aria-label={`Explore ${category.name}: ${countInCategory(category.id)} components`}>
                <div className="category-visual"><span className="category-index">{String(index + 1).padStart(2, "0")} /</span><CategoryArtwork type={category.id} /></div>
                <div className="category-info"><div><h3>{category.name}</h3><p>{String(countInCategory(category.id)).padStart(2, "0")} COMPONENTS</p></div><span className="category-arrow"><ArrowUpRight size={18} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section section-spacing">
        <div className="page-width">
          <div className="section-heading">
            <div><p className="section-kicker"><span /> 02 / A LITTLE INSPIRATION</p><h2>Good design <em>moves.</em></h2><p className="section-description">Go on, interact with them. These details are made to be felt.</p></div>
            <Link href="/components" className="text-link">Explore the library <ArrowUpRight size={16} /></Link>
          </div>
          <div className="featured-grid">{featured.map((item) => <ComponentCard key={item.id} item={item} />)}</div>
        </div>
      </section>
      <QuickStart />
    </main>
  );
}