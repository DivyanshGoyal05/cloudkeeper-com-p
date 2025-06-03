const partners = [
  {
    logo: "/icons/google1.webp",
    title: "Google Cloud Partner",
    desc: "Certified expertise & competencies to help businesses maximize the potential of Google Cloud infrastructure.",
  },
  {
    logo: "/icons/aws-badge.svg",
    title: "AWS Advanced Consulting Partner",
    desc: "Highest tier partner with 100+ certifications & expertise in designing, migrating, & managing workloads on the AWS cloud.",
  },
  {
    logo: "/icons/microsoft11.webp",
    title: "Microsoft Solutions Partner",
    desc: "An authorized partner helping businesses save on Azure.",
  },
];

const PartnerCards = () => (
  <section className="bg-gray-50 py-12 px-4">
    <div className=" text-center mb-8 text-xl font-black text-black">
      Your <span className="text-[#4398d7]">One Stop Destination</span> for All
      Cloud Needs
    </div>

    <div className="flex justify-between  gap-6">
      {partners.map((p, idx) => (
        <div
          key={idx}
          className="bg-blue-900 rounded-lg shadow p-6 flex flex-col items-center text-center min-w-1/3 h-full md:w-1/3"
        >
          <div className="flex items-center justify-center h-20 w-full bg-blue-900 rounded-md mb-4">
            <img
              src={p.logo}
              alt={p.title}
              className="h-12 max-w-[120px] object-contain hover:grayscale-0 transition"
            />
          </div>
          <p className="text-gray-300 text-sm">{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PartnerCards;
