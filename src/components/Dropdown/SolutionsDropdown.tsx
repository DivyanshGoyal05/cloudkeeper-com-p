import React from "react";
import Image from "next/image";

interface SolutionsDropdownProps {
  section: string;
}

const items = [
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full items-center justify-center">
        <Image
          src="/icons/az.svg"
          width={51}
          height={50}
          alt="Cost Optimization"
          className="object-contain"
        />
      </span>
    ),
    title: "Cost Optimization",
    desc: "Maximize your cloud ROI with intelligent cost-saving strategies.",
  },
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full items-center justify-center">
        <Image
          src="/icons/edp.svg"
          width={51}
          height={50}
          alt="Security Enhancements"
        />
      </span>
    ),
    title: "Security Enhancements",
    desc: "Ensure robust protection with enterprise-grade cloud security solutions.",
  },
];

const SolutionsDropdown: React.FC<SolutionsDropdownProps> = ({ section }) => (
  <div className="absolute left-0 top-full mt-2 w-[800px] bg-white rounded-2xl shadow-2xl  z-50 flex flex-col gap-4 animate-fade-in border border-gray-100">
    <div className="absolute -top-4 left-0 w-full h-4"></div>
    <div className="grid grid-cols-2 gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-4 items-center rounded-xl p-1">
          {item.icon}
          <div>
            <div className="font-semibold text-gray-800 text-base mb-1 hover:text-pink-600 cursor-pointer transition-colors">
              {item.title}
            </div>
            <div className="text-gray-500 text-sm leading-snug">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SolutionsDropdown;
