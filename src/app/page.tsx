"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import FeatureGrid from "@/components/FeatureGrid";
import OfferingCards from "@/components/OfferingCards";
import ConsultGrid from "@/components/ConsultGrid";
import StatsGrid from "@/components/StatsGrid";
import PartnerCards from "@/components/PartnerCards";
import Testimonial from "@/components/Testimonial";
import BlogCards from "@/components/BlogCards";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";

function SearchInput({ onClose }: { onClose: () => void }) {
  // Close on outside click
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const input = document.getElementById("search-input-box");
      if (input && !input.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <div className="flex justify-center w-full mt-8 mb-8">
      <div
        id="search-input-box"
        className="w-[600px] bg-white rounded-2xl shadow p-4 flex items-center relative"
      >
        <input
          type="text"
          placeholder="Search by keywords"
          className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:border-pink-500 transition-colors text-gray-900"
        />
        <img
          src="/icons/search.svg"
          width={20}
          height={20}
          alt="Search"
          className="absolute left-6 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Pass setSearchOpen to Navbar so it can open the search
  return (
    <div className="bg-gray-50 min-h-screen">
      <AnnouncementBar />
      <Navbar setSearchOpen={setSearchOpen} />
      {searchOpen && <SearchInput onClose={() => setSearchOpen(false)} />}
      <div className="relative">
        {searchOpen && (
          <div className="absolute inset-0 bg-black/20 transition-all duration-300 z-10 pointer-events-none" />
        )}
        <div
          className={
            searchOpen ? "filter blur-sm pointer-events-none select-none" : ""
          }
        >
          <div>
            <div className="bg-white">
              <div className="max-w-[1200px] mx-auto py-16">
                <HeroSection />
              </div>
            </div>

            <div className="bg-[#f9f9f9]">
              <div className="max-w-[1200px] mx-auto px-4 py-16">
                <LogoCloud />
              </div>
            </div>

            <div className="bg-sky-50">
              <div className="max-w-[1200px] mx-auto px-4 py-16">
                <FeatureGrid />
              </div>
            </div>

            <div className="bg-white">
              <div className="max-w-[1200px] mx-auto px-4 py-16">
                <OfferingCards />
              </div>
            </div>

            <div className="bg-[#f1fafe]">
              <div className="max-w-[1200px] mx-auto px-4 py-16">
                <ConsultGrid />
              </div>
            </div>

            <div className="bg-white">
              <div>
                <div className="max-w-[1200px] mx-auto px-4 py-16">
                  <StatsGrid />
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div className="max-w-[1200px] mx-auto px-4 py-16">
                <PartnerCards />
              </div>
            </div>

            <div className="bg-white">
              <div className="max-w-[1200px] mx-auto px-4 py-16">
                <Testimonial />
              </div>
            </div>

            <div className="bg-white">
              <div className="max-w-[1200px] mx-auto px-4 py-16">
                <BlogCards />
              </div>
            </div>

            <div
              className="bg-[#2b3c66] bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/icons/section-bg.webp')" }}
            >
              <div className="max-w-[1200px] mx-auto px-4 py-16">
                <ContactBanner />
              </div>
            </div>

            <div className="bg-white border-t border-gray-200">
              <div className="max-w-[1200px] mx-auto px-4 py-16">
                <Footer />
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
