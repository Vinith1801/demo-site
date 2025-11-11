import React from "react";
import { FaBook, FaUsers } from "react-icons/fa";

export default function Sidebar() {
  const journalsList = [
    "Journal of Endocrine Disorders & Surgery",
    "Journal of Medical Biotechnology",
    "Journal of Hematology and Clinical Therapeutics",
    "International Journal of Molecular Medicine",
    "Clinical Endocrinology Reports",
    "Biotechnology Advances",
    "Molecular and Cellular Endocrinology",
    "Translational Hematology Journal",
    "Frontiers in Medical Biotechnology",
    "Journal of Clinical Research and Therapeutics",
    "Endocrine Pathophysiology and Research",
    "Journal of Cellular Biotechnology",
    "Clinical Biochemistry and Diagnostics",
    "Advances in Endocrine Research",
    "International Journal of Regenerative Medicine",
    "Molecular Therapy and Biotechnology",
    "Journal of Hematologic Innovations",
    "Annals of Clinical and Molecular Endocrinology",
    "Current Trends in Biomedical Engineering",
    "Therapeutic Advances in Molecular Medicine",
    "Clinical Biotechnology Insights",
    "Endocrine Science and Practice",
    "Bioprocess and Biomedical Technology Journal",
    "Journal of Translational Endocrinology",
    "Hematology and Blood Disorders Reports",
    "Biomedical Therapeutics and Drug Discovery",
    "Journal of Experimental Biotechnology",
    "Frontiers in Endocrine and Metabolic Research",
    "Clinical Advances in Hematology and Oncology",
    "International Review of Medical Biotechnology",
  ];

  const societiesList = [
    "Polish Society of Orthopaedics and Traumatology",
    "Brazilian Society Phlebology and Lymphology",
    "Brazil Federal District Otorhinolaryngologist Society",
    "International Society of Addiction Medicine",
    "European Biotechnology Thematic Network Association",
    "World Federation of Pediatrics Intensive and Critical Care Societies",
    "World Association of Medical Sciences",
    "International Society for Ceramics in Medicine",
    "Thalassaemia International Federation",
    "World Association of Integrated Medicine",
    "Neurootological and Equilibriometric Society",
    "Autism Community Network",
    "National Biosafety Association",
    "IVF World Wide",
    "American Research & Policy Institute",
    "Nigerian Medical Association",
    "International Drug Abuse Research Society",
    "International Narcotics Research Conference",
    "International Society for the Study of Xenobiotics",
  ];

  return (
    <aside className="sidebar">
      <section className="about">
        <p>
          <strong>Pulsus Group</strong>, the medical peer-review publisher,
          supports the work of medical researchers in a manner that exemplifies
          the highest standards in research integrity.
        </p>
        <p>
          Endorsed by international
          societies, Pulsus Group is an ardent supporter of global medical
          research and publishes journals directed at a broad range of physician
          specialties.
        </p>
      </section>

      {/* Journals List (fixed height scroll) */}
      <section className="sidebar-section journals-fixed">
        <h4 className="sidebar-title sticky">
          <FaBook className="title-icon" /> Journals List
        </h4>
        <ul>
          {journalsList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Societies List (auto height) */}
      <section className="sidebar-section">
        <h4 className="sidebar-title sticky">
          <FaUsers className="title-icon" /> Societies List
        </h4>
        <ul>
          {societiesList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
