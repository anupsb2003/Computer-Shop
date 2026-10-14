
import "./Footer.css";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Navigation,
} from "lucide-react";

const email = "Chandru.chandrashekar8@gmail.com";
const phone = "+91 96111 65613";

const address =
  "#672, Slv Building, 9th Cross Road, Hosa Road, Bengaluru, Karnataka 560100";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=12.870822,77.656379&destination_place_id=ChIJJVg0syJtuj4Rofpg4-sUTZQ";


const whatsappUrl = "https://wa.me/919611165613";

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        {/* Brand and business description */}
        <div className="footer-about">
          <a href="#home" className="footer-logo" aria-label="Thanmayi Enterprises home">
            <span className="footer-logo-mark">T<span>.</span></span>
            <span className="footer-logo-name">
              THANMAYI
              <small>ENTERPRISES</small>
            </span>
          </a>

          <p className="footer-description">
            Thanmayi Enterprises in Electronic City, Bengaluru, is your trusted
            destination for laptop and computer services. We handle laptop
            repairs, desktop repairs, motherboard issues, display replacements,
            original chargers, and computer accessories with professional care,
            quick turnaround, and reasonable pricing. We also offer quality
            second-hand laptops to meet your needs.
          </p>

          <a
            href="/contact"
            className="footer-text-link"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Quick navigation */}
        <div className="footer-links-column">
          <h3 className="footer-column-title">Quick Links</h3>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#shop">Products &amp; Services</a>
            <a href="#about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/review">Customer Reviews</a>
          </nav>

          <div className="footer-social-note">
            <span className="footer-status-dot" />
            Here to help with your tech needs
          </div>
        </div>

        {/* Contact details */}
        <div className="footer-contact-column">
          <h3 className="footer-column-title">Contact Us</h3>

          <div className="footer-contact-card">
            <div className="footer-address-row">
              <span className="footer-contact-icon">
                <MapPin size={22} strokeWidth={1.7} />
              </span>

              <div className="footer-contact-content">
                <span className="footer-contact-label">Visit our store</span>
                <strong>Thanmayi Enterprises</strong>
                <p>{address}</p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-directions-link"
                >
                  <Navigation size={15} />
                  Get directions
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            <a className="footer-contact-row" href="tel:+919611165613">
              <span className="footer-contact-icon">
                <Phone size={20} strokeWidth={1.7} />
              </span>
              <span className="footer-contact-content">
                <span className="footer-contact-label">Call us</span>
                <strong>{phone}</strong>
              </span>
              <ArrowUpRight className="footer-contact-arrow" size={18} />
            </a>

            <a className="footer-contact-row" href={`mailto:${email}`}>
              <span className="footer-contact-icon">
                <Mail size={20} strokeWidth={1.7} />
              </span>
              <span className="footer-contact-content">
                <span className="footer-contact-label">Email us</span>
                <strong className="footer-email">{email}</strong>
              </span>
              <ArrowUpRight className="footer-contact-arrow" size={18} />
            </a>

            <a
              className="footer-contact-row"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="footer-contact-icon">
                <MessageCircle size={20} strokeWidth={1.7} />
              </span>
              <span className="footer-contact-content">
                <span className="footer-contact-label">WhatsApp</span>
                <strong>Chat with our team</strong>
              </span>
              <ArrowUpRight className="footer-contact-arrow" size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <a href="#home" className="footer-bottom-brand">
          THANMAYI <span>ENTERPRISES</span>
        </a>

        <p>
          © {new Date().getFullYear()} Thanmayi Enterprises.
          All rights reserved.
        </p>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="footer-bottom-link"
        >
          Find us in Bengaluru <ArrowUpRight size={15} />
        </a>
      </div>
    </footer>
  );
}
