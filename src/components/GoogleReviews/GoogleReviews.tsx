
import { useEffect, useState } from "react";
import "./GoogleReviews.css";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Thanmayi+Enterprises/@12.870822,77.656379,1106m/data=!3m1!1e3!4m8!3m7!1s0x3bae6d22b3d45825:0x924d14ebce603fa1!8m2!3d12.870822!4d77.656379!9m1!1b1!16s%2Fg%2F11kkzl_n19";

type GoogleReview = {
  name?: string;
  rating?: number;
  text?: { text?: string };
  publishTime?: string;
  relativePublishTimeDescription?: string;
  googleMapsUri?: string;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
    uri?: string;
  };
};

type GooglePlaceResponse = {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
};

function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Google"
    >
      <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.8 6.1-15Z" />
      <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z" />
      <path fill="#FBBC05" d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z" />
      <path fill="#EA4335" d="M24 12c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.9 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z" />
    </svg>
  );
}

export default function GoogleReviews() {
  const [place, setPlace] = useState<GooglePlaceResponse | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const response = await fetch("/api/google-reviews", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Google reviews could not be loaded.");
        }

        const data: GooglePlaceResponse = await response.json();
        setPlace(data);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError("Reviews are temporarily unavailable.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadReviews();
    return () => controller.abort();
  }, []);

  const reviews = place?.reviews ?? [];
  const visibleReviews = Array.from(
    { length: Math.min(3, reviews.length) },
    (_, offset) => reviews[(activeIndex + offset) % reviews.length]
  );

  const move = (direction: number) => {
    if (!reviews.length) return;

    setActiveIndex(
      (current) =>
        (current + direction + reviews.length) % reviews.length
    );
  };

  return (
    <section className="google-reviews-section" id="reviews">
      <div className="google-reviews-container">
        <div className="google-reviews-header">
          <div>
            <div className="google-reviews-title">
              <GoogleMark />
              <h2>Google reviews</h2>
            </div>

            <div className="google-reviews-summary">
              {place?.rating != null && (
                <strong>
                  {place.rating.toFixed(1)} ★
                  {place.userRatingCount != null &&
                    ` · ${place.userRatingCount} reviews`}
                </strong>
              )}

              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
                View all reviews on Google
              </a>
            </div>
          </div>

          <div className="google-review-arrows">
            <button type="button" onClick={() => move(-1)} aria-label="Previous reviews">‹</button>
            <button type="button" onClick={() => move(1)} aria-label="Next reviews">›</button>
          </div>
        </div>

        {loading && <p className="review-text">Loading Google reviews…</p>}
        {error && <p className="review-text">{error}</p>}

        {!loading && !error && reviews.length === 0 && (
          <p className="review-text">
            No reviews were returned by Google. You can read the reviews on the
            business listing.
          </p>
        )}

        <div className="google-review-grid">
          {visibleReviews.map((review, index) => {
            const author = review.authorAttribution;
            const text = review.text?.text ?? "";
            const date =
              review.relativePublishTimeDescription ??
              (review.publishTime
                ? new Date(review.publishTime).toLocaleDateString()
                : "");

            return (
              <article
                className="google-review-card"
                key={review.name ?? `${author?.displayName}-${index}`}
              >
                <div className="google-review-author">
                  {author?.photoUri ? (
                    <img
                      className="google-review-avatar"
                      src={author.photoUri}
                      alt=""
                    />
                  ) : (
                    <div className="google-review-avatar">
                      {(author?.displayName ?? "?").charAt(0)}
                    </div>
                  )}

                  {author?.uri ? (
                    <a
                      href={author.uri}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>{author.displayName ?? "Google user"}</strong>
                    </a>
                  ) : (
                    <strong>{author?.displayName ?? "Google user"}</strong>
                  )}

                  <GoogleMark className="google-review-mini-logo" />
                </div>

                <div className="google-review-rating">
                  <span aria-label={`${review.rating ?? 0} out of 5 stars`}>
                    {"★".repeat(review.rating ?? 0)}
                  </span>
                  <time>{date}</time>
                </div>

                <p className="review-text">
                  {text}
                  {review.googleMapsUri && (
                    <>
                      {" "}
                      <a
                        className="review-read-more"
                        href={review.googleMapsUri}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read on Google
                      </a>
                    </>
                  )}
                </p>
              </article>
            );
          })}
        </div>

        <div className="google-reviews-actions">
          <a
            className="google-reviews-button"
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
          >
            <GoogleMark />
            Read all reviews on Google
          </a>

          <a
            className="google-write-review"
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Write a Review <span>↗</span>
          </a>
        </div>

        <p className="google-reviews-attribution">
          Reviews provided by Google Maps. Reviews are ordered by Google's
          relevance ranking. Google Maps
        </p>
      </div>
    </section>
  );
}
