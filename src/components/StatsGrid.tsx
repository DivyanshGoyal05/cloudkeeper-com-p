import React from "react";

const stats = [
  { value: "15+", label: "Years of experience in cloud" },
  { value: "100+", label: "Certified solutions architects & cloud experts" },
  { value: "400+", label: "Global customers" },
  { value: "20%", label: "Average savings on the entire cloud bill" },
];

const StatsGrid = () => (
  <section className="new-revised-cloud-aws py-16 bg-white overflow-hidden">
    <div className="wrapper max-w-7xl mx-auto px-4">
      <div className="revised-cloud-aws-inner flex flex-col lg:flex-row items-center justify-between">
        {/* Heading + Button section */}
        <div className="left text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
          <div className="ck-para-heading text-gray-800 font-metropolis-normal text-3xl leading-tight mb-4 lg:text-[30px] lg:leading-[55px]">
            Why choose CloudKeeper as
            <br />
            <span className="text-blue-500 font-semibold">
              your Cloud Cost Optimization
            </span>{" "}
            <span className="text-blue-500 font-semibold">Partner?</span>
          </div>
          <div className="CTA">
            <button className="ck-btn pink show-modal-link bg-[#4398d7] text-white px-8 py-3 rounded-md font-metropolis-medium hover:bg-[#253e66] transition-colors duration-300">
              <span>Talk to our Experts</span>
            </button>
          </div>
        </div>

        {/* Stats grid */}
        <div className="right lg:w-1/2 flex justify-center lg:justify-end">
          <div className="card-outer grid grid-cols-2 gap-4 lg:gap-8 max-w-lg lg:max-w-none">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="card bg-white p-4 sm:p-6 flex flex-col items-center justify-center text-center rounded-lg shadow-md border border-gray-200"
              >
                <p
                  className="text-3xl sm:text-4xl font-metropolis-bold mb-1"
                  style={{ color: "#4398d7" }}
                >
                  <span>{s.value}</span>
                </p>
                <p className="text-gray-600 text-sm sm:text-base font-metropolis-normal">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsGrid;
