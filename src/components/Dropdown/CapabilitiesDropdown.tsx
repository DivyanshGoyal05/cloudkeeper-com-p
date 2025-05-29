import React from "react";
import Image from "next/image";

interface CapabilitiesDropdownProps {
  section: string;
}

interface DropdownItem {
  icon: string | React.ReactNode;
  heading: string;
  description: string;
  tags?: string[];
}

interface CapabilitySection {
  title: string;
  icon: string;
  items: DropdownItem[];
}

const capabilitiesSections: CapabilitySection[] = [
  {
    title: "CONSULT",
    icon: "consult.svg",
    items: [
      {
        icon: "consult.svg",
        heading: "AWS EDP Contract Negotiation",
        description: "Smarter Negotiation, Better Deal & Long-term Value",
      },
      {
        icon: "consult.svg",
        heading: "FinOps Consulting & Support",
        description:
          "Expert guidance and support by certified FinOps professionals",
      },
      {
        icon: "consult.svg",
        heading: "Well-Architected Review",
        description:
          "Ensure the long-term sustainability of your cloud infrastructure",
        tags: ["AWS", "Google Cloud", "Azure"],
      },
    ],
  },
  {
    title: "IMPLEMENT",
    icon: "implement.svg",
    items: [
      {
        icon: "implement.svg",
        heading: "Cloud Migration Planning & Implementation",
        description: "Plan and implement seamless cloud migration",
      },
      {
        icon: "implement.svg",
        heading: "Cloud Modernization Strategies",
        description: "Future-Proof Your Cloud with Strategic Modernization",
      },
    ],
  },
  {
    title: "MANAGE",
    icon: "manage.svg",
    items: [
      {
        icon: "manage.svg",
        heading: "24×7 Personalized Cloud Support",
        description:
          "Ensure your cloud operations run smoothly round-the-clock",
      },
      {
        icon: "manage.svg",
        heading: "Partner-led Support",
        description: "24×7 enterprise support at a discounted price",
      },
    ],
  },
  {
    title: "IMPROVE",
    icon: "improve.svg",
    items: [
      {
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-50">
            <Image
              src="/icons/improve_0.svg"
              width={50}
              height={50}
              alt="DevOps"
              className="object-contain"
            />
          </span>
        ),
        heading: "DevOps",
        description: "Power your projects with our DevOps expertise",
      },
      {
        icon: (
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-50">
            <Image
              src="/icons/improve_0.svg"
              width={50}
              height={50}
              alt="Architecture Guidance"
              className="object-contain"
            />
          </span>
        ),
        heading: "Architecture Guidance & Cost Optimization",
        description: "Run your infrastructure, cost-efficiently",
      },
    ],
  },
  {
    title: "PROGRAMS",
    icon: "programs.svg",
    items: [
      {
        icon: "ic-programs.svg",
        heading: "ISV Accelerator Program",
        description:
          "Customized solutions & services focussed on helping ISVs scale on the cloud, cost-efficiently",
      },
      {
        icon: "ic-programs.svg",
        heading: "Private Equity",
        description:
          "A partnership focussed on long-term growth & maximizing cloud savings for PE-backed companies",
      },
      {
        icon: "ic-programs.svg",
        heading: "AWS Migration Acceleration Program",
        description:
          "Streamline your move to AWS with exclusive partner benefits from the AWS MAP",
      },
      {
        icon: "ic-programs.svg",
        heading: "AWS Graviton",
        description:
          "Future-proof your infrastructure with AWS Graviton-based Workloads",
      },
    ],
  },
];

const CapabilitiesDropdown: React.FC<CapabilitiesDropdownProps> = ({}) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1100px] bg-white rounded-2xl shadow-2xl p-8 z-50 animate-fade-in border border-gray-100">
      <div className="absolute -top-4 left-0 w-full h-4"></div>

      {/* Top row with first 4 sections */}
      <div className="grid grid-cols-4 gap- mb-8">
        {capabilitiesSections.slice(0, 4).map((sectionData) => (
          <div key={sectionData.title} className="flex ">
            {/* Section header with icon and title */}
            <div className="flex gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8">
                <Image
                  src={`/icons/${sectionData.icon}`}
                  width={24}
                  height={24}
                  alt={sectionData.title}
                  className="object-contain"
                />
              </span>
            </div>

            {/* Items for this section */}

            <div className="flex flex-col gap-4">
              <div className="font-bold text-blue-900 text-sm tracking-wide">
                {sectionData.title}
              </div>

              {sectionData.items.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="font-semibold text-gray-800 text-sm mb-1 hover:text-pink-600 cursor-pointer transition-colors leading-tight">
                    {item.heading}
                  </div>
                  <div className="text-gray-500 text-xs leading-relaxed">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags for Well-Architected Review */}
            {/* {sectionData.title === "CONSULT" && (
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100">
                {sectionData.items
                  .find((item) => item.tags)
                  ?.tags?.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            )} */}
          </div>
        ))}
      </div>

      {/* Bottom row with PROGRAMS section */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex flex-col">
          {/* PROGRAMS section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8">
              <Image
                src={`/icons/${capabilitiesSections[4].icon}`}
                width={24}
                height={24}
                alt="PROGRAMS"
                className="object-contain"
              />
            </span>
            <div className="font-bold text-blue-900 text-sm tracking-wide">
              PROGRAMS
            </div>
          </div>

          {/* Programs items in a 4-column grid */}
          <div className="grid grid-cols-4 gap-8">
            {capabilitiesSections[4].items.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="font-semibold text-gray-800 text-sm mb-1 hover:text-pink-600 cursor-pointer transition-colors leading-tight">
                  {item.heading}
                </div>
                <div className="text-gray-500 text-xs leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesDropdown;
