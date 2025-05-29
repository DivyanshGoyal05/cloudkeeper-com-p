import React from 'react';
import Image from 'next/image';

interface CompanyDropdownProps {
  section: string;
}

const items = [
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full">
        <Image
          src="/icons/about.svg"
          width={51}
          height={50}
          alt="About Us"
          className="object-contain"
        />
      </span>
    ),
    title: 'About Us',
    desc: 'Discover who we are, our milestones, and journey so far',
  },
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full">
        <Image
          src="/icons/team.svg"
          width={51}
          height={50}
          alt="Our Team"
          className="object-contain"
        />
      </span>
    ),
    title: 'Our Team',
    desc: 'Meet the visionary minds steering CloudKeeper\'s growth',
  },
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full">
        <Image
          src="/icons/alliances.svg"
          width={51}
          height={50}
          alt="Alliances"
          className="object-contain"
        />
      </span>
    ),
    title: 'Alliances',
    desc: 'A certified AWS, Google Cloud & Azure partner helping you leverage limitless possibilities of multi-cloud',
  },
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full">
        <Image
          src="/icons/careers.svg"
          width={51}
          height={50}
          alt="Careers"
          className="object-contain"
        />
      </span>
    ),
    title: 'Careers',
    desc: 'An awesome workplace awaits you. Join our growing team!',
  },
  {
    icon: (
      <span className="inline-flex w-50 h-50 rounded-full">
        <Image
          src="/icons/press.svg"
          width={51}
          height={50}
          alt="Press Release"
          className="object-contain"
        />
      </span>
    ),
    title: 'Press Release',
    desc: 'CloudKeeper in the spotlight - The latest & greatest happenings in the news',
  },
];

const CompanyDropdown: React.FC<CompanyDropdownProps> = ({ section }) => (
  <div className="absolute left-0 top-full mt-4 w-[800px] bg-white rounded-2xl shadow-2xl p-8 z-50 flex flex-col gap-6 animate-fade-in border border-gray-100">
    <div className="absolute -top-4 left-0 w-full h-4"></div>
    <div className="grid grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-row-reverse gap-4 items-center rounded-xl p-3">
          {item.icon}
          <div>
            <div className="font-semibold text-gray-800 text-base mb-1 hover:text-pink-600 cursor-pointer transition-colors">{item.title}</div>
            <div className="text-gray-500 text-sm leading-snug">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex gap-6 items-center pt-4 border-t border-gray-100">
      <span className="font-semibold text-gray-700">AWS</span>
      <span className="font-semibold text-gray-700">Google Cloud</span>
      <span className="font-semibold text-gray-700">Azure</span>
    </div>
  </div>
);

export default CompanyDropdown; 