
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Laptop,
  Monitor,
  Cpu,
  MemoryStick,
  HardDrive,
  Keyboard,
  Headphones,
  Wrench,
  CircuitBoard,
  X,
  CheckCircle2,
  Sparkles,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

import "./Shop.css";

const categories = [
  {
    title: "Laptops",
    description: "Gaming, professional and student laptops.",
    icon: Laptop,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=85",
    id: "laptops",
    subtitle: "Performance meets portability.",
    details:
      "Find a laptop for gaming, development, creative work, business, or everyday use. Choose a configuration that matches your workflow and budget.",
    products: [
      "Gaming Laptops",
      "Business Laptops",
      "Student Laptops",
      "Creator Laptops",
    ],
    features: [
      "High-performance processors",
      "Dedicated graphics options",
      "Portable designs",
    ],
  },
  {
    title: "Monitors",
    description: "4K displays, high refresh rates and ultrawide screens.",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=85",
    id: "monitors",
    subtitle: "See every detail.",
    details:
      "Upgrade your workspace with immersive displays for gaming, design, multitasking, and professional productivity.",
    products: [
      "Gaming Monitors",
      "4K Monitors",
      "Ultrawide Displays",
      "Professional Monitors",
    ],
    features: [
      "High refresh rate options",
      "Sharp display resolutions",
      "Ergonomic setups",
    ],
  },
  {
    title: "RAM & Memory",
    description: "DDR4, DDR5 and high-performance memory upgrades.",
    icon: MemoryStick,
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=1000&q=85",
    id: "memory",
    subtitle: "More memory. More possibilities.",
    details:
      "Find memory upgrades for gaming PCs, workstations, and compatible laptops. We can help you select the right capacity and memory generation.",
    products: [
      "DDR4 Desktop RAM",
      "DDR5 Desktop RAM",
      "Laptop Memory",
      "RGB Memory Kits",
    ],
    features: [
      "Multiple capacities",
      "Desktop and laptop options",
      "Compatibility guidance",
    ],
  },
  {
    title: "Processors",
    description: "Powerful CPUs for gaming and productivity.",
    icon: Cpu,
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=1000&q=85",
    id: "processors",
    subtitle: "The brain behind your build.",
    details:
      "Explore processor options for gaming, content creation, development, and demanding workloads. Select a CPU that fits your motherboard and performance goals.",
    products: [
      "Intel Processors",
      "AMD Ryzen Processors",
      "Gaming CPUs",
      "Workstation CPUs",
    ],
    features: [
      "Multiple performance tiers",
      "Gaming and workstation options",
      "Socket compatibility guidance",
    ],
  },
  {
    title: "Graphics Cards",
    description: "Dedicated GPUs for gaming, design and AI.",
    icon: CircuitBoard,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=85",
    id: "graphics",
    subtitle: "Power your visual world.",
    details:
      "Discover graphics hardware for gaming, 3D rendering, video editing, and GPU-accelerated applications.",
    products: [
      "Gaming Graphics Cards",
      "Creator GPUs",
      "Entry-Level GPUs",
      "High-Performance GPUs",
    ],
    features: [
      "Multiple performance levels",
      "Gaming and creative workloads",
      "Power and case compatibility guidance",
    ],
  },
  {
    title: "Storage",
    description: "Fast SSDs, NVMe drives and reliable hard disks.",
    icon: HardDrive,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=85",
    id: "storage",
    subtitle: "Speed meets storage capacity.",
    details:
      "Upgrade boot times, application loading, and storage capacity with drives suited to your computer and workload.",
    products: [
      "NVMe SSDs",
      "SATA SSDs",
      "Internal Hard Drives",
      "External Storage",
    ],
    features: [
      "Different storage capacities",
      "Fast SSD options",
      "Desktop and laptop compatibility",
    ],
  },
  {
    title: "Keyboards & Mice",
    description: "Mechanical keyboards, gaming mice and accessories.",
    icon: Keyboard,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1000&q=85",
    id: "peripherals",
    subtitle: "Every interaction matters.",
    details:
      "Build a comfortable and responsive setup with peripherals for competitive gaming, everyday work, and creative productivity.",
    products: [
      "Mechanical Keyboards",
      "Gaming Mice",
      "Wireless Peripherals",
      "Mouse Pads",
    ],
    features: [
      "Wired and wireless options",
      "Ergonomic designs",
      "Gaming and office choices",
    ],
  },
  {
    title: "Audio & Headsets",
    description: "Headphones, microphones and gaming headsets.",
    icon: Headphones,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",
    id: "audio",
    subtitle: "Hear every detail.",
    details:
      "Explore audio gear for immersive gaming, online meetings, streaming, music, and content creation.",
    products: [
      "Gaming Headsets",
      "Wireless Headphones",
      "USB Microphones",
      "Desktop Speakers",
    ],
    features: [
      "Wired and wireless options",
      "Communication-ready headsets",
      "Streaming audio accessories",
    ],
  },
  {
    title: "PC Services",
    description: "Custom PC builds, repairs, upgrades and support.",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=85",
    id: "services",
    subtitle: "Your vision. Our expertise.",
    details:
      "Get help planning a custom PC, upgrading existing hardware, troubleshooting problems, or choosing compatible components.",
    products: [
      "Custom PC Assembly",
      "Hardware Upgrades",
      "PC Diagnostics",
      "Cleaning & Maintenance",
    ],
    features: [
      "Build planning assistance",
      "Hardware compatibility checks",
      "Upgrade recommendations",
    ],
  },
];

