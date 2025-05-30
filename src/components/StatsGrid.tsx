
const stats = [
  { value: '15+', label: 'Years of FinOps experience' },
  { value: '100+', label: 'Certified cloud experts' },
  { value: '400+', label: 'Global customers' },
  { value: '20%', label: 'Average savings delivered' },
];

const StatsGrid = () => (
  <section className="bg-white py-12 px-4">
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">

        {/* Heading + Button section */}
        <div className="mb-8 text-left">
          <div className="text-gray-800 text-lg font-semibold">
            Why choose CloudKeeper as
          </div>
          <div className="text-xl font-bold mb-4" style={{ color: '#4398d7' }}>
            your Cloud Cost Optimization Partner?
          </div>
          <button
            className="text-white px-4 py-2 rounded hover:bg-blue-700"
            style={{ backgroundColor: '#4398d7' }}
          >
            Talk to our Experts
          </button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-3xl font-bold mb-2" style={{ color: '#000000' }}>
                {s.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default StatsGrid;
