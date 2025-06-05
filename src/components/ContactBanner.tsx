import Image from "next/image";

const achievements = [
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/GPTWCertified.svg"
          width={90}
          height={90}
          alt="GPTW Certified"
          className="object-contain"
        />
      </span>
    ),
    title: "GPTW Certified",
    desc: "Great Place to Work Certified",
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/2logo.png"
          width={90}
          height={90}
          alt="Our Team"
          className="object-contain"
        />
      </span>
    ),
    title: "Our Team",
    desc: "Meet the visionary minds steering CloudKeeper's growth",
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/3logo.png"
          width={90}
          height={90}
          alt="Innovation"
          className="object-contain"
        />
      </span>
    ),
    title: "Innovation",
    desc: "Pushing the boundaries of cloud solutions",
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/5logo.png"
          width={90}
          height={90}
          alt="Awards"
          className="object-contain"
        />
      </span>
    ),
    title: "Awards",
    desc: "Recognized for excellence in cloud management",
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/6logo.png"
          width={90}
          height={90}
          alt="Security"
          className="object-contain"
        />
      </span>
    ),
    title: "Security",
    desc: "Top-notch security for all our clients",
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/7logo.png"
          width={90}
          height={90}
          alt="Support"
          className="object-contain"
        />
      </span>
    ),
    title: "Support",
    desc: "24/7 dedicated customer support",
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/8logo.png"
          width={90}
          height={90}
          alt="Growth"
          className="object-contain"
        />
      </span>
    ),
    title: "Growth",
    desc: "Accelerating client success stories",
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/9logo.png"
          width={90}
          height={90}
          alt="Optimization"
          className="object-contain"
        />
      </span>
    ),
    title: "Optimization",
    desc: "Maximizing cloud efficiency",
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/10logo.png"
          width={90}
          height={90}
          alt="Analytics"
          className="object-contain"
        />
      </span>
    ),
    title: "Analytics",
    desc: "Data-driven decision making",
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/partnership.svg"
          width={90}
          height={90}
          alt="Partnerships"
          className="object-contain"
        />
      </span>
    ),
    title: "Partnerships",
    desc: "Strong alliances with industry leaders",
  },
];

const ContactBanner = () => (
  <>
    {/* Row for text + button */}
    <div
      className="flex justify-around items-center bg-[#2b3c66] h-45 p-4
    "
      style={{ backgroundImage: "url('/icons/section-bg.webp')" }}
    >
      <div className="text-2xl font-gray-900 max-w-xl font-bold">
        Speak with our advisors to learn how you can take control of your Cloud
        Cost
      </div>

      <a
        href="#"
        className="mt-4 sm:mt-0 px-8 py-3 bg-white text-[#86bce6] rounded font-semibold text-lg shadow hover:bg-blue-800 hover:text-white transition"
      >
        Contact us
      </a>
    </div>

    {/* Flex row for achievements */}
    <div
      className="flex justify-center "
      style={{ backgroundColor: "#f1fafe" }}
    >
      {achievements.map((item, index) => (
        <div key={index} className="flex items-center  text-center p-2">
          {item.icon}
        </div>
      ))}
    </div>
  </>
);

export default ContactBanner;
