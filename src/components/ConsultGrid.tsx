const consults = [
  {
    title: "Consult",
    services: [
      "FinOps Consulting & Support",
      "Well-Architected Reviews for AWS & Azure",
    ],
  },
  {
    title: "Implement",
    services: [
      "Cloud Migration Planning & Implementation",
      "Cloud Modernization Strategies",
    ],
  },
  {
    title: "Manage",
    services: [
      "24*7 Personalized Cloud Support",
      "Partner-led Support at a discounted price",
      "On-Demand Professional Services",
    ],
  },
  {
    title: "Improve",
    services: ["Cloud Infrastructure & Cost Optimization", "DevOps Services"],
  },
];

const CloudCostOptimization = () => {
  const firstList = consults.slice(0, 2); // Consult & Implement
  const secondList = consults.slice(2); // Manage & Improve

  return (
    <div className="bg-gray-50 py-16 px-4 bg-[#f1fafe]">
      {/* Row 1 */}
      <div className="flex  gap-8 mb-12">
        {/* Hero */}
        <div className="w-full lg:w-1/3">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 leading-tight">
            Your cloud cost
            <br />
            optimization needs
            <br />
            more than{" "}
            <span className="text-blue-500">
              "just
              <br />
              savings"
            </span>
          </h1>
        </div>

        {/* First 2 sections */}
        {firstList.map((section, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.services.map((service, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-2 h-2 rounded-full border-2 border-red-400 mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-600 text-sm">{service}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex  gap-8">
        {/* Last 2 sections */}
        {secondList.map((section, index) => (
          <div
            key={index}
            className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.services.map((service, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-2 h-2 rounded-full border-2 border-red-400 mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-600 text-sm">{service}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom Section */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between gap-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            We take care of your cloud's end-to-end needs, ensuring it's always
            optimized & future-proof, while you focus solely on growing your
            business.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 self-start">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloudCostOptimization;
