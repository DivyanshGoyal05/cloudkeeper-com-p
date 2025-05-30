import React, { useState } from "react";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const footerData = [
    {
      title: "SOLUTIONS",
      key: "solutions",
      items: ["CloudKeeper AZ", "CloudKeeper EDP+"],
    },
    {
      title: "PLATFORMS",
      key: "platforms",
      items: [
        "CloudKeeper Auto",
        "CloudKeeper Tuner",
        "CloudKeeper Lens - AWS",
        "CloudKeeper Lens - GCP",
        "CloudKeeper Lens - Azure",
      ],
    },
    {
      title: "INDUSTRIES",
      key: "industries",
      items: [
        "SaaS & ISVs",
        "Retail & E-commerce",
        "FinTech",
        "Healthcare",
        "Education",
        "Media & Entertainment",
      ],
    },
    {
      title: "CAPABILITIES",
      key: "capabilities",
      items: [
        "AWS EDP Contract Negotiation",
        "FinOps Consulting & Support",
        "Well-Architected Reviews - AWS",
        "Well-Architected Reviews - GCP",
        "Well-Architected Reviews - Azure",
        "Cloud Migration Planning & Implementation",
        "Cloud Modernization Strategies",
        "24*7 Personalized Cloud Support",
        "Partner-Led Support",
        "DevOps",
        "Architecture Guidance & Cost Optimization",
      ],
    },
    {
      title: "PROGRAMS",
      key: "programs",
      items: [
        "ISV Accelerator Program",
        "Private Equity",
        "AWS Migration Acceleration Program",
        "AWS Graviton",
      ],
    },
    {
      title: "INSIGHTS",
      key: "insights",
      items: [
        "Blog",
        "Whitepapers",
        "Podcasts",
        "On-Demand Webinars",
        "Expert Interview",
        "Glossary",
      ],
    },
    {
      title: "COMPANY",
      key: "company",
      items: [
        "About Us",
        "Our Team",
        "Careers",
        "Press Release",
        "Alliances - AWS",
        "Alliances - Google Cloud",
        "Alliances - Azure",
      ],
    },
  ];

  const additionalSections = [
    {
      type: "newsletter",
      content: (
        <div>
          <img src="/logo.svg" alt="CloudKeeper Logo" className="h-8 mb-4" />
          <p className="text-sm mb-4">
            Be the first to know the latest FinOps insights and news!
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border rounded w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-700 text-white rounded font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      ),
    },
    {
      type: "social",
      content: (
        <div>
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex gap-3 mb-4">
            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              F
            </span>
            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              T
            </span>
            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              L
            </span>
            <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              Y
            </span>
          </div>
          <div className="flex gap-2">
            <img
              src="/badges/partner.png"
              alt="Partner Badge"
              className="h-6"
            />
            <img src="/badges/award.png" alt="Award Badge" className="h-6" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="flex flex-col py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Desktop-first: Grid layout on desktop, block layout on mobile */}
          <div className="grid grid-cols-8 gap-8 max-md:block">
            {footerData.map((footer) => (
              <div
                key={footer.key}
                className="max-md:border-b max-md:border-gray-100 max-md:last:border-none"
              >
                {/* Desktop: Just title, Mobile: Clickable header with arrow */}
                <div
                  className="max-md:cursor-pointer max-md:flex max-md:justify-between max-md:items-center max-md:py-4"
                  onClick={() => toggleSection(footer.key)}
                >
                  <h4 className="font-semibold text-gray-800 text-sm tracking-wide mb-4 max-md:mb-0">
                    {footer.title}
                  </h4>
                  <svg
                    className={`hidden max-md:block w-5 h-5 text-gray-600 transition-transform duration-200 ${
                      openSections[footer.key] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Desktop: Always visible, Mobile: Toggle visibility */}
                <div
                  className={`block ${
                    openSections[footer.key] ? "max-md:block" : "max-md:hidden"
                  } max-md:pb-4`}
                >
                  <ul className="space-y-2">
                    {footer.items.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Additional sections (Newsletter and Social) */}
            {additionalSections.map((section, index) => (
              <div
                key={section.type}
                className="max-md:border-b max-md:border-gray-100 max-md:last:border-none max-md:py-4"
              >
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 px-4 py-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CloudKeeper. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
