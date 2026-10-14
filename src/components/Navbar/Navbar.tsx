
import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Featured", href: "#featured" },
  { label: "Services", href: "#cardui" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <a
          href="#home"
          className="nav-brand"
          onClick={closeMenu}
          aria-label="Thanmayi Enterprises home"
        >
          <span className="nav-brand-symbol">T.</span>
          <span>
            Thanmayi Enterprises
            <span className="nav-brand-dot"></span>
          </span>
        </a>

        <nav
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            aria-label="Search"
            onClick={() => {
              closeMenu();
              document
                .getElementById("categories")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Search size={19} />
          </button>

          <button
            type="button"
            aria-label="Shopping bag"
            onClick={() => {
              closeMenu();
              document
                .getElementById("featured")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ShoppingBag size={19} />
          </button>

          <button
            type="button"
            className="nav-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
