const blogs = [
  {
    title: "Troubleshooting GPU Scheduling Issues in Amazon EKS",
    description:
      "A case study on how we identified the root cause, uncovered key insights, and implemented a solution to fix the GPU scheduling issue in Amazon EKS.",
    type: "Blog",
    link: "#",
  },
  {
    title:
      "How to Set Up a Secure Connection Between Your On-Premises Environment and AWS Cloud using Direct Connect",
    description:
      "This blog explains multiple connection options & provides a step-by-step guide to establish seamless communication between on-premises infrastructure and AWS Cloud services using AWS Direct Connect.",
    type: "Blog",
    link: "#",
  },
  {
    title: "The AWS Fitness Plan: 30 Days to a Stronger, Leaner Cloud",
    description:
      "Learn about our exciting Cloud Fitness Challenge to uncover optimization blindspots, hidden savings & achieve peak performance in just 30 days.",
    type: "Whitepapers",
    link: "#",
  },
];

const BlogCards = () => (
  <div className="bg-gray-50 py-16 px-4 w-4/6  justify-center items-center mx-auto gap-8">
    <h2 className="text-center text-3xl font-normal mb-12 text-gray-800">
      Thought Leadership
    </h2>

    {/* <div className="flex flex-row justify-center align-center mx-auto gap-6 ">
      {blogs.map((blog, idx) => (
        <a
          key={idx}
          href={blog.link}
          className="bg-white rounded-lg shadow-sm  p-6 flex flex-col h-full hover:shadow-md transition-shadow w-1/3 h-full"
        >
          <div className="flex-col ">
            <h3 className="font-semibold text-gray-800 text-lg mb-4 leading-tight border-l-2 border-red-300 px-2">
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

    </div> */}

    {/* <div className="flex  justify-center gap-8 max-w-7xl mx-auto px-4">
      {blogs.map((blog, idx) => (
        <a
          key={idx}
          href={blog.link}
          className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow w-1/3 h-full hover:bg-gray-50"
        >
          <div className="flex-col">
            <h3 className="font-semibold text-gray-800 text-lg mb-4 leading-tight pl-4 border-l-2 border-red-500">
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
    </div> */}

    {/* <div className="flex  justify-center gap-8 max-w-7xl mx-auto px-4">
      {blogs.map((blog, idx) => (
        <a
          key={idx}
          href={blog.link}
          className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow w-full min-h-[25vh]"
        >
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-4 leading-tight pl-4 border-l-2 border-red-500">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {blog.description}
            </p>
          </div>
          <div className="mt-6">
            <span className="text-blue-500 text-sm font-medium">
              {blog.type}
            </span>
          </div>
        </a>
      ))}
    </div> */}
    <div className="flex justify-center gap-8  ">
      {blogs.map((blog, idx) => (
        <a
          key={idx}
          href={blog.link}
          className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:bg-white w-full min-h-[25vh] hover:shadow-xl"
        >
          <div>
            <h3 className="font-semibold text-gray-800 text-lg mb-4 leading-tight pl-4 border-l-2 border-red-500">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {blog.description}
            </p>
          </div>
          <div className="mt-6">
            <span className="text-blue-500 text-sm font-medium">
              {blog.type}
            </span>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default BlogCards;
