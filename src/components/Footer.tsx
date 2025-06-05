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
    <footer className="bg-white border-t border-gray-200 ">
      <div className="flex-col  items-center justify-center mx-auto ">
        <div className="max-w mx-auto">
          <div className="grid grid-cols-6 gap-8 md:block ">
            {footerData.map((footer) => (
              <div
                key={footer.key}
                className="md:border-b md:border-gray-100 md:last:border-none"
              >
                {/* Handle grouped sections */}
                {footer.sections ? (
                  footer.sections.map((section) => (
                    <div key={section.key}>
                      <div
                        className="cursor-pointer flex md:justify-between md:items-center md:py-4"
                        onClick={() => toggleSection(section.key)}
                      >
                        <h4 className=" text-gray-800 font-metropolis-bold text-base tracking-wide mb-4 md:mb-0 font-bold">
                          {section.title}
                        </h4>
                      </div>
                      <div className="block md:block md:pb-4">
                        <ul className="space-y-2">
                          {section.items.map((item, index) => (
                            <li key={index}>
                              <a
                                href="#"
                                className="font-metropolis-bold text-gray-800 text-base hover:text-pink-600 transition-colors py-[8px]"
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
                      className="cursor-pointer flex md:justify-between md:items-center md:py-4"
                      onClick={() => toggleSection(footer.key)}
                    >
                      <h4 className=" text-gray-800 font-metropolis-bold text-base tracking-wide mb-4 md:mb-0 font-bold container-width">
                        {footer.title}
                      </h4>
                    </div>
                    <div className="block md:block md:pb-4">
                      <ul className="space-y-2">
                        {footer.items.map((item, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="font-metropolis-bold text-gray-800 text-base hover:text-pink-600 transition-colors py-[8px]"
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
          className="p-6 bg-cover bg-center rounded"
          style={{
            backgroundImage: "url('/icons/top-banner-exit-popup.png')",
          }}
        >
          <div className="flex justify-around items-center gap-8 ">
            <div className="flex-row items-center justify-center">
              <p className="text-3xl font-extrabold text-[#2f3b4c] text-left">
                Be the first to know the latest FinOps insights and news!
              </p>
            </div>

            {/* Form Section */}
            <div className="md:w-1/2">
              <form className="flex flex-row md:flex-row items-start md:items-center gap-2">
                <div className="w-full md:w-2/3">
                  <input
                    type="email"
                    required
                    placeholder="Email ID*"
                    className="w-full px-4 py-2 border border-gray-300 rounded text-gray-800 bg-white focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-1 py-2 bg-[#4398d7] text-white rounded font-semibold hover:bg-[#2c6a9d] transition-colors w-1/2 md:w-auto"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* DO NOT CHANGE: Bottom section untouched */}
      <div className="bg-gray-50 py-6 mt-8">
        <div className="  flex items-center justify-around gap-4 px-2">
          <div className="  gap-2  flex justify-around items-center">
            <div>
              <h4 className="font-bold text-black ">Follow Us</h4>
            </div>

            <div className="flex gap-3 justify-center items-center ">
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

          <div className="flex gap-8 justify-center items-center py-6">
            <div className="text-black">
              {" "}
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </div>

            <div className="text-black">
              {" "}
              <a href="#" className="hover:text-blue-600">
                Responsible Disclosure{" "}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-black border-gray-900">
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
