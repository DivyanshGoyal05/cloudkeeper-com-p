// Footer.jsx
import { useState } from "react";
import Image from "next/image";

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
      key: "solutions-platforms",
      sections: [
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
    <footer className="bg-white  ">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
            {footerData.map((footer) => (
              <div
                key={footer.key}
                className="pb-1 md:pb-0  md:last:border-none"
              >
                {/* Handle grouped sections */}
                {footer.sections ? (
                  footer.sections.map((section) => (
                    <div key={section.key}>
                      <div
                        className="cursor-pointer flex justify-between items-center py-2 md:py-4"
                        onClick={() => toggleSection(section.key)}
                      >
                        <h4 className="text-gray-800 font-metropolis-bold text-base mb-2 md:mb-0 font-bold">
                          {section.title}
                        </h4>
                      </div>
                      <div className="block md:block md:pb-4">
                        <ul className="space-y-2">
                          {section.items.map((item, index) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="font-metropolis-bold text-gray-600 text-sm hover:text-pink-600 transition-colors py-1 block"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div
                      className="cursor-pointer flex justify-between items-center py-2 md:py-4"
                      onClick={() => toggleSection(footer.key)}
                    >
                      <h4 className="text-gray-800 font-metropolis-bold text-base mb-2 md:mb-0 font-bold w-full">
                        {footer.title}
                      </h4>
                    </div>
                    <div className="block md:block md:pb-4">
                      <ul className="space-y-2">
                        {footer.items.map((item, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="font-metropolis-bold text-gray-600 text-sm hover:text-pink-600 transition-colors py-1 block"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className="w-full mt-12 p-8 bg-cover bg-center rounded-lg flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            backgroundImage: "url('/icons/top-banner-exit-popup.png')",
          }}
        >
          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl font-bold text-[#2f3b4c]">
              Be the first to know the latest FinOps insights and news!
            </p>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  required
                  placeholder="Email ID*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-800 bg-white"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#4398d7] text-white rounded-md font-semibold hover:bg-[#2c6a9d] transition-colors w-full sm:w-auto"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* DO NOT CHANGE: Bottom section untouched */}
      <div className="bg-gray-50 py-6 mt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div>
              <h4 className="font-bold text-gray-800">Follow Us</h4>
            </div>

            <div className="flex gap-3 justify-center items-center">
              <a href="#" className="hover:opacity-80">
                <Image
                  src="/icons/in.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image
                  src="/icons/twitter_0.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image
                  src="/icons/youtube_0.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <Image
                  src="/icons/medium-logo-93CDCF6451-seeklogo.com 1.svg"
                  alt="Medium"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 py-2 text-gray-600">
            {" "}
            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600">
              Responsible Disclosure{" "}
            </a>
          </div>
          <div className="flex flex-col gap-1 text-gray-600">
            <div>
              <Image
                src="/icons/Cloudkeeper_New.svg"
                alt="CloudKeeper Logo"
                width={150}
                height={40}
              />
            </div>
            <div>Copyright ©2025</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
