import { 
  FaVial, 
  FaSyringe, 
  FaMicroscope, 
  FaChartLine, 
  FaUsers, 
  FaHospitalAlt, 
  FaDna, 
  FaLeaf 
} from "react-icons/fa";

export const categories = [
  { name: "All", icon: FaUsers },
  { name: "Virology", icon: FaMicroscope },
  { name: "Vaccination", icon: FaSyringe },
  { name: "Clinical Trials", icon: FaVial },
  { name: "Epidemiology", icon: FaChartLine },
  { name: "Public Health", icon: FaHospitalAlt },
  { name: "Genomics", icon: FaDna },
  { name: "Traditional Medicine", icon: FaLeaf },
];

export const articles = [
  {
    title: "mRNA Vaccine Efficacy Against Emerging SARS-CoV-2 Variants",
    category: "Vaccination",
    date: "Oct 2025",
    excerpt:
      "A multicenter study evaluating mRNA vaccine response against new variants, highlighting adaptive immunity and long-term protection.",
  },
  {
    title: "Long COVID and Post-Infection Syndrome: A Global Clinical Review",
    category: "Clinical Trials",
    date: "Sep 2025",
    excerpt:
      "A systematic review of long-term symptoms and clinical manifestations of post-infection COVID-19 cases across diverse demographics.",
  },
  {
    title: "Viral Mutations and Transmission Dynamics of SARS-CoV-2",
    category: "Virology",
    date: "Aug 2025",
    excerpt:
      "An in-depth genomic analysis exploring mutation patterns in current COVID-19 variants and their epidemiological implications.",
  },
  {
    title: "Public Health Strategies During the COVID-19 Resurgence",
    category: "Public Health",
    date: "Jul 2025",
    excerpt:
      "A comparative study of global mitigation approaches including vaccination drives, testing models, and healthcare infrastructure responses.",
  },
  {
    title: "Comparative Vaccine Effectiveness Study in High-Risk Populations",
    category: "Vaccination",
    date: "May 2025",
    excerpt:
      "Examines immunogenicity, efficacy, and safety of diverse vaccine platforms in high-risk age groups and immunocompromised patients.",
  },
  {
    title: "India’s Genomic Surveillance Network and Its Role in Pandemic Response",
    category: "Genomics",
    date: "Nov 2025",
    excerpt:
      "An overview of India’s INSACOG initiative tracking viral mutations and supporting evidence-based public health decisions.",
  },
  {
    title: "Epidemiological Modeling of Dengue Outbreaks in Southern India",
    category: "Epidemiology",
    date: "Sep 2025",
    excerpt:
      "Predictive models assessing the spread of dengue using climatic and demographic variables across Tamil Nadu and Kerala.",
  },
  {
    title: "Ayurvedic Formulations as Immunomodulators: Evidence and Challenges",
    category: "Traditional Medicine",
    date: "Aug 2025",
    excerpt:
      "A critical evaluation of traditional Indian medicinal formulations and their immunological potential in modern clinical settings.",
  },
  {
    title: "Healthcare Infrastructure Gaps and Pandemic Preparedness in Rural India",
    category: "Public Health",
    date: "Jul 2025",
    excerpt:
      "Investigates access to critical care and medical resources in Tier-2 and rural districts during post-pandemic recovery phases.",
  },
  {
    title: "Phase II Clinical Trial on Indigenous Protein Subunit Vaccine",
    category: "Clinical Trials",
    date: "Jun 2025",
    excerpt:
      "Results from Bharat Biotech’s ongoing trials testing efficacy and tolerability of a next-gen protein-based vaccine candidate.",
  },
  {
    title: "Zoonotic Spillovers and Wildlife Surveillance in India’s Northeastern States",
    category: "Virology",
    date: "May 2025",
    excerpt:
      "A field-based study mapping wildlife-human interfaces contributing to zoonotic transmission and surveillance readiness.",
  },
  {
    title: "AI-Driven Analytics in Monitoring COVID-19 Vaccine Distribution Across India",
    category: "Epidemiology",
    date: "Apr 2025",
    excerpt:
      "Machine learning applications tracking vaccine logistics, cold chain integrity, and demographic distribution in real-time.",
  },
  {
    title: "Plant-Based Antivirals: The Future of Natural Therapeutics",
    category: "Traditional Medicine",
    date: "Mar 2025",
    excerpt:
      "Explores the bioactive compounds from Indian flora with proven antiviral efficacy in preclinical evaluations.",
  },
];
