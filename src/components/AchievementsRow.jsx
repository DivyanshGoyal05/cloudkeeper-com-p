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
          className=""
        />
      </span>
    ),
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/2logo.png"
          width={90}
          height={90}
          alt="Our Team"
          className=""
        />
      </span>
    ),
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/3logo.png"
          width={90}
          height={90}
          alt="Innovation"
          className=""
        />
      </span>
    ),
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/5logo.png"
          width={90}
          height={90}
          alt="Awards"
          className=""
        />
      </span>
    ),
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/6logo.png"
          width={90}
          height={90}
          alt="Security"
          className=""
        />
      </span>
    ),
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/7logo.png"
          width={90}
          height={90}
          alt="Support"
          className=""
        />
      </span>
    ),
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/8logo.png"
          width={90}
          height={90}
          alt="Growth"
          className=""
        />
      </span>
    ),
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/9logo.png"
          width={90}
          height={90}
          alt="Optimization"
          className=""
        />
      </span>
    ),
  },
  {
    icon: (
      <span className="inline-flex">
        <Image
          src="/icons/10logo.png"
          width={90}
          height={90}
          alt="Analytics"
          className=""
        />
      </span>
    ),
  },
];

const AchievementsRow = () => (
  <div className="flex justify-around" style={{ backgroundColor: "#f1fafe" }}>
    {achievements.map((item, index) => (
      <div key={index} className="flex items-center text-center p-1">
        {item.icon}
      </div>
    ))}
  </div>
);

export default AchievementsRow;
