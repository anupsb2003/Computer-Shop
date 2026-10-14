
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";
import "./Contact.css";


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Product enquiry",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setStatus("idle");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("Email service is not configured yet. Please try again later.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          subject: form.subject,
          message: form.message.trim(),
          reply_to: form.email.trim(),
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "Product enquiry",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS submission failed:", err);
      setError("We couldn't send your message. Please try again or contact us directly.");
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-page-layout">
        <aside className="contact-visual">
          <div className="contact-visual-overlay" />

          <a href="/" className="contact-brand">
            <span className="contact-brand-mark">T</span>
            <span className="contact-brand-copy">
              <strong>THANMAYI</strong>
              <small>ENTERPRISES</small>
            </span>
          </a>

          <div className="contact-visual-content">
            <span className="contact-eyebrow">LET'S CONNECT</span>
            <h1>
              Your next
              <br />
              <span>tech solution</span>
              <br />
              starts here.
            </h1>
            <p>
              Looking for computers, accessories, PC components,
              or technical support? Tell us what you need.
              We're here to help.
            </p>

            <div className="contact-trust">
              <span className="contact-trust-icon">✦</span>
              <span>
                <strong>We're happy to help</strong>
                <small>Personal support for your technology needs.</small>
              </span>
            </div>
          </div>

          <div className="contact-visual-footer">
            <span>COMPUTERS</span><span>·</span>
            <span>ACCESSORIES</span><span>·</span>
            <span>TECH SUPPORT</span>
          </div>
        </aside>

        <section className="contact-form-panel">
          <div className="contact-form-inner">
            <a href="/" className="contact-mobile-brand">
              <span className="contact-brand-mark">T</span>
              <span>THANMAYI ENTERPRISES</span>
            </a>

            <header className="contact-form-heading">
              <span className="contact-form-overline">CONTACT OUR TEAM</span>
              <h2>Let's talk.</h2>
              <p>
                Have a question or need a product? Send us a message
                and we'll get back to you.
              </p>
            </header>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-subject">What can we help you with?</label>
                <div className="contact-select-wrapper">
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  >
                    <option>Product enquiry</option>
                    <option>Computer / Laptop</option>
                    <option>Computer accessories</option>
                    <option>PC components</option>
                    <option>Repair / Technical support</option>
                    <option>Order enquiry</option>
                    <option>Other</option>
                  </select>
                  <span aria-hidden="true">⌄</span>
                </div>
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us what you're looking for..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  maxLength={3000}
                  required
                />
                <span className="contact-field-hint">
                  Include any product details or questions.
                </span>
              </div>

              {status === "success" && (
                <p className="contact-form-success" role="status">
                  <CheckCircle2 size={18} />
                  Your message was sent successfully. Thank you for contacting us!
                </p>
              )}

              {status === "error" && (
                <p className="contact-form-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="contact-page-submit"
                disabled={status === "sending"}
              >
                <span>
                  {status === "sending" ? "Sending message..." : "Send Enquiry"}
                </span>
                {status === "sending" ? (
                  <LoaderCircle className="contact-spinner" size={18} />
                ) : (
                  <Send size={17} />
                )}
              </button>

              <div className="contact-page-privacy">
                <span>✦</span>
                <p>
                  Your message will be sent securely through our configured
                  email service. Please don't include sensitive personal details.
                </p>
              </div>
            </form>
          </div>
        </section>
      </section>
    </main>
  );
}
