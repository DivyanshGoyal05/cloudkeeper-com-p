
// Step 1: Define all footer sections in a list
const footerSections = [
  {
    title: "Solutions",
    links: ["CloudKeeper AZ", "CloudKeeper EDP+"],
  },
  {
    title: "Platforms",
    links: [
      "CloudKeeper Auto",
      "CloudKeeper Tuner",
      "CloudKeeper Lens - AWS",
      "CloudKeeper Lens - GCP",
      "CloudKeeper Lens - Azure",
    ],
  },
  {
    title: "Industries",
    links: [
      "SaaS & ISVs",
      "Retail & E-commerce",
      "FinTech",
      "Healthcare",
      "Education",
      "Media & Entertainment",
    ],
  },
  {
    title: "Capabilities",
    links: [
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
    title: "Programs",
    links: [
      "ISV Accelerator Program",
      "Private Equity",
      "AWS Migration Acceleration Program",
      "AWS Graviton",
    ],
  },
  {
    title: "Insights",
    links: [
      "Blog",
      "Whitepapers",
      "Podcasts",
      "On-Demand Webinars",
      "Expert Interview",
      "Glossary",
    ],
  },
  {
    title: "Company",
    links: [
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
const socialIcons = [
  { name: "YouTube", src: "/icons/youtube_0.svg", alt: "YouTube" },
  { name: "Twitter", src: "/icons/twitter_0.svg", alt: "Twitter" },
  { name: "LinkedIn", src: "/icons/linkedin_0.svg", alt: "LinkedIn" },
  { name: "Facebook", src: "/icons/facebook_0.svg", alt: "Facebook" },
];

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-10 px-4 text-gray-700">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

      {/* First column: dynamically render sections */}
      <div className="space-y-6">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h4 className="font-bold mb-2">{section.title}</h4>
            <ul className="space-y-1 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-pink-500">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Second column: Subscribe section */}
      {/* <div>
        <img src="/logo.svg" alt="CloudKeeper Logo" className="h-8 mb-4" />
        <p className="text-sm mb-4">
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
      </div> */}
      <div
  className="p-4 bg-cover bg-center flex "
  style={{ backgroundImage: "url('/icons/top-banner-exit-popup.png')" }}
>
  {/* <img src="/logo.svg" alt="CloudKeeper Logo" className="h-8 mb-4" /> */}
<div>
  <p className="text-sm mb-4">
    Be the first to know the latest FinOps insights and news!
  </p>
</div>
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


      {/* Third column: Social + badges */}
      <div>
        <div>
        <h4 className="font-bold mb-2">Follow Us</h4>
        <div className="flex gap-3 mb-4">
         <img src="" alt="" />
         <img src="" alt="" />
         <img src="" alt="" />
         <img src="" alt="" />
        </div>
        <div className="flex gap-2">
          <img src="/badges/partner.png" alt="Partner Badge" className="h-6" />
          <img src="/badges/award.png" alt="Award Badge" className="h-6" />
        </div>
      </div>
      </div>
    </div>

    <div className="text-center text-xs text-gray-400">
      &copy; {new Date().getFullYear()} CloudKeeper. All rights reserved.
    </div>
  </footer>
);

export default Footer;
