import React, { useState } from "react";
import {
  solutionsItems,
  platformsItems,
  capabilitiesItems,
  insightsItems,
} from "../data/navData";

interface DropdownItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const navLinks = [
  {
    label: "Solutions",
    href: "#",
    hasDropdown: true,
    dropdownItems: solutionsItems,
  },
  {
    label: "Platforms",
    href: "#",
    hasDropdown: true,
    dropdownItems: platformsItems,
  },
  {
    label: "Capabilities",
    href: "#",
    hasDropdown: true,
    dropdownItems: capabilitiesItems,
  },
  {
    label: "Insights",
    href: "#",
    hasDropdown: true,
    dropdownItems: insightsItems,
  },
  { label: "Success Stories", href: "#", hasDropdown: false },
  { label: "Pricing", href: "#", hasDropdown: false },
  {
    label: "Company",
    href: "#",
    hasDropdown: true,
    dropdownItems: [
      {
        icon: null,
        title: "About Us",
        desc: "Discover who we are, our milestones, and journey so far",
      },
      {
        icon: null,
        title: "Our Team",
        desc: "Meet the visionary minds steering CloudKeeper's growth",
      },
      {
        icon: null,
        title: "Alliances",
        desc: "A certified AWS, Google Cloud & Azure partner helping you leverage limitless possibilities of multi-cloud",
      },
      {
        icon: null,
        title: "Careers",
        desc: "An awesome workplace awaits you. Join our growing team!",
      },
      {
        icon: null,
        title: "Press Release",
        desc: "CloudKeeper in the spotlight - The latest & greatest happenings in the news",
      },
    ],
  },
];

const MobileMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col p-6 transition-all">
      <div className="flex items-center justify-between mb-8">
        <img src="/logo.svg" alt="CloudKeeper Logo" className="h-8 w-auto" />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="text-3xl text-gray-700 focus:outline-none"
        >
          &times;
        </button>
      </div>
      <nav className="flex-1">
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                className="w-full flex items-center justify-between text-lg text-gray-800 py-3 px-2 rounded hover:bg-gray-100 focus:outline-none"
                onClick={() =>
                  link.hasDropdown
                    ? setExpanded(expanded === link.label ? null : link.label)
                    : onClose()
                }
                aria-expanded={expanded === link.label}
                aria-controls={link.label + "-submenu"}
              >
                {link.label}
                {link.hasDropdown ? (
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-transparent" />
                )}
              </button>
              {link.hasDropdown && expanded === link.label && (
                <div id={link.label + "-submenu"} className="pl-6 py-2">
                  <ul className="flex flex-col gap-2">
                    {link.dropdownItems?.map((item, idx) => (
                      <li key={idx}>
                        <a href="#" className="block py-2 text-gray-700">
                          <div className="flex items-center gap-3">
                            {item.icon && (
                              <div className="flex-shrink-0">{item.icon}</div>
                            )}
                            <div>
                              <div className="font-semibold">{item.title}</div>
                              <div className="text-sm text-gray-500">
                                {item.desc}
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
