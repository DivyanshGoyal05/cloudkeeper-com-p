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

const OfferingCards = () => (
  // 🟩 OUTER WRAPPER
  <div className="flex flex-col gap-12 p-8 bg-white justify-center items-center shadow-lg rounded-lg">
    {/* 🟦 SECTION 1: Solutions */}
    <div className="flex gap-2 justify-center items-center border rounded-lg shadow-sm ">
      {/* 🟨 Heading */}
<div className="border-4 border-pink-300 bg-pink-200 flex justify-center items-center font-black text-gray-800 px-6 py-3 rounded-lg shadow-sm">
      Solutions
    </div> 
      {/* 🟧 Solution Cards Grid */}
      <div className="flex flex-wrap gap-6 border-2 border-yellow-500">
        {offerings.map((item, idx) => (
          // 🟥 Individual Card 
          <div className="flex border-2 gap-4 border-grey-500" key={idx}>
            <div className="flex-col w-full sm:w-1/2 lg:w-1/3 p-4 border rounded-lg shadow-sm">
              {/* 🔵 Icon + Title */}
              <div className="border-2 border-blue-500 flex items-center gap-3 mb-2 p-2 rounded">
                {item.title === "CloudKeeper AZ" && (
                  <img src="/icons/az.svg" alt="CloudKeeper AZ icon" className="w-10 h-10" />
                )}
                {item.title === "CloudKeeper EDP+" && (
                  <img src="/icons/edp.svg" alt="CloudKeeper EDP+ icon" className="w-10 h-10" />
                )}
                <div className="text-lg font-semibold text-gray-900">{item.title}</div>
              </div>
              {/* 🟡 Description */}
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* 🟦 SECTION 2: Platforms (Copied Layout) */}
    <div className="flex flex-col">
      {/* 🟨 Heading */}
      <div className="mb-4 text-xl font-bold text-gray-800">Platforms</div>

      {/* 🟧 Platform Cards Grid */}
      <div className="flex flex-wrap gap-6">
        {offeringsTwo.map((item, idx) => (
          // 🟥 Individual Card
          <div className="flex" key={idx}>
            <div className="flex-col w-full sm:w-1/2 lg:w-1/3 p-4 border rounded-lg shadow-sm">
              {/* 🔵 Icon + Title */}
              <div className="border-2 border-blue-500 flex items-center gap-3 mb-2 p-2 rounded">
                {item.title === "CloudKeeper Auto" && (
                  <img src="/icons/auto.svg" alt="CloudKeeper Auto icon" className="w-10 h-10" />
                )}
                {item.title === "CloudKeeper Lens" && (
                  <img src="/icons/lens.svg" alt="CloudKeeper Lens icon" className="w-10 h-10" />
                )}
                {item.title === "CloudKeeper Tune" && (
                  <img src="/icons/tuner.svg" alt="CloudKeeper Tuner icon" className="w-10 h-10" />
                )}
                <div className="text-lg font-semibold text-gray-900">{item.title}</div>
              </div>
              {/* 🟡 Description */}
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OfferingCards;
