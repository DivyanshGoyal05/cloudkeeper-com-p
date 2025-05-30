
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
  <section className="bg-white py-12 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-blue-600 text-xl font-semibold mb-6">
        Cloud Cost Optimization Offerings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((o, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                  o.tag === "Solution"
                    ? "bg-pink-100 text-pink-600"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {o.tag}
              </span>
            </div>

            <div className="flex">
              <div className="flex">
                <div>image icon</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {o.title}
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm">{o.desc}</p>
            </div>
            <div>
              <div className="flex">
                <div>image icon</div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {o.title}
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-sm">{o.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OfferingCards;

//solutions only one time load ho
//ya fir second component jo load ho raha h uska number two ho
//ya fir list ko hi divide karlo aur map alaga alag load karwa do
