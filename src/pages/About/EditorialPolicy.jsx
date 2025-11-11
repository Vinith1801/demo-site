import React from "react";
import {
  FaBalanceScale,
  FaUserCheck,
  FaPenFancy,
  FaRegClock,
  FaShieldAlt,
} from "react-icons/fa";

export default function EditorialPolicy() {
  return (
    <div className="page-content">
      <section className="hero-block light-red">
        <h1>Editorial Policy & Peer Review</h1>
        <p>
          Pulsus Group maintains a transparent and ethical editorial process that
          adheres to global publishing standards. Our peer review and editorial
          oversight ensure the credibility, accuracy, and quality of every
          publication we release.
        </p>
      </section>

      <section className="content-section grid-3">
        <div className="info-card">
          <FaBalanceScale className="icon" />
          <h2>Ethical Integrity</h2>
          <p>
            We follow international ethical guidelines including COPE, ICMJE, and
            WAME. All authors are required to declare conflicts of interest,
            funding sources, and authorship contributions transparently.
          </p>
        </div>

        <div className="info-card">
          <FaUserCheck className="icon" />
          <h2>Rigorous Peer Review</h2>
          <p>
            Manuscripts undergo a **double-blind peer review** process handled by
            domain experts and editorial board members to ensure impartiality and
            accuracy in evaluation.
          </p>
        </div>

        <div className="info-card">
          <FaShieldAlt className="icon" />
          <h2>Data Integrity</h2>
          <p>
            All data, figures, and clinical information must comply with our
            editorial integrity policies to prevent plagiarism, duplication, or
            unethical research practices.
          </p>
        </div>
      </section>

      <section className="policy-process">
        <h2>The Peer Review Workflow</h2>
        <div className="steps">
          <div className="step">
            <span className="step-icon">1</span>
            <div>
              <h3>Submission Screening</h3>
              <p>
                Each manuscript is screened for plagiarism and compliance with
                journal guidelines before being forwarded to the editor for
                initial assessment.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-icon">2</span>
            <div>
              <h3>Double-Blind Review</h3>
              <p>
                The editor assigns at least two independent reviewers who assess
                the manuscript’s scientific validity, originality, and
                methodology without knowing the author’s identity.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="step-icon">3</span>
            <div>
              <h3>Final Decision & Publication</h3>
              <p>
                Based on reviewer feedback, the editor decides whether to accept,
                revise, or reject the submission. Accepted manuscripts proceed to
                copy-editing, proofing, and publication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight">
        <FaRegClock className="icon-large" />
        <h2>Committed to Timely & Transparent Review</h2>
        <p>
          Pulsus strives for a fair, efficient, and transparent editorial process
          that supports authors and upholds the trust of the global scientific
          community.
        </p>
      </section>
    </div>
  );
}
