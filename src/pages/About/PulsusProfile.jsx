import React from "react";
import { FaGlobe, FaUsers, FaBookOpen, FaBullseye } from "react-icons/fa";

export default function PulsusProfile() {
  return (
    <div className="page-content">
      <section className="hero-block light-red">
        <h1>About Pulsus Group</h1>
        <p>
          Pulsus Group is a globally recognized open-access publisher committed
          to advancing medical and scientific knowledge through high-quality,
          peer-reviewed journals and conferences. With partnerships spanning
          across continents, Pulsus acts as a trusted bridge between researchers,
          practitioners, and academicians in the medical sciences.
        </p>
      </section>

      <section className="content-section grid-2">
        <div className="info-card">
          <FaGlobe className="icon" />
          <h2>Global Reach</h2>
          <p>
            Headquartered in the United Kingdom, Pulsus operates in over 25
            countries with editorial offices, conference divisions, and
            strategic partnerships ensuring broad international representation.
          </p>
        </div>

        <div className="info-card">
          <FaUsers className="icon" />
          <h2>Collaborative Network</h2>
          <p>
            Pulsus works closely with renowned medical societies, healthcare
            organizations, and academic institutions to promote transparent,
            ethical, and impactful scientific publishing.
          </p>
        </div>
      </section>

      <section className="content-section grid-2">
        <div className="info-card">
          <FaBookOpen className="icon" />
          <h2>Publishing Excellence</h2>
          <p>
            Our journals maintain rigorous editorial standards and are indexed in
            multiple global repositories. Each publication undergoes a
            double-blind peer-review process to ensure scientific reliability and
            innovation.
          </p>
        </div>

        <div className="info-card">
          <FaBullseye className="icon" />
          <h2>Our Mission</h2>
          <p>
            Pulsus strives to disseminate scientific research without barriers —
            empowering open access for all, promoting visibility of researchers,
            and accelerating innovation in healthcare and life sciences.
          </p>
        </div>
      </section>

      <section className="highlight">
        <h2>Trusted by the Global Medical Community</h2>
        <p>
          Our publishing network serves millions of researchers, clinicians, and
          students worldwide — delivering cutting-edge advancements across over
          100 medical and life science disciplines.
        </p>
      </section>
    </div>
  );
}
