// src/components/ClientTestimonials.jsx
import React, { useState } from "react";

// This component represents a single testimonial card
const TestimonialCard = ({
  videoThumbnail,
  quote,
  companyLogo,
  clientName,
  clientDesignation,
  videoLink,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-end lg:items-start p-4 lg:p-0 h-[500px]">
      {/* Video Section */}
      <div className="relative w-full lg:w-3/5 xl:w-2/3 bg-white rounded-2xl shadow-lg overflow-hidden group h-[500px] ">
        {/* Placeholder for video thumbnail and play button */}
        <img
          src={videoThumbnail}
          alt="Video Thumbnail"
          height="500"
          className="w-full h-auto rounded-2xl transition-transform duration-300 group-hover:scale-105 h-[500px]"
        />
        <div className="">
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p- bg-white bg-opacity-90 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 h-[500px]"
          >
            {/* Play icon (replace with an SVG or icon library if needed) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 mt-6 lg:mt-0 lg:ml-8">
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed italic mb-6">
          <span className="text-blue-500 font-bold">CloudKeeper</span> {quote}
        </p>

        <p className="text-gray-700 text-base md:text-lg mb-4 leading-relaxed">
          {/* Detailed description of savings/benefits */}
          After onboarding in just 1-2 days, you get recommendations by
          Cloudkeeper about the gaps & leakage you have in your AWS account,
          underutilized resources, data transfer leakage, RI utilization & alert
          mechanisms which helps in further savings.
        </p>

        {/* Client Details */}
        <div className="flex items-center mt-4">
          <div className="flex-shrink-0 mr-4">
            <img src={companyLogo} alt="Company Logo" className="h-10" />{" "}
            {/* Adjust size as needed */}
          </div>
          <div>
            <p className="text-red-600 font-bold text-base md:text-lg">
              upGrad
            </p>{" "}
            {/* Company name */}
            <p className="text-gray-800 font-semibold text-lg md:text-xl">
              {clientName}
            </p>
            <span className="text-gray-600 text-sm md:text-base">
              {clientDesignation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientTestimonials = () => {
  const [activeCategory, setActiveCategory] = useState("engineers");

  const testimonials = {
    engineers: {
      videoThumbnail: "public/icons/testione.png", //
      quote: "",
      companyLogo: "/images/upgrad.svg", //
      clientName: "Dipesh Garg",
      clientDesignation: "DevOps lead",
      videoLink: "https://www.youtube.com/embed/gmlK3AF4_YI",
    },

    technology_exec: {
      videoThumbnail: "path/to/tech_exec_video.png",
      quote: " ",
      companyLogo: "path/to/another_logo.svg",
      clientName: "Jane Doe",
      clientDesignation: "CTO",
      videoLink: "https://www.youtube.com/embed/example2",
    },
    c_suite: {
      videoThumbnail: "path/to/c_suite_video.png",
      quote: "",
      companyLogo: "path/to/yet_another_logo.svg",
      clientName: "John Smith",
      clientDesignation: "CFO",
      videoLink: "https://www.youtube.com/embed/example3",
    },
  };

  const currentTestimonial = testimonials[activeCategory];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bitter-medium text-gray-800 text-center mb-4">
          What Our <span className="text-[#4398d7]">Clients Say</span>
        </h2>
        <p className="text-gray-600 text-center text-lg mb-12">
          From DevOps engineers to CTOs, CFOs, and CEOs — CloudKeeper is loved
          by all!
        </p>

        <div className="flex flex-col lg:flex-row items-start">
          {/* Category Filters */}
          <div className="lg:w-1/4 xl:w-1/5 flex-shrink-0 lg:border-r border-gray-300 lg:pr-8">
            <ul className="flex lg:flex-col justify-around lg:justify-start w-full">
              {Object.keys(testimonials).map((category) => (
                <li key={category} className="mb-4 lg:mb-8 last:mb-0">
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`font-metropolis-bold w-full text-start text-lg md:text-xl uppercase font-semibold py-2 transition-colors duration-300 ${
                      activeCategory === category
                        ? "text-[#4398d7] border-b-2 border-[#4398d7] lg:border-r-2 lg:border-b-0"
                        : "text-gray-500 hover:text-[#4398d7]"
                    }`}
                  >
                    {category.replace("_", " ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial Content */}
          <div className="lg:flex-1 lg:pl-8 mt-8 lg:mt-0 w-full">
            {currentTestimonial && (
              <TestimonialCard
                videoThumbnail={currentTestimonial.videoThumbnail}
                quote={currentTestimonial.quote}
                companyLogo={currentTestimonial.companyLogo}
                clientName={currentTestimonial.clientName}
                clientDesignation={currentTestimonial.clientDesignation}
                videoLink={currentTestimonial.videoLink}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
