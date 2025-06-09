import React from "react";

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
  <section className="bg-[#ffffff] py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-metropolis-normal mb-12 text-gray-800 leading-tight">
        Thought Leadership
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <a
            key={idx}
            href={blog.link}
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:bg-white border border-transparent hover:border-gray-200 group"
          >
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-4 leading-tight pl-4 border-l-4 border-[#ff5722] font-metropolis-bold">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed font-metropolis-normal">
                {blog.description}
              </p>
            </div>
            <div className="mt-6">
              <span className="text-[#4398d7] text-sm font-medium font-metropolis-bold">
                {blog.type}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BlogCards;
