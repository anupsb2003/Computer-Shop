
import { useState } from "react";
import "./CardUI.css";

import shopInterior from "../../assets/products/shop-interior.jpeg";
import shopDisplay from "../../assets/products/shop-display.jpeg";
import shopAccessories from "../../assets/products/shop-accessories.jpeg";
import ramMemory from "../../assets/products/ram-memory.jpeg";
import ramModules from "../../assets/products/ram-modules.jpeg";
import ssdStorage from "../../assets/products/ssd-storage.jpeg";
import wirelessMouse from "../../assets/products/wireless-mouse.jpeg";
import laptopRepair from "../../assets/products/laptop-repair.jpeg";

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  badge: string;
  details: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Computer Store",
    category: "OUR STORE",
    description:
      "Explore our computer hardware, accessories, and technology products.",
    image: shopInterior,
    badge: "IN STORE",
    details: [
      "Computer hardware and accessories",
      "Multiple product categories",
      "Personal assistance with product selection",
    ],
  },
  {
    id: 2,
    name: "Computer Displays",
    category: "MONITORS & DISPLAYS",
    description:
      "Explore display options for workstations, offices, and home setups.",
    image: shopDisplay,
    badge: "HARDWARE",
    details: [
      "Display and monitor options",
      "Suitable for work and home setups",
      "Ask us about available models",
    ],
  },
  {
    id: 3,
    name: "Computer Accessories",
    category: "ACCESSORIES",
    description:
      "Discover accessories and essential equipment for your computer setup.",
    image: shopAccessories,
    badge: "ACCESSORIES",
    details: [
      "Computer accessories",
      "Everyday computing essentials",
      "Contact us for product availability",
    ],
  },
  {
    id: 4,
    name: "RAM Memory",
    category: "MEMORY",
    description:
      "Memory modules for compatible desktop and laptop configurations.",
    image: ramMemory,
    badge: "UPGRADE",
    details: [
      "RAM upgrade options",
      "Compatibility guidance",
      "Ask about available capacities and types",
    ],
  },
  {
    id: 5,
    name: "RAM Modules",
    category: "MEMORY COMPONENTS",
    description:
      "Explore memory modules for supported computer configurations.",
    image: ramModules,
    badge: "COMPONENTS",
    details: [
      "Memory modules",
      "Compatibility checks before purchase",
      "Availability depends on stock",
    ],
  },
  {
    id: 6,
    name: "SSD Storage",
    category: "STORAGE",
    description:
      "Explore storage components for compatible computers and laptops.",
    image: ssdStorage,
    badge: "STORAGE",
    details: [
      "SSD and storage options",
      "Storage upgrade guidance",
      "Ask about supported capacities",
    ],
  },
  {
    id: 7,
    name: "Wireless Accessories",
    category: "PERIPHERALS",
    description:
      "Discover wireless accessories for your everyday computing needs.",
    image: wirelessMouse,
    badge: "PERIPHERALS",
    details: [
      "Wireless computer accessories",
      "Options for office and home use",
      "Check current product availability",
    ],
  },
  {
    id: 8,
    name: "Laptop Repair",
    category: "TECHNICAL SERVICE",
    description:
      "Get in touch with our team about laptop inspection and repair services.",
    image: laptopRepair,
    badge: "SERVICE",
    details: [
      "Laptop inspection enquiries",
      "Hardware troubleshooting enquiries",
      "Contact us to discuss your device",
    ],
  },
];

export default function CardUI() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="card-ui-section" id="products">
      <div className="card-ui-container">
        <div className="card-ui-heading">
          <div>
            <span className="card-ui-eyebrow">
              EXPLORE THANMAYI ENTERPRISES
            </span>

            <h2>
              Hardware that
              <br />
              <span>powers your world.</span>
            </h2>

            <p>
              Explore our store, computer components, accessories,
              and technical service options.
            </p>
          </div>

          <span className="card-ui-count">
            01 — {String(products.length).padStart(2, "0")}
          </span>
        </div>

        <div className="product-card-grid">
          {products.map((product, index) => (
            <button
              type="button"
              className="product-card"
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="product-card-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <span className="product-card-badge">
                  {product.badge}
                </span>

                <span className="product-card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="product-card-content">
                <span className="product-card-category">
                  {product.category}
                </span>

                <div className="product-card-title-row">
                  <h3>{product.name}</h3>
                  <span className="product-card-plus">+</span>
                </div>

                <p>{product.description}</p>

                <span className="product-card-link">
                  EXPLORE DETAILS <span>→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div
          className="product-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeModal();
          }}
        >
          <article
            className="product-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-detail-title"
          >
            <button
              type="button"
              className="product-modal-close"
              onClick={closeModal}
              aria-label="Close product details"
            >
              ×
            </button>

            <div className="product-modal-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />
            </div>

            <div className="product-modal-content">
              <span className="card-ui-eyebrow">
                {selectedProduct.category}
              </span>

              <h2 id="product-detail-title">
                {selectedProduct.name}
              </h2>

              <p>{selectedProduct.description}</p>

              <div className="product-modal-divider" />

              <h4>Discover more</h4>

              <ul>
                {selectedProduct.details.map((detail) => (
                  <li key={detail}>
                    <span>✦</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <a
                className="product-modal-cta"
                href="#contact"
                onClick={closeModal}
              >
                ENQUIRE ABOUT THIS <span>↗</span>
              </a>

              <span className="product-modal-note">
                Pricing and availability are confirmed by the store.
              </span>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
