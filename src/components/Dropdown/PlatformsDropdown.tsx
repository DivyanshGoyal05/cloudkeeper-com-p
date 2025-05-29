import React from "react";
import Image from "next/image";

interface PlatformsDropdownProps {
  section: string;
}

const items = [
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full items-center justify-center">
        <Image
          src="/icons/auto.svg"
          width={51}
          height={50}
          alt="CloudKeeper Auto"
          className="object-contain"
        />
      </span>
    ),
    title: "CloudKeeper Auto",
    desc: "Zero-Touch, AI-based AWS reservation management platform",
  },
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full items-center justify-center">
        <Image
          src="/icons/tuner.svg"
          width={51}
          height={50}
          alt="CloudKeeper Tuner"
          className="object-contain"
        />
      </span>
    ),
    title: "CloudKeeper Tuner",
    desc: "An Automated AWS Usage Optimization & Recommendation Platform",
  },
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full items-center justify-center">
        <Image
          src="/icons/lens.svg"
          width={51}
          height={50}
          alt="CloudKeeper Lens"
          className="object-contain"
        />
      </span>
    ),
    title: "CloudKeeper Lens",
    desc: "Efficient cost allocation, chargeback, tagging, and anomaly detection",
  },
];

const PlatformsDropdown: React.FC<PlatformsDropdownProps> = ({ section }) => (
  <div className="absolute left-0 top-full mt-2 w-[1200px] bg-white rounded-2xl shadow-2xl p-8 z-50  gap-4 animate-fade-in border border-gray-100">
    <div className="absolute -top-4 left-0 w-full h-4"></div>
    <div className="flex flex-row gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-4 items-center rounded-xl p-1">
          {item.icon}
          <div className="flex-col">
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

export default PlatformsDropdown;
