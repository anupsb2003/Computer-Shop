
import { useState } from "react";
import "./ReviewPage.css";

const GOOGLE_MAPS_REVIEW_URL =
  "https://www.google.com/maps/place/Thanmayi+Enterprises/@12.8708272,77.6538041,1106m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae6d22b3d45825:0x924d14ebce603fa1!8m2!3d12.870822!4d77.656379!16s%2Fg%2F11kkzl_n19?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D";

export default function ReviewPage() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [service, setService] = useState("Computer / Laptop");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !feedback.trim()) {
      setError("Please enter your name and feedback.");
      return;
    }

    setError("");

    // Open Google Maps so the customer can publish their review.
    window.open(
      GOOGLE_MAPS_REVIEW_URL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="review-page">
      <section className="review-layout">
        {/* LEFT IMAGE PANEL */}
        <div className="review-visual">
          <div className="review-image-overlay" />

          <a href="/" className="review-brand">
            <span className="brand-mark">T</span>
            <span>
              <strong>THANMAYI</strong>
              <small>ENTERPRISES</small>
            </span>
          </a>

          <div className="review-visual-content">
            <span className="review-eyebrow">
              YOUR EXPERIENCE MATTERS
            </span>

            <h1>
              Technology
              <br />
              <span>you can trust.</span>
            </h1>

            <p>
              Your feedback helps us deliver better products,
              reliable service, and a better experience every day.
            </p>

            <div className="review-trust">
              <div className="trust-icon">✦</div>
              <div>
                <strong>Thank you for choosing us</strong>
                <span>Every customer makes a difference.</span>
              </div>
            </div>
          </div>

          <div className="review-visual-footer">
            <span>COMPUTERS</span>
            <span>·</span>
            <span>ACCESSORIES</span>
            <span>·</span>
            <span>TECH SUPPORT</span>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="review-form-panel">
          <div className="review-form-inner">
            <a href="/" className="mobile-review-brand">
              <span className="brand-mark">T</span>
              <span>THANMAYI ENTERPRISES</span>
            </a>

            <div className="form-heading">
              <span className="form-overline">CUSTOMER FEEDBACK</span>
              <h2>Share your experience.</h2>
              <p>
                We would love to hear from you. Tell us how we did.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="customer-name">Your name</label>
                <input
                  id="customer-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-field">
                <label>Your rating</label>
                <div
                  className="rating-stars"
                  role="group"
                  aria-label="Choose a rating"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={
                        star <= rating
                          ? "rating-star active"
                          : "rating-star"
                      }
                      onClick={() => setRating(star)}
                      aria-label={`${star} star${star > 1 ? "s" : ""}`}
                      aria-pressed={rating === star}
                    >
                      ★
                    </button>
                  ))}
                  <span className="rating-label">
                    {rating === 5
                      ? "Excellent"
                      : rating === 4
                      ? "Very good"
                      : rating === 3
                      ? "Good"
                      : rating === 2
                      ? "Fair"
                      : "Needs improvement"}
                  </span>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="service">What was your experience about?</label>
                <div className="select-wrapper">
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option>Computer / Laptop</option>
                    <option>Computer accessories</option>
                    <option>Monitors and displays</option>
                    <option>Computer repair / Service</option>
                    <option>PC components</option>
                    <option>Customer support</option>
                    <option>Other</option>
                  </select>
                  <span>⌄</span>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="feedback">Your feedback</label>
                <textarea
                  id="feedback"
                  placeholder="Tell us what you liked about your experience..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                  required
                />
                <span className="field-hint">
                  Your honest feedback helps us improve.
                </span>
              </div>

              {error && <p className="form-error">{error}</p>}

              <button type="submit" className="review-submit">
                Continue to Google Reviews
                <span>↗</span>
              </button>

              <div className="review-privacy">
                <span>✦</span>
                <p>
                  Your feedback is valuable to us. Your Google review
                  will only be published when you submit it on Google.
                </p>
              </div>
            </form>

            <div className="review-bottom">
              <span>THANMAYI ENTERPRISES</span>
              <span>MADE FOR BETTER EXPERIENCES.</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
