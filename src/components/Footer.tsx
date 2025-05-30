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

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="px-4 py-10 md:py-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop-first: Grid layout, then override for mobile */}
          <div className="grid grid-cols-6 gap-8 md:block">
            {footerData.map((footer) => (
              <div
                key={footer.key}
                className="md:border-b md:border-gray-100 md:last:border-none"
              >
                {/* Desktop: Title only, Mobile: Clickable header with arrow */}
                <div
                  className="cursor-pointer flex md:justify-between md:items-center md:py-4"
                  onClick={() => toggleSection(footer.key)}
                >
                  <h4 className="font-semibold text-gray-800 text-sm tracking-wide mb-4 md:mb-0">
                    {footer.title}
                  </h4>
                  <svg
                    className="hidden md:block w-5 h-5 text-gray-600 transition-transform duration-200 md:${
                      openSections[footer.key] ? 'rotate-180' : ''
                    }"
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
                <div className="block md:${openSections[footer.key] ? 'block' : 'hidden'} md:pb-4">
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
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      {/* Newsletter Section */}
      <div
        className="p-4 bg-cover bg-center rounded"
        style={{ backgroundImage: "url('/icons/top-banner-exit-popup.png')" }}
      >
        <p className="text-sm mb-4 text-black">
          Be the first to know the latest FinOps insights and news!
        </p>

        <form className="flex gap-2 mb-4">
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
      {/* Social and Badges */}
      <div>
        <h4 className="font-bold text-black mb-2">Follow Us</h4>
        <div className="flex gap-3 mb-4">
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
        </div>
        <div className="flex gap-2">
          {/* <img src="/badges/partner.png" alt="Partner Badge" className="h-6" />
          <img src="/badges/award.png" alt="Award Badge" className="h-6" /> */}
        </div>
      </div>

      <div className="text-center text-xs text-black mt-6">
        &copy; {new Date().getFullYear()} CloudKeeper. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
