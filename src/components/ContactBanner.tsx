import Image from 'next/image';

const achievements = [
  {
    icon: (
      <span className="inline-flex w-12 h-12 rounded-full bg-white justify-center items-center">
        <Image src="/icons/team.svg" width={48} height={48} alt="Our Team" className="object-contain" />
      </span>
    ),
    title: 'Our Team',
    desc: 'Meet the visionary minds steering CloudKeeper\'s growth',
  },
  {
    icon: (
      <span className="inline-flex w-12 h-12 rounded-full bg-white justify-center items-center">
        <Image src="/icons/innovation.svg" width={48} height={48} alt="Innovation" className="object-contain" />
      </span>
    ),
    title: 'Innovation',
    desc: 'Pushing the boundaries of cloud solutions',
  },
  {
    icon: (
      <span className="inline-flex w-12 h-12 rounded-full bg-white justify-center items-center">
        <Image src="/icons/award.svg" width={48} height={48} alt="Awards" className="object-contain" />
      </span>
    ),
    title: 'Awards',
    desc: 'Recognized for excellence in cloud management',
  },
  {
    icon: (
      <span className="inline-flex w-12 h-12 rounded-full bg-white justify-center items-center">
        <Image src="/icons/security.svg" width={48} height={48} alt="Security" className="object-contain" />
      </span>
    ),
    title: 'Security',
    desc: 'Top-notch security for all our clients',
  },
  {
    icon: (
      <span className="inline-flex w-12 h-12 rounded-full bg-white justify-center items-center">
        <Image src="/icons/support.svg" width={48} height={48} alt="Support" className="object-contain" />
      </span>
    ),
    title: 'Support',
    desc: '24/7 dedicated customer support',
  },
  {
    icon: (
      <span className="inline-flex w-12 h-12 rounded-full bg-white justify-center items-center">
        <Image src="/icons/growth.svg" width={48} height={48} alt="Growth" className="object-contain" />
      </span>
    ),
    title: 'Growth',
    desc: 'Accelerating client success stories',
  },
  {
    icon: (
      <span className="inline-flex w-12 h-12 rounded-full bg-white justify-center items-center">
        <Image src="/icons/optimization.svg" width={48} height={48} alt="Optimization" className="object-contain" />
      </span>
    ),
    title: 'Optimization',
    desc: 'Maximizing cloud efficiency',
  },
  {
    icon: (
      <span className="inline-flex w-12 h-12 rounded-full bg-white justify-center items-center">
        <Image src="/icons/analytics.svg" width={48} height={48} alt="Analytics" className="object-contain" />
      </span>
    ),
    title: 'Analytics',
    desc: 'Data-driven decision making',
  },
  {
    icon: (
      <span className="inline-flex w-12 h-12 rounded-full bg-white justify-center items-center">
        <Image src="/icons/partnership.svg" width={48} height={48} alt="Partnerships" className="object-contain" />
      </span>
    ),
    title: 'Partnerships',
    desc: 'Strong alliances with industry leaders',
  },
];

const ContactBanner = () => (
  <div className="bg-blue-900 py-10 px-4 text-white w-full max-w-7xl mx-auto rounded-lg shadow">
    {/* Row for text + button */}
    <div className="flex flex-wrap justify-between items-center mb-8">
      <div className="text-2xl font-bold max-w-xl">
        Speak with our advisors to learn how you can take control of your Cloud Cost
      </div>

      <a
        href="#"
        className="mt-4 sm:mt-0 px-8 py-3 bg-white text-blue-900 rounded font-semibold text-lg shadow hover:bg-blue-800 hover:text-white transition"
      >
        Contact us
      </a>
    </div>

    {/* Flex row for achievements */}
    <div className="flex flex-wrap justify-center gap-6">
      {achievements.map((item, index) => (
        <div key={index} className="flex flex-col items-center max-w-[150px] text-center">
          {item.icon}
   
        </div>
      ))}
    </div>
  </div>
);

export default ContactBanner;
