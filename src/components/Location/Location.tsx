
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import "./Location.css";

const mapUrl = "https://www.google.com/maps/place/Thanmayi+Enterprises/@12.8708272,77.6538041,1106m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae6d22b3d45825:0x924d14ebce603fa1!8m2!3d12.870822!4d77.656379!16s%2Fg%2F11kkzl_n19?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D";

const embedUrl =
  "https://maps.google.com/maps?q=12.870822,77.656379&z=16&output=embed";

export default function Location() {
  return (
    <section className="location-section" id="location">
      <div className="location-container">
        <div className="location-heading">
          <p className="location-eyebrow">
            <span />
            VISIT OUR STORE
          </p>

          <h2>
            Find us <span>here.</span>
          </h2>

          <p>
            Looking for the right technology? Visit Thanmayi
            Enterprises and explore your next setup.
          </p>
        </div>

        <div className="location-card">
          <div className="location-map">
            <iframe
              src={embedUrl}
              title="Thanmayi Enterprises location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="location-map-open"
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={15} />
              Open full map
            </a>
          </div>

          <div className="location-details">
            <div className="location-icon">
              <MapPin size={24} />
            </div>

            <p className="location-label">OUR LOCATION</p>

            <h3>Thanmayi Enterprises</h3>

            <p className="location-description">
              Find our store on Google Maps and plan your visit.
            </p>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-directions"
            >
              <Navigation size={17} />
              Get Directions
              <ExternalLink size={15} />
            </a>

            <div className="location-coordinates">
              <span>LOCATION COORDINATES</span>
              <p>12.870822° N, 77.656379° E</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
