import Image from "next/image";

const AnnouncementBar = () => (
  <div
    style={{
      backgroundImage: "url('/icons/notification-ticker-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="w-full text-white text-sm flex items-center justify-between py-2 px-4 relative"
  >
    {/* Left mountain */}
    <div className="absolute top-0 left-0">
      <Image
        src="/icons/mountain.svg"
        width={78}
        height={34}
        alt="mountain image"
        className="block ml-20"
      />
    </div>

    {/* Center content - Logo, Text, and Button */}
    <div className="flex items-center justify-center gap-4 flex-1">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/icons/logocfc.svg" width={54} height={40} alt="logocfc" />
      </div>

      {/* Text */}
      <div className="flex items-center text-[20px] leading-[28px] font-['Metropolis-normal'] text-white">
        30-Day Cloud Fitness Challenge.
        <span className="font-['Metropolis-SemiBold'] ml-1">
          Sign up & get a $50 Amazon voucher!
        </span>
      </div>

      {/* Button */}
      <button className="group border font-semibold border-white px-4 py-2 rounded-sm text-white transition-all duration-300 ease-in-out hover:bg-white flex items-center cursor-pointer">
        <span className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent">
          Take the Assessment
        </span>
      </button>
    </div>

    {/* Right mountain */}
    <div className="absolute bottom-0 right-0">
      <Image
        src="/icons/mountain-1.svg"
        width={76}
        height={36}
        alt="mountain image"
        className="block mr-20"
      />
    </div>
  </div>
);

export default AnnouncementBar;
