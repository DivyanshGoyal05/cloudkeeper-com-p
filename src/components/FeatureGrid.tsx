import React from "react";
import Image from "next/image";
const bgColors = ["#f1fafe", "#fffcf6", "#f9fffc", "#fffaf9"];

const features = [
  {
    icon: (
      <Image
        src="/icons/rate.svg"
        width={50}
        height={50}
        alt="Rate Optimization"
        className="object-contain"
      />
    ),
    title: "Rate Optimization",
    desc: `Instant discounts on Compute, RDS, CloudFront, and AWS support.\nHassle-free management of long-term RIs & Savings Plans.\nMaximize the benefits of AWS EDP, PPA, MAP, and other similar programs.`,
  },
  {
    icon: (
      <Image
        src="/icons/usage.svg"
        width={50}
        height={50}
        alt="Usage Optimization"
        className="object-contain"
      />
    ),
    title: "Usage Optimization",
    desc: `Ensure your cloud resources perfectly match your workload.\nOptimize resource efficiency with automated and manual policies.\nIdentify optimization opportunities across compute, data, and storage.`,
  },
  {
    icon: (
      <Image
        src="/icons/cloud_1.svg"
        width={50}
        height={50}
        alt="Cloud Consulting & Support"
        className="object-contain"
      />
    ),
    title: "Cloud Consulting & Support",
    desc: `24/7 personalized support from certified cloud experts.\nWell-Architected Reviews and cost audits.\nArchitectural consulting and migration support.`,
  },
  {
    icon: (
      <Image
        src="/icons/cost.svg"
        width={50}
        height={50}
        alt="Cloud Cost Visibility Platform"
        className="object-contain"
      />
    ),
    title: "Cloud Cost Visibility Platform",
    desc: `Granular insights with resource-level cloud cost visibility.\nCustom dashboards & cost anomaly detection.\nAlerts & notifications for informed decision-making.`,
  },
];

const FeatureGrid = () => (
  <section className="bg-sky-50 py-12 px-4">
    <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
      How do we <span className="text-sky-500">simplify</span> your entire cloud
      cost optimization journey?
    </h2>
    <p className="text-center text-gray-500 mb-10 max-w-full mx-auto">
      CloudKeeper combines the power of group buying & commitments management,
      expert cloud consulting & support, and a complete visibility & analytics
      platform to{" "}
      <span className="text-sky-500">
        reduce your cloud cost & maximize the value from AWS, Microsoft Azure, &
        Google Cloud.
      </span>
    </p>

    <div className="grid grid-cols-4 gap-8 max-w-5xl mx-auto  pt-8">
      {features.map((f, idx) => {
        const bgColor = bgColors[idx % bgColors.length]; // e.g. #f1fafe etc.

        return (
          <div
            key={idx}
            className="flex flex-col items-center text-left px-4 transition-all duration-300 rounded-md hover:shadow-lg group p-2"
            style={{
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = bgColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <div
              className="rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-120"
              style={{ backgroundColor: bgColor }}
            >
              <div className="text-gray-600 group-hover:text-black transition-colors duration-300">
                {f.icon}
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-black">{f.title}</h3>
            <p className="text-gray-500 text-sm whitespace-pre-line">
              {f.desc}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

export default FeatureGrid;