type ShopCategory = (typeof categories)[number];

export default function Shop() {
  const sectionRef = useRef<HTMLElement>(null);
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] =
    useState<ShopCategory | null>(null);

  const [contactOpen, setContactOpen] = useState(false);

  // Scroll vertically to move the category track from right to left.
  useEffect(() => {
    const section = horizontalSectionRef.current;
    const track = horizontalTrackRef.current;

    if (!section || !track) return;

    let frameId = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        // On mobile, allow visitors to swipe through the cards.
        if (window.innerWidth <= 760) {
          track.style.transform = "none";
          return;
        }

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY;

        const scrollDistance = Math.max(
          1,
          section.offsetHeight - window.innerHeight
        );

        const progress = Math.min(
          1,
          Math.max(
            0,
            (window.scrollY - sectionTop) / scrollDistance
          )
        );

        const maxTranslate = Math.max(
          0,
          track.scrollWidth - window.innerWidth
        );

        track.style.transform = `translate3d(${
          -maxTranslate * progress
        }px, 0, 0)`;
      });
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    const resizeObserver = new ResizeObserver(updateScroll);
    resizeObserver.observe(track);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      resizeObserver.disconnect();
    };
  }, []);

  // Lock background scrolling when either modal is open.
  useEffect(() => {
    if (!selectedCategory && !contactOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCategory(null);
        setContactOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCategory, contactOpen]);

  const closeCategoryModal = () => {
    setSelectedCategory(null);
  };

  const exploreCategory = (category: ShopCategory) => {
    setSelectedCategory(null);

    window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("shop:category-selected", {
          detail: {
            id: category.id,
            title: category.title,
          },
        })
      );
    }, 200);
  };

  const closeContactModal = () => {
    setContactOpen(false);
  };

  return (
    <section className="shop-section" id="shop" ref={sectionRef}>
      <div className="shop-container">
        {/* SECTION HEADING */}
        <div className="shop-heading">
          <div className="shop-heading-copy">
            <p className="shop-eyebrow">
              <span />
              02 / OUR COLLECTION
            </p>

            <h2 className="shop-title">
              Find Your <span>Next.</span>
            </h2>

            <p className="shop-description">
              From powerful laptops to premium PC components,
              discover the technology that brings your ideas to life.
            </p>
          </div>

          <a className="shop-all-link" href="#featured">
            Explore featured products
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* HORIZONTAL SCROLLING CATEGORY SHOWCASE */}
        <div
          className="shop-horizontal-section"
          ref={horizontalSectionRef}
        >
          <div className="shop-horizontal-sticky">
            <div
              className="shop-category-grid"
              ref={horizontalTrackRef}
            >
              {categories.map((category, index) => {
                const Icon = category.icon;

                return (
                  <button
                    type="button"
                    className="shop-category-card"
                    key={category.id}
                    onClick={() => setSelectedCategory(category)}
                    aria-label={`View details about ${category.title}`}
                  >
                    <div className="shop-card-image">
                      <img
                        src={category.image}
                        alt={category.title}
                        loading="lazy"
                      />

                      <div className="shop-image-overlay" />

                      <span className="shop-card-icon">
                        <Icon size={20} strokeWidth={1.6} />
                      </span>

                      <span className="shop-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="shop-card-content">
                      <div>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                      </div>

                      <span className="shop-card-arrow">
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* CUSTOM PC SERVICE BANNER */}
        <div className="shop-service-banner">
          <div className="shop-service-icon">
            <Wrench size={25} />
          </div>

          <div className="shop-service-copy">
            <span>NEED A CUSTOM SETUP?</span>

            <h3>Let's build your perfect PC.</h3>

            <p>
              Get help choosing components, upgrading your system,
              or building a PC tailored to your needs.
            </p>
          </div>

          <button
            type="button"
            className="shop-service-button"
            onClick={() => setContactOpen(true)}
          >
            Talk to our team
            <ArrowUpRight size={17} />
          </button>
        </div>
      </div>

      {/* CATEGORY DETAILS MODAL */}
      {selectedCategory && (
        <div
          className="shop-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeCategoryModal();
            }
          }}
        >
          <div
            className="shop-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="shop-modal-title"
          >
            <button
              type="button"
              className="shop-modal-close"
              onClick={closeCategoryModal}
              aria-label="Close category details"
            >
              <X size={21} />
            </button>

            <div className="shop-modal-image">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.title}
              />

              <div className="shop-modal-image-overlay" />

              <span className="shop-modal-badge">
                <Sparkles size={14} />
                EXPLORE COLLECTION
              </span>
            </div>

            <div className="shop-modal-content">
              <p className="shop-eyebrow">
                <span />
                THANMAYI ENTERPRISES
              </p>

              <h2 id="shop-modal-title">
                {selectedCategory.title}
              </h2>

              <h3 className="shop-modal-subtitle">
                {selectedCategory.subtitle}
              </h3>

              <p className="shop-modal-description">
                {selectedCategory.details}
              </p>

              <div className="shop-modal-products">
                <h4>Explore the collection</h4>

                <div className="shop-modal-product-list">
                  {selectedCategory.products.map((product) => (
                    <div
                      key={product}
                      className="shop-modal-product"
                    >
                      <CheckCircle2 size={16} />
                      <span>{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shop-modal-features">
                {selectedCategory.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <div className="shop-modal-actions">
                <button
                  type="button"
                  className="shop-modal-primary"
                  onClick={() => exploreCategory(selectedCategory)}
                >
                  Explore Products
                  <ArrowUpRight size={17} />
                </button>

                <button
                  type="button"
                  className="shop-modal-secondary"
                  onClick={closeCategoryModal}
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT OPTIONS MODAL */}
      {contactOpen && (
        <div
          className="shop-contact-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeContactModal();
            }
          }}
        >
          <div
            className="shop-contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="shop-contact-title"
          >
            <button
              type="button"
              className="shop-contact-close"
              onClick={closeContactModal}
              aria-label="Close contact options"
            >
              <X size={21} />
            </button>

            <span className="shop-contact-eyebrow">
              THANMAYI ENTERPRISES
            </span>

            <h2 id="shop-contact-title">
              Let's talk <span>technology.</span>
            </h2>

            <p className="shop-contact-description">
              Need help choosing a laptop, upgrading your PC, or
              building a custom setup? Contact our team using your
              preferred method.
            </p>

            <div className="shop-contact-options">
              <a
                className="shop-contact-option"
                href="tel:+919611165613"
              >
                <span className="shop-contact-icon">
                  <Phone size={21} />
                </span>

                <span className="shop-contact-text">
                  <strong>Call Us</strong>
                  <small>Speak with our team</small>
                </span>

                <ArrowUpRight size={17} />
              </a>

              <a
                className="shop-contact-option"
                href="https://wa.me/919611165613?text=Hello%20Thanmayi%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services."
                target="_blank"
                rel="noreferrer"
              >
                <span className="shop-contact-icon">
                  <MessageCircle size={21} />
                </span>

                <span className="shop-contact-text">
                  <strong>WhatsApp Message</strong>
                  <small>Chat with us directly</small>
                </span>

                <ArrowUpRight size={17} />
              </a>

              <a
                className="shop-contact-option"
                href="mailto:Chandru.chandrashekar8@gmail.com?subject=Product%20Enquiry%20-%20Thanmayi%20Enterprises"
              >
                <span className="shop-contact-icon">
                  <Mail size={21} />
                </span>

                <span className="shop-contact-text">
                  <strong>Email Us</strong>
                  <small>Send a product enquiry</small>
                </span>

                <ArrowUpRight size={17} />
              </a>
            </div>

            <p className="shop-contact-note">
              We're happy to help you find the right setup.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
