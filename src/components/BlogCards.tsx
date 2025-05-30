
const blogs = [
  {
    title: 'Troubleshooting GPU Scheduling Issues in Amazon EKS',
    description: 'A case study on how we identified the root cause, uncovered key insights, and implemented a solution to fix the GPU scheduling issue in Amazon EKS.',
    type: 'Blog',
    link: '#'
  },
  {
    title: 'How to Set Up a Secure Connection Between Your On-Premises Environment and AWS Cloud using Direct Connect',
    description: 'This blog explains multiple connection options & provides a step-by-step guide to establish seamless communication between on-premises infrastructure and AWS Cloud services using AWS Direct Connect.',
    type: 'Blog',
    link: '#'
  },
  {
    title: 'The AWS Fitness Plan: 30 Days to a Stronger, Leaner Cloud',
    description: 'Learn about our exciting Cloud Fitness Challenge to uncover optimization blindspots, hidden savings & achieve peak performance in just 30 days.',
    type: 'Whitepapers',
    link: '#'
  }
];

const BlogCards = () => (
  <section className="bg-gray-50 py-16 px-4">
    <h2 className="text-center text-3xl font-normal mb-12 text-gray-800">
      Thought Leadership
    </h2>

    <div className="flex flex-row">
      {blogs.map((blog, idx) => (
        <a key={idx} href={blog.link} className="bg-white rounded-lg shadow-sm  p-6 flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="flex-1 ">
            <h3 className="font-semibold text-gray-800 text-lg mb-4 leading-tight border-l-2 border-red-300">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {blog.description}
            </p>
          </div>
          <div className="mt-auto">
            <span className="text-blue-500 text-sm font-medium">
              {blog.type}
            </span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default BlogCards;
