import React from 'react';

const partners = [
  { logo: '/partners/google.png', title: 'Google Cloud Partner', desc: 'Certified and experienced Google Cloud partner for cost optimization.' },
  { logo: '/partners/aws.png', title: 'AWS Advanced Consulting Partner', desc: 'Recognized AWS partner for cloud cost savings and FinOps.' },
  { logo: '/partners/microsoft.png', title: 'Microsoft Solutions Partner', desc: 'An authorized partner helping businesses save on Azure.' },
];

const PartnerCards = () => (
  <section className="bg-gray-50 py-12 px-4">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {partners.map((p, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <img src={p.logo} alt={p.title} className="h-12 mb-4" />
          <h4 className="font-bold text-lg text-blue-700 mb-2">{p.title}</h4>
          <p className="text-gray-500 text-sm">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PartnerCards; 