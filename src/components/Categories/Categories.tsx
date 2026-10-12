
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Laptop,
  Monitor,
  Cpu,
  Headphones,
  Keyboard,
  Gamepad2,
  X,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import "./Categories.css";

const categories = [
  {
    number: "01",
    name: "Gaming Laptops",
    description: "Power without limits.",
    detail:
      "Discover powerful portable machines for competitive gaming, streaming, creative work, and demanding applications.",
    icon: Laptop,
    tag: "PORTABLE POWER",
    products: ["Performance laptops", "Gaming laptops", "Creator laptops"],
    color: "blue",
  },
  {
    number: "02",
    name: "Gaming PCs",
    description: "Built for performance.",
    detail:
      "Explore desktop systems designed for high frame rates, immersive gaming, multitasking, and custom performance.",
    icon: Monitor,
    tag: "DESKTOP SYSTEMS",
    products: ["Prebuilt gaming PCs", "Custom PC builds", "Workstations"],
    color: "gold",
  },
  {
    number: "03",
    name: "PC Components",
    description: "Build your dream rig.",
    detail:
      "Choose the essential hardware for your next build, from processors and graphics cards to memory and storage.",
    icon: Cpu,
    tag: "BUILD YOUR SETUP",
    products: ["Processors & GPUs", "RAM & storage", "Motherboards & cooling"],
    color: "purple",
  },
  {
    number: "04",
    name: "Headphones",
    description: "Hear every detail.",
    detail:
      "Find audio gear for immersive gaming, online communication, music, and everyday entertainment.",
    icon: Headphones,
    tag: "IMMERSIVE AUDIO",
    products: ["Gaming headsets", "Wireless headphones", "Microphones"],
    color: "pink",
  },
  {
    number: "05",
    name: "Keyboards",
    description: "Every keystroke matters.",
    detail:
      "Upgrade your desk with responsive mechanical keyboards, comfortable typing experiences, and precision peripherals.",
    icon: Keyboard,
    tag: "PRECISION CONTROL",
    products: ["Mechanical keyboards", "Gaming mice", "Desk accessories"],
    color: "green",
  },
  {
    number: "06",
    name: "Gaming Accessories",
    description: "Level up your game.",
    detail:
      "Complete your setup with accessories that improve comfort, control, organization, and the overall gaming experience.",
    icon: Gamepad2,
    tag: "COMPLETE YOUR SETUP",
    products: ["Controllers", "Mouse pads", "Gaming accessories"],
    color: "orange",
  },
];

type Category = (typeof categories)[number];

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<Category | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("category-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    section
      .querySelectorAll(".category-reveal")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section
      className="categories-section"
      id="categories"
      ref={sectionRef}
    >
      <div className="categories-background-glow" />
      <div className="categories-grid-pattern" />

      <div className="categories-container">
        <div className="categories-topline category-reveal">
          <span>
            <span className="categories-status-dot" />
            03 / CURATED COLLECTIONS
          </span>
          <span className="categories-topline-right">
            TECHNOLOGY, REIMAGINED
          </span>
        </div>

        <div className="categories-heading category-reveal">
          <div className="categories-heading-main">
            <p className="categories-eyebrow">
              <span />
              FIND YOUR EDGE
            </p>

            <h2>
              Choose your
              <br />
              <span className="categories-title-accent">
                next level.
              </span>
            </h2>
          </div>

          <div className="categories-heading-side">
            <p>
              Great setups start with the right hardware.
              Explore our curated collections and discover
              what powers your next big idea.
            </p>

            <div className="categories-count">
              <strong>06</strong>
              <span>COLLECTIONS TO EXPLORE</span>
            </div>
          </div>
        </div>

        <div className="categories-feature-strip category-reveal">
          <div className="categories-strip-symbol">
            <Sparkles size={20} />
          </div>

          <div>
            <strong>Find the right gear for your world.</strong>
            <p>
              Gaming · Productivity · Creativity · Everyday computing
            </p>
          </div>

          <a href="#shop" className="categories-strip-link">
            Browse shop <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <button
                type="button"
                key={category.number}
                className={`category-card category-${category.color} category-reveal`}
                style={{
                  transitionDelay: `${(index % 3) * 90}ms`,
                  animationDelay: `${index * 70}ms`,
                }}
                onClick={() => setSelected(category)}
                aria-label={`Explore ${category.name}`}
              >
                <div className="category-card-top">
                  <span className="category-number">
                    {category.number}
                  </span>

                  <span className="category-card-action">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="category-art">
                  <div className="category-art-orbit category-orbit-one" />
                  <div className="category-art-orbit category-orbit-two" />
                  <div className="category-art-glow" />

                  <div className="category-art-icon">
                    <Icon size={70} strokeWidth={1.1} />
                  </div>

                  <span className="category-art-tag">
                    {category.tag}
                  </span>
                </div>

                <div className="category-info">
                  <p className="category-description">
                    {category.description}
                  </p>

                  <h3>{category.name}</h3>

                  <div className="category-card-bottom">
                    <span>Explore collection</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="categories-bottomline category-reveal">
          <span>BUILT AROUND YOUR NEEDS.</span>
          <span>FIND YOUR PERFECT SETUP <ArrowUpRight size={14} /></span>
        </div>
      </div>

      {selected && (
        <div
          className="category-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelected(null);
            }
          }}
        >
          <div
            className={`category-modal category-${selected.color}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="category-modal-title"
          >
            <button
              type="button"
              className="category-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close category details"
            >
              <X size={21} />
            </button>

            <div className="category-modal-art">
              <div className="category-art-glow" />
              <selected.icon size={92} strokeWidth={1} />
              <span>{selected.number} / COLLECTION</span>
            </div>

            <div className="category-modal-content">
              <p className="categories-eyebrow">
                <span />
                {selected.tag}
              </p>

              <h2 id="category-modal-title">{selected.name}</h2>

              <p className="category-modal-description">
                {selected.detail}
              </p>

              <h3>Explore the collection</h3>

              <div className="category-modal-products">
                {selected.products.map((product) => (
                  <div key={product}>
                    <CheckCircle2 size={17} />
                    <span>{product}</span>
                  </div>
                ))}
              </div>

              <a
                href="#shop"
                className="category-modal-button"
                onClick={() => setSelected(null)}
              >
                Explore Shop
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
