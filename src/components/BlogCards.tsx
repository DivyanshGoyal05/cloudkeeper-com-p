
const blogs = [
  { title: 'The AWS Fitness Plan: How to Drive a Fitter, Leaner Cloud', link: '#' },
  { title: 'Introducing Lens: GCP FinOps in CloudKeeper Lens', link: '#' },
  { title: 'Reducing S3 & EBS in AWS: Proven, Real-World Results', link: '#' },
];

const BlogCards = () => (
  <section className="bg-gray-50 py-12 px-4">
    <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">Thought Leadership</h2>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogs.map((b, idx) => (
        <a key={idx} href={b.link} className="bg-white rounded-lg shadow p-6 flex flex-col hover:shadow-lg transition">
          <div className="font-semibold text-blue-700 mb-2">{b.title}</div>
          <span className="text-sm text-blue-500 mt-auto">Read more &rarr;</span>
        </a>
      ))}
    </div>
  </section>
);

export default BlogCards;
