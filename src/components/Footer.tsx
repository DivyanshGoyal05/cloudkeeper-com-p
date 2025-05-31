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
        <div className="flex justify-around">
          <div>
            <p className="mb-4 text-4xl text-black font-bold">
              Be the first to know the latest FinOps insights and news!
            </p>
          </div>

          <div>
            <form className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Email ID"
                className="px-3 py-2 border rounded w-full bg-white text-gray-800"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#4398d7] text-white rounded font-semibold"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Social and Badges */}

      <div className="flex justify-between items-center px-8 py-6">
        <div className="flex flex-col items-center gap-4">
          <div>
            <h4 className="font-bold text-black text-center">Follow Us</h4>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:opacity-80">
              <img src="/icons/in.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="/icons/twitter_0.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="/icons/youtube_0.svg"
                alt="YouTube"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:opacity-80">
              <img
                src="/icons/medium-logo-93CDCF6451-seeklogo.com 1.svg"
                alt="Medium"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <div className="text-black"> Privacy Policy</div>
          <div className="text-black"> Responsible Disclosure </div>
        </div>
        <div className="flex flex-col gap-2 text-black">
          <div>
            <img
              src="/icons/Cloudkeeper_New.svg"
              alt="CloudKeeper Logo"
              width={150}
              height={40}
            />
          </div>
          <div>Copyright ©2025</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
