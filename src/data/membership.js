// src/data/membership.js
import { FaUsers, FaCrown, FaUniversity } from "react-icons/fa";

export const membershipBenefits = [
  "Complimentary access to Pulsus online journals and publications",
  "Exclusive discounts on international conferences and events",
  "Opportunity to publish research papers with waived or reduced APCs",
  "Priority updates on global medical collaborations and grants",
  "Recognition as a Pulsus community member on official publications",
];

export const membershipTiers = [
  {
    name: "Standard",
    icon: FaUsers,
    price: "Free",
    features: [
      "Access to all open journals",
      "Newsletter subscription",
      "Basic event discounts",
    ],
    buttonText: "Join Now",
    buttonStyle: "default",
  },
  {
    name: "Premium",
    icon: FaCrown,
    price: "$99 / Year",
    features: [
      "All Standard benefits",
      "Priority manuscript review",
      "50% off conference tickets",
      "Exclusive webinars & workshops",
    ],
    buttonText: "Upgrade Now",
    buttonStyle: "primary",
    featured: true,
  },
  {
    name: "Institutional",
    icon: FaUniversity,
    price: "Custom Plan",
    features: [
      "Campus-wide access",
      "Institutional dashboard",
      "Bulk submission benefits",
      "Custom branding opportunities",
    ],
    buttonText: "Contact Us",
    buttonStyle: "default",
  },
];
