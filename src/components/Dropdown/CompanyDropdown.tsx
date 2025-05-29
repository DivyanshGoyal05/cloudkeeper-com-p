import React from "react";

interface CompanyDropdownProps {
  section: string;
}

const items = [
  {
    icon: <></>,
    title: "About Us",
    desc: "Discover who we are, our milestones, and journey so far",
  },
  {
    icon: <></>,
    title: "Our Team",
    desc: "Meet the visionary minds steering CloudKeeper's growth",
  },
  {
    icon: <></>,
    title: "Alliances",
    desc: "A certified AWS, Google Cloud & Azure partner helping you leverage limitless possibilities of multi-cloud",
  },
  {
    icon: <></>,
    title: "Careers",
    desc: "An awesome workplace awaits you. Join our growing team!",
  },
  {
    icon: <></>,
    title: "Press Release",
    desc: "CloudKeeper in the spotlight - The latest & greatest happenings in the news",
  },
  {
    icon: <></>,
    title: "AWS GOOGLE CLOUD AZURE",
    desc: "",
  },
];

const CompanyDropdown: React.FC<CompanyDropdownProps> = ({ section }) => (
  <div className="absolute right-10 top-full mt-1 w-[800px] bg-white rounded-2xl shadow-2xl p-8 z-50 flex flex-col gap-6 animate-fade-in border border-gray-100">
    <div className="grid grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex gap-4 items-start hover:bg-blue-50 rounded-xl p-3 transition cursor-pointer"
        >
          {item.icon}
          <div>
            <div className="font-semibold text-gray-800 text-base mb-1">
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

export default CompanyDropdown;
