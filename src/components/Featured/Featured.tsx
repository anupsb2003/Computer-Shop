
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Monitor,
  Zap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "./Featured.css";

const highlights = [
  {
    icon: Cpu,
    label: "NEXT-GEN HARDWARE",
    value: "Performance",
  },
  {
    icon: Zap,
    label: "BUILT FOR SPEED",
    value: "Power",
  },
  {
    icon: ShieldCheck,
    label: "QUALITY FIRST",
    value: "Reliability",
  },
];

export default function Featured() {
  return (
    <section className="featured-section" id="featured">
      <div className="featured-background-glow" />
      <div className="featured-grid-pattern" />

      <div className="featured-container">
        <div className="featured-topline">
          <span>
            <span className="featured-status-dot" />
            04 / THE NEXT GENERATION
          </span>

          <span className="featured-topline-right">
            ENGINEERED FOR WHAT'S NEXT
          </span>
        </div>

        <div className="featured-layout">
          <div className="featured-copy">
            <p className="featured-eyebrow">
              <span />
              YOUR WORLD. YOUR RULES.
            </p>

            <h2 className="featured-title">
              Your setup.
              <br />
              <span>Your universe.</span>
            </h2>

            <p className="featured-description">
              Powerful technology. Exceptional design.
              Everything you need to game harder, create
              more, and build what comes next.
            </p>

            <div className="featured-actions">
              <a
                href="#categories"
                className="featured-button"
              >
                Explore Technology
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="featured-secondary-button"
              >
                Build your setup
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="featured-highlights">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  className="featured-highlight"
                  key={label}
                >
                  <span className="featured-highlight-icon">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>

                  <div>
                    <span className="featured-highlight-label">
                      {label}
                    </span>
                    <strong>{value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="featured-visual">
            <div className="featured-visual-glow" />

            <div className="featured-orbit featured-orbit-one" />
            <div className="featured-orbit featured-orbit-two" />
            <div className="featured-orbit featured-orbit-three" />

            <div className="featured-tech-label featured-label-top">
              <span className="featured-label-dot" />
              HIGH PERFORMANCE SYSTEMS
            </div>

            <div className="featured-device">
              <div className="featured-monitor">
                <div className="featured-monitor-screen">
                  <div className="featured-screen-glow" />
                  <div className="featured-screen-content">
                    <span>THANMAYI</span>
                    <strong>POWER</strong>
                    <span className="featured-screen-caption">
                      BUILT BEYOND LIMITS
                    </span>
                  </div>
                  <div className="featured-screen-scanline" />
                </div>

                <div className="featured-monitor-neck" />
                <div className="featured-monitor-base" />
              </div>

              <div className="featured-pc">
                <div className="featured-pc-top" />

                <div className="featured-pc-panel">
                  <div className="featured-pc-fan featured-fan-one">
                    <span />
                  </div>
                  <div className="featured-pc-fan featured-fan-two">
                    <span />
                  </div>
                  <div className="featured-pc-fan featured-fan-three">
                    <span />
                  </div>

                  <div className="featured-pc-core">
                    <Cpu size={19} />
                  </div>
                </div>

                <div className="featured-pc-bottom" />
              </div>

              <div className="featured-desk">
                <div className="featured-keyboard">
                  {Array.from({ length: 30 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>

                <div className="featured-mouse" />
              </div>
            </div>

            <div className="featured-floating-card featured-floating-left">
              <span className="featured-floating-icon">
                <Cpu size={17} />
              </span>
              <div>
                <span>PROCESSING POWER</span>
                <strong>Next level</strong>
              </div>
            </div>

            <div className="featured-floating-card featured-floating-right">
              <Sparkles size={17} />
              <span>YOUR NEXT BUILD</span>
            </div>

            <div className="featured-tech-label featured-label-bottom">
              <span>01</span>
              <span className="featured-label-line" />
              DESIGNED FOR PERFORMANCE
            </div>
          </div>
        </div>

        <div className="featured-bottomline">
          <span>COMPUTERS / COMPONENTS / GAMING GEAR</span>
          <a href="#shop">
            DISCOVER YOUR NEXT UPGRADE
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
