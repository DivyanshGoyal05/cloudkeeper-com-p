import React from 'react';

const consults = [
  { title: 'Consult', desc: 'FinOps consulting & advisory for cloud cost optimization.' },
  { title: 'Implement', desc: 'End-to-end implementation of cost-saving strategies.' },
  { title: 'Manage', desc: 'Ongoing management & 24x7 support for your cloud.' },
  { title: 'Improve', desc: 'Continuous improvement and optimization recommendations.' },
];

const ConsultGrid = () => (
  <section className="bg-blue-50 py-12 px-4">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      {consults.map((c, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <h4 className="font-bold text-lg text-blue-700 mb-2">{c.title}</h4>
          <p className="text-gray-500 text-sm">{c.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ConsultGrid; 