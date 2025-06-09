// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import CompanyDropdown from "./Dropdown/CompanyDropdown";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import SolutionsDropdown from "./Dropdown/SolutionsDropdown";
import PlatformsDropdown from "./Dropdown/PlatformsDropdown";
import CapabilitiesDropdown from "./Dropdown/CapabilitiesDropdown";
import InsightsDropdown from "./Dropdown/InsightsDropdown";

const navLinks = [
  { label: "Solutions", href: "#", hasDropdown: true },
  { label: "Platforms", href: "#", hasDropdown: true },
  {
    label: "Capabilities",
    href: "#",
    hasDropdown: true,
    sectionKey: "CONSULT",
  },
  { label: "Insights", href: "#", hasDropdown: true },
  { label: "Success Stories", href: "#", hasDropdown: false },
  { label: "Pricing", href: "#", hasDropdown: false },
  { label: "Company", href: "#", hasDropdown: true },
  // Added "Contact Us" as a navigation link with a special property for CTA styling
  { label: "Contact Us", href: "/contact-us", hasDropdown: false, isCta: true },
];

const Navbar = ({
  setSearchOpen,
  searchOpen,
}: {
  setSearchOpen: (open: boolean) => void;
  searchOpen: boolean;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | false>(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 md:px-10 flex items-center justify-between relative z-50 border-b border-gray-100">
      {/* Logo */}
      <div className="flex items-center" id="cloudkeeper-logo-container">
        <Image
          src={"/icons/Cloudkeeper_New.svg"}
          width={198}
          height={36}
          alt="CloudKeeper Logo"
        />
      </div>

      {/* Desktop Nav (hidden on small/medium screens, flex on large screens) */}
      <div className="hidden lg:flex flex-grow justify-end items-center">
        <ul
          ref={menuRef}
          className="flex space-x-6 xl:space-x-8 text-gray-700 font-metropolis-medium items-center"
        >
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.hasDropdown && setOpenDropdown(link.label)
              }
              onMouseLeave={() => link.hasDropdown && setOpenDropdown(false)}
            >
              {!link.isCta ? (
                <button
                  className={`flex items-center gap-1 px-2 py-1 rounded transition-colors duration-200
                    ${
                      openDropdown === link.label
                        ? "text-pink-600"
                        : "text-gray-700 hover:text-pink-600"
                    }
                    font-metropolis-medium text-base
                  `}
                  aria-haspopup={link.hasDropdown}
                  aria-expanded={openDropdown === link.label}
                  onClick={() =>
                    link.hasDropdown
                      ? setOpenDropdown((prev) =>
                          prev === link.label ? false : link.label
                        )
                      : undefined
                  }
                >
                  {link.label}

                  {link.hasDropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </button>
              ) : (
                <a
                  href={link.href}
                  className="ml-4 px-6 py-2 rounded-md bg-[#4398d7] text-white font-metropolis-medium text-base hover:bg-[#2c6a9d] transition-colors duration-200"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Search Button */}
        <button
          className="ml-6 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-label="Search"
          onClick={() => setSearchOpen(!searchOpen)}
          // onClick={() => handleSerch}
        >
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      {/* Mobile Actions (Visible on sm and md screens, hidden on large screens) */}
      <div className="flex items-center lg:hidden gap-2">
        <button
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-label="Search"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <button
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Wrapped Dropdowns for hover stability (conditionally rendered) */}
      {openDropdown === "Company" && <CompanyDropdown section="Company" />}
      {openDropdown === "Solutions" && (
        <SolutionsDropdown section="Solutions" />
      )}
      {openDropdown === "Platforms" && (
        <PlatformsDropdown section="Platforms" />
      )}
      {openDropdown === "Capabilities" && (
        <CapabilitiesDropdown section="CONSULT" />
      )}
      {openDropdown === "Insights" && <InsightsDropdown section="Insights" />}
    </nav>
  );
};

export default Navbar;
