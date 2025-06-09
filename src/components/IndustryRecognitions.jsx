// IndustryRecognitions.jsx
import React from "react";
import Image from "next/image";

const recognitions = [
  {
    logo: "/icons/idc.svg", // updated path
    description:
      "Listed in 3 out of 5 segments in IDC Market Glance: FinOps Cloud Transparency, 2Q23",
  },
  {
    logo: "/icons/isg.svg", // updated path
    description:
      "Recognized by ISG Research for its proven capabilities and scale in providing FinOps solutions across 14 categories",
  },
  {
    logo: "/icons/g2-logo-new.svg", // updated path
    description: "Leader in the G2 Grid for Cloud Cost Management",
  },
];

const IndustryRecognitions = () => {
  return (
    <section className="bg-[#f1fafe] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-gray-800 text-2xl sm:text-3xl lg:text-4xl font-metropolis-medium mb-12 leading-tight">
          Backed by{" "}
          <span className="text-[#4398d7] font-metropolis-bold">
            Industry Recognitions
          </span>
          , Driven by{" "}
          <span className="text-[#4398d7] font-metropolis-bold">
            Customer Experience
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-[#f1fafe] lg:space-x-8 px-4">
          {recognitions.map((recognition, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-8 flex-1"
            >
              <div className="mb-6 h-20 flex items-center justify-center">
                <Image
                  src={recognition.logo}
                  alt={`Logo for ${recognition.description}`}
                  width={150}
                  height={80}
                  className="object-contain max-h-full"
                />
              </div>
              <p className="text-gray-700 text-base leading-relaxed max-w-xs mx-auto">
                {recognition.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryRecognitions;
