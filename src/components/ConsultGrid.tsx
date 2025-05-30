import React from "react";

const consults = [
  {
    title: "Consult",
    point_one: "FinOps Consulting & Support",
    point_two: "Well-Architected Reviews for AWS & Azure",
  },
  {
    title: "Implement",
    point_one: "Cloud Migration Planning & Implementation",
    point_two: "CCloud Modernization Strategies",
  },
  {
    title: "Manage",
    point_one: "Ongoing cloud management",
    point_two: "24x7 support for your infrastructure",
  },
  {
    title: "Improve",
    point_one: "Continuous cost and performance tuning",
    point_two: "Proactive optimization recommendations",
  },
];

const ConsultGrid = () => (
  <section className="bg-blue-50 py-12 px-4">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="text-gray-700 text-lg font-semibold mt-8 mb-4">
        Your cloud cost optimization needs more than “just savings”
      </div>

      {consults.map((c, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
        >
          <h4 className="font-bold text-lg text-blue-700 mb-2">{c.title}</h4>
          <p className="text-gray-500 text-sm">{c.point_one}</p>
          <p className="text-gray-500 text-sm">{c.point_two}</p>
        </div>
      ))}
    </div>
    <div>
      <div className="text-gray-700 text-lg font-semibold mt-8 mb-4">
        We take care of your cloud's end-to-end needs, ensuring it’s always
        optimized & future-proof, while you focus solely on growing your
        business.
      </div>
      <div>
        <button></button>
      </div>
    </div>
  </section>
);

export default ConsultGrid;

// <div>
//   <div></div>
//   <div>
//     <div></div>
//     <div></div>
//     <div></div>
//   </div>
//   <div></div>
// </div>

// <div>
//   <div></div>
//   <div>
//     <div></div>
//     <div></div>
//     <div></div>
//   </div>
//   <div></div>
// </div>
