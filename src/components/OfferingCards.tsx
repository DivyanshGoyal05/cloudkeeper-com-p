// src/components/OfferingCards.jsx
import React from "react";

const offerings = [
  {
    tag: "Solution",
    title: "CloudKeeper AZ",
    desc: "End-to-end AWS cost optimization with savings up to 25%.",
  },
  {
    tag: "Solution",
    title: "CloudKeeper EDP+",
    desc: "EDP negotiation and management for maximum AWS savings.",
  },
];

const offeringsTwo = [
  {
    tag: "Platform",
    title: "CloudKeeper Auto",
    desc: "Automated SaaS for AWS cost optimization.",
  },
  {
    tag: "Platform",
    title: "CloudKeeper Lens",
    desc: "Cloud cost visibility and analytics platform.",
  },
  {
    tag: "Platform",
    title: "CloudKeeper Tune",
    desc: "FinOps automation and plug-ins for AWS.",
  },
];

const OfferingCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 transition duration-300 ease-in-out hover:shadow-xl hover:border-blue-500">
    <div className="flex items-center justify-center mb-4">
      <div className="w-16 h-16 bg-blue-50 p-3 rounded-full flex items-center justify-center">
        <img src={icon} alt={`${title} icon`} className="w-10 h-10" />
      </div>
    </div>
    <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
      {title}
    </h3>
    <p className="text-gray-600 text-center text-sm leading-relaxed">{desc}</p>
  </div>
);

const OfferingCards = () => {
  return (
    <section
      className="py-16 px-4 bg-gray-50"
      style={{
        backgroundImage: "url('/icons/Homepagebg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bitter-medium text-gray-800 text-center mb-12">
          Our <span className="text-blue-500">Cloud Cost Optimization</span>{" "}
          Offerings
        </h2>

        {/* Solutions Section */}
        <div className="flex items-center mb-12">
          <div className="flex-shrink-0 mr-8 mt-6">
            <span className="bg-pink-100 text-black  px-6 py-3 rounded-full text-lg shadow-sm">
              Solutions
            </span>
          </div>
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((item, idx) => {
              const iconPath =
                item.title === "CloudKeeper AZ"
                  ? "/icons/az.svg"
                  : "/icons/edp.svg";
              return (
                <OfferingCard
                  key={idx}
                  icon={iconPath}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>

        {/* Platforms Section */}
        <div className="flex items-center ">
          <div className="flex-shrink-0 mr-8 mt-6">
            <span className="bg-pink-100 text-black  px-6 py-3 rounded-full text-lg shadow-sm">
              Platforms
            </span>
          </div>
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offeringsTwo.map((item, idx) => {
              let iconPath = "/icons/default.svg";
              if (item.title === "CloudKeeper Auto")
                iconPath = "/icons/auto.svg";
              if (item.title === "CloudKeeper Lens")
                iconPath = "/icons/lens.svg";
              if (item.title === "CloudKeeper Tune")
                iconPath = "/icons/tuner.svg";
              return (
                <OfferingCard
                  key={idx}
                  icon={iconPath}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingCards;
