import React from "react";
import Image from "next/image";

interface CompanyDropdownProps {
  section?: string;
  onItemClick?: (item: CompanyItem) => void;
  onClose?: () => void;
}

interface CompanyItem {
  icon: string;
  title: string;
  desc: string;
  href?: string;
  tags?: string[];
}

const items: CompanyItem[] = [
  {
    icon: "/icons/company_0.svg",
    title: "About Us",
    desc: "Discover who we are, our milestones, and journey so far",
    href: "/about",
  },
  {
    icon: "/icons/team.svg",
    title: "Our Team",
    desc: "Meet the visionary minds steering CloudKeeper's growth",
    href: "/team",
  },
  {
    icon: "/icons/Alli.svg",
    title: "Alliances",
    desc: "A certified AWS, Google Cloud & Azure partner helping you leverage limitless possibilities of multi-cloud",
    href: "/alliances",
    tags: ["AWS", "Google Cloud", "Azure"],
  },
  {
    icon: "/icons/career.svg",
    title: "Careers",
    desc: "An awesome workplace awaits you. Join our growing team!",
    href: "/careers",
  },
  {
    icon: "/icons/pr.svg",
    title: "Press Release",
    desc: "CloudKeeper in the spotlight - The latest & greatest happenings in the news",
    href: "/press",
  },
];

const CompanyItem: React.FC<{
  item: CompanyItem;
  onItemClick?: (item: CompanyItem) => void;
}> = ({ item, onItemClick }) => {
  const handleClick = () => {
    if (onItemClick) {
      onItemClick(item);
    }
  };

  const content = (
    <>
      <span className="inline-flex items-center justify-center w-12 h-12 flex-shrink-0">
        <Image
          src={item.icon}
          width={44}
          height={44}
          alt={item.title}
          className="object-contain"
        />
      </span>
      <div className="flex-1">
        <div className="font-semibold text-gray-800 text-base mb-1 group-hover:text-pink-600 transition-colors">
          {item.title}
        </div>
        <div className="text-gray-500 text-sm leading-snug">{item.desc}</div>
        {item.tags && (
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className="flex gap-4 items-start hover:bg-blue-50 rounded-xl p-3 transition cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
        onClick={handleClick}
        role="menuitem"
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="flex gap-4 items-start hover:bg-blue-50 rounded-xl p-3 transition cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
      onClick={handleClick}
      role="menuitem"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {content}
    </div>
  );
};

const CompanyDropdown: React.FC<CompanyDropdownProps> = ({
  section,
  onItemClick,
  onClose,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && onClose) {
      onClose();
    }
  };

  return (
    <div
      className="absolute right-10 top-full  w-[1000px] bg-white rounded-2xl shadow-2xl p-8 z-50 flex flex-col gap-5 animate-fade-in border border-gray-100"
      role="menu"
      aria-label="Company menu"
      onKeyDown={handleKeyDown}
    >
      <div
        className="absolute top-4 left-0 w-full h-4"
        aria-hidden="true"
      ></div>

      <div className="grid grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <CompanyItem key={idx} item={item} onItemClick={onItemClick} />
        ))}
      </div>
    </div>
  );
};

export default CompanyDropdown;
