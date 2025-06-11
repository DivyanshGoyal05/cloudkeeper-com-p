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
];

const Navbar = ({
  setSearchOpen,
}: {
  setSearchOpen: (open: boolean) => void;
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
    <nav className="flex-wrap sm:w-full bg-white flex items-center justify-between relative z-40 p-4 ">
      {/* === Logo Section Start === */}
      <div
        className="sm:flex items-center gap-4"
        id="cloudkeeper-logo-container"
      >
        <Image
          src={"/icons/Cloudkeeper_New.svg"}
          width={198}
          height={43}
          alt="CloudKeeper Logo"
        />
      </div>
      {/* === Logo Section End === */}

      {/* === Desktop Navigation Start === */}
      <div className="hidden sm:flex flex-grow items-center justify-end gap-8">
        {/* === Nav Links Start === */}
        <ul
          ref={menuRef}
          className="sm:flex gap-6 text-gray-700 items-center text-[15px] font-metropolis-medium"
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
              <button
                className={`flex items-center gap-1 px-2 py-1 rounded transition font-mp ${
                  openDropdown === link.label
                    ? "text-pink-600"
                    : "text-gray-700"
                } hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-200`}
                aria-haspopup="true"
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
                    className={`w-4 h-4 transition-transform ${
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
            </li>
          ))}
          {/* Contact Us Button - Inside the nav list */}
          <li>
            <div className="hidden sm:flex justify-center gap-1 item-center px-[13px] py-[2px] rounded-sm text-[14px] h-[30px] w-[96px] text-center  bg-[#4398d7] text-white  hover:bg-[#2140ae] transition">
              <div>Contact</div>
              <div>Us</div>
            </div>
          </li>
        </ul>

        {/* Search Button - Separate from nav links */}
        <button
          className="hidden sm:w-10 h-10 rounded-full bg-gray-100 flex flex-nowrap items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
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
      {/* === Desktop Navigation End === */}

      {/* === Mobile Actions Start === */}
      <div className="flex flex-nowrap sm:flex items-center gap-2 sm:hidden">
        <button
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
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
      {/* === Mobile Actions End === */}

      {/* === Mobile Menu Start === */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      {/* === Mobile Menu End === */}

      {/* === Dropdown Menus Start === */}
      <div
        onMouseEnter={() => setOpenDropdown(openDropdown)}
        onMouseLeave={() => setOpenDropdown(false)}
      >
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
      </div>
      {/* === Dropdown Menus End === */}
    </nav>
  );
};

export default Navbar;
