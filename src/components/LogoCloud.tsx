import React from "react";

const logos = [
  { src: "/icons/Group 17819.svg", alt: "Group 17819" },
  { src: "/icons/hypercare.svg", alt: "Hypercare" },
  { src: "/icons/idc.svg", alt: "IDC" },
  { src: "/icons/Money-smart.svg", alt: "Money Smart" },
  { src: "/icons/radix.svg", alt: "Radix" },
  { src: "/icons/sign.svg", alt: "Sign" },
  { src: "/icons/upgrad.svg", alt: "UpGrad" },
  { src: "/icons/wishpond.svg", alt: "Wishpond" },
  { src: "/icons/zepto.svg", alt: "Zepto" },
  { src: "/icons/upgrad.svg", alt: "UpGrad" },
  { src: "/icons/wishpond.svg", alt: "Wishpond" },
  { src: "/icons/zepto.svg", alt: "Zepto" },
];

const LogoCloud = () => (
  <section className="bg-white py-10 px-4 text-center">
    <h2 className="text-gray-700 text-[30px] font-['Metropolis-Medium'] mb-2">
      Trusted by 400+ Global Customers
    </h2>

    <p className="text-gray-500 mb-6 text-[18px] font-['Metropolis-Medium']">
      Our customers saved an average of 20% on their monthly AWS, Azure, and GCP
      spend through CloudKeeper
    </p>

    <div className="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-6xl mx-auto">
      {logos.map((logo, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center h-20 w-full bg-white rounded-md"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-12 max-w-[120px] object-contain hover:grayscale-0 transition"
          />
        </div>
      ))}
    </div>
  </section>
);

export default LogoCloud;
