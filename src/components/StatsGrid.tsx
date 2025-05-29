import React from 'react';

const stats = [
  { value: '15+', label: 'Years of FinOps experience' },
  { value: '100+', label: 'Certified cloud experts' },
  { value: '400+', label: 'Global customers' },
  { value: '20%', label: 'Average savings delivered' },
];

const StatsGrid = () => (
  <section className="bg-white py-12 px-4">
    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s, idx) => (
        <div key={idx} className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center">
          <div className="text-3xl font-bold text-blue-700 mb-2">{s.value}</div>
          <div className="text-gray-600 text-sm font-medium">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsGrid; 