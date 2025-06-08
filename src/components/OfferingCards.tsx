const offerings = [
  {
    tag: "Solution",
    title: "CloudKeeper AZ",
    desc: "End-to-end AWS cost optimization with savings up to 25%.",
  },
  {
    tag: "Solution",
    title: "CloudKeeper EDP+",
    desc: "EDP negotiation and management  for maximum AWS savings.",
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
  <div
    className="flex flex-col gap-12 p-8 bg-white justify-center items-center"
    // style={{ backgroundImage: "url('public/icons/Homepagebg.png')" }}
    style={{
      backgroundImage: "url('/icons/Homepagebg.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* 🟦 SECTION 1: Solutions */}
    <div className="flex gap-2 justify-around items-center  rounded-lg shadow-sm w-full">
      {/* 🟨 Heading */}
      <div className="bg-pink-100 text-black rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50">
        Solutions
      </div>
      {/* 🟧 Solution Cards Grid */}
      <div className="flex flex-wrap gap-6  p-4  ">
        {offerings.map((item, idx) => (
          // 🟥 Individual Card
          <div
            className="flex  gap-4  rounded-r-2xl hover:border-pink-300 transition-all duration-300 "
            key={idx}
          >
            <div className="flex-col w-full border-2 border-gray-100 p-9 ">
              {/* 🔵 Icon + Title */}
              <div className="  flex items-center gap-3 mb-2 p-4 ">
                {item.title === "CloudKeeper AZ" && (
                  <img
                    src="/icons/az.svg"
                    alt="CloudKeeper AZ icon"
                    className="w-10 h-10 object-cover rounded-none"
                  />
                )}
                {item.title === "CloudKeeper EDP+" && (
                  <img
                    src="/icons/edp.svg"
                    alt="CloudKeeper EDP+ icon"
                    className="w-10 h-10 object-cover rounded-none"
                  />
                )}
                <div className="text-lg font-semibold text-gray-900">
                  {item.title}
                </div>
              </div>
              {/* 🟡 Description */}
              <div className="text-sm text-gray-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* 🟦 SECTION 2: Platforms (Copied Layout) */}
    <div className="flex  p-4 m-4 w-full">
      {/* 🟨 Heading */}
      <div className="flex gap-2 justify-center items-center  rounded-lg shadow-sm ">
        <div className="bg-pink-100 text-black rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 p-4">
          Platforms
        </div>
      </div>

      {/* 🟧 Platform Cards Grid */}
      <div className="grid grid-cols-2 m-4 p-4 ">
        {offeringsTwo.map((item, idx) => (
          // 🟥 Individual Card
          <div className="flex  m-4" key={idx}>
            <div className="flex-col w-full border-2 border-gray-100 p-9 m-9 ">
              {/* 🔵 Icon + Title */}
              <div className=" flex items-center gap-3 mb-2 p-2  ">
                {item.title === "CloudKeeper Auto" && (
                  <img
                    src="/icons/auto.svg"
                    alt="CloudKeeper Auto icon"
                    className="w-10 h-10 object-cover rounded-none"
                  />
                )}
                {item.title === "CloudKeeper Lens" && (
                  <img
                    src="/icons/lens.svg"
                    alt="CloudKeeper Lens icon"
                    className="w-10 h-10 object-cover rounded-none"
                  />
                )}
                {item.title === "CloudKeeper Tune" && (
                  <img
                    src="/icons/tuner.svg"
                    alt="CloudKeeper Tuner icon"
                    className="w-10 h-10 object-cover rounded-none"
                  />
                )}
                <div className="text-lg font-semibold text-gray-900">
                  {item.title}
                </div>
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
