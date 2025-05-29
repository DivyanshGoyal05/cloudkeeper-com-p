import React from "react";
import Image from "next/image";

interface InsightsDropdownProps {
  section: string;
}

const insightsItems = [
  {
    icon: (
      <span className="inline-flex w-[50px] h-[50px] rounded-full">
        <Image
          src="/icons/blogs.svg"
          width={50}
          height={50}
          alt="Blog"
          className="object-contain"
        />
      </span>
    ),
    title: "Blog",
    desc: "Latest insights and updates",
  },
  {
    icon: (
      <span className="inline-flex w-[50px] h-[50px] rounded-full">
        <Image
          src="/icons/interview.svg"
          width={50}
          height={50}
          alt="Expert Interview"
          className="object-contain"
        />
      </span>
    ),
    title: "Expert Interview",
    desc: "Conversations with industry leaders",
  },
  {
    icon: (
      <span className="inline-flex w-[50px] h-[50px] rounded-full">
        <Image
          src="/icons/interview.svg"
          width={50}
          height={50}
          alt="Whitepapers"
          className="object-contain"
        />
      </span>
    ),
    title: "Whitepapers",
    desc: "In-depth & exclusive content on cloud cost optimization curated by cloud experts",
  },
  {
    icon: (
      <span className="inline-flex w-[50px] h-[50px] rounded-full">
        <Image
          src="/icons/ic-podcast.svg"
          width={50}
          height={50}
          alt="Podcasts"
          className="object-contain"
        />
      </span>
    ),
    title: "Podcasts",
    desc: "Listen to our expert discussions",
  },
  {
    icon: (
      <span className="inline-flex w-[50px] h-[50px] rounded-full">
        <Image
          src="/icons/ondemand.svg"
          width={50}
          height={50}
          alt="On-Demand Webinars"
          className="object-contain"
        />
      </span>
    ),
    title: "On-Demand Webinars",
    desc: "Watch our recorded sessions",
  },
  {
    icon: (
      <span className="inline-flex w-[150px] h-[150px] rounded-full">
        <Image
          src="/icons/download.webp"
          width={150}
          height={150}
          alt="Download Now"
          className="object-contain"
        />
      </span>
    ),
    title: "Download Now",
    desc: "",
    isButton: true,
  },
];

const InsightsDropdown: React.FC<InsightsDropdownProps> = ({ section }) => (
  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[800px] bg-white rounded-2xl shadow-2xl p-2 z-50 flex flex-col animate-fade-in border border-gray-100">
    <div className="absolute -top-16 left-0 w-full h-16"></div>
    <div className="grid grid-cols-3 gap-x-4 gap-y-5">
      {insightsItems.map((item, idx) => (
        <div
          key={idx}
          className={`flex ${
            item.isButton ? "flex-col items-center" : "items-start"
          } gap-3 p-4 m-20px rounded-xl ${
            !item.isButton ? "" : ""
          } transition-colors`}
        >
          {item.icon}
          <div
            className={`flex flex-col ${
              item.isButton ? "items-center" : ""
            } justify-center`}
          >
            {item.isButton ? (
              <button className="border border-[#2563EB] text-[#2563EB] px-4 py-2 rounded-md hover:bg-[#2563EB] hover:text-white transition-colors font-medium text-sm">
                {item.title}
              </button>
            ) : (
              <>
                <div className="font-semibold text-gray-800 text-base hover:text-pink-600 cursor-pointer transition-colors">
                  {item.title}
                </div>
                <div className="text-gray-500 text-sm leading-snug">
                  {item.desc}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default InsightsDropdown;
