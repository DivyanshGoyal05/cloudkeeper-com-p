import React, { useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-white px-4 md:px-8 py-8 gap-8e">
      {/* <div className="flex flex-col w-[56%] "> */}
      <div className="flex flex-col w-[60%] mr-[80px] pr-[80px] pl-[20px]">
        <div className="w-full bg-white  text-left flex flex-col items-start gap-3">
          <div className="align-text-start ">
            <div className="text-3xl md:text-4xl  mb-4 text-gray-900 font-bitter leading-normal  ">
              <div>Your Comprehensive</div>
              <div>
                <span className="text-[#d64794]">
                  Cloud Cost Optimization Partner {""}
                </span>
                <span className="text-black">for</span>{" "}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-lg font-medium text-gray-700 pb-0">
            <div className="border-r-2 border-gray-200  px-4 py-2">
              <div>
                <Image
                  src={"/icons/247.svg"}
                  width={50}
                  height={43}
                  alt="mountain-1 image"
                />
              </div>
              <span>
                Unlimited
                <br />
                Cloud Support
              </span>
            </div>

            <div className="border-r-2 border-gray-200  px-4 py-4">
              <div>
                <Image
                  src={"/icons/h2.svg"}
                  width={50}
                  height={43}
                  alt="mountain-1 image"
                />
              </div>
              <span>
                Guaranteed <br />
                Cost Savings
              </span>
            </div>
            <div>
              {" "}
              <div className=" border-gray-200  px-4 py-2">
                <Image
                  src={"/icons/h3.svg"}
                  width={50}
                  height={43}
                  alt="mountain-1 image"
                />
              </div>
              <span>
                Enhanced Cloud <br />
                Cost Visibility
              </span>
              ``
            </div>
          </div>

          <a
            href="#"
            className="inline-block h- px-16 py-3 bg-[#4398d7] text-white rounded  text-lg shadow hover:bg-blue-800 transition"
          >
            Talk to us
          </a>
        </div>
      </div>

      {/* <div className=" sm:aspect-video w-[598px] h-[398px] rounded-lg  overflow-hidden relative ">
        {!isPlaying ? (
          <div
            className="w-full h-full relative cursor-pointer rounded-xl overflow-hidden"
            onClick={handlePlay}
          >
            <Image
              src="/icons/video-thumb.png"
              alt="Video Thumbnail"
              fill
              className="absolute top-0 left-0 w-full h-full rounded-lg object-fill"
            />
            <Image
              src="/icons/click-video.svg"
              alt="Play"
              width={80}
              height={80}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />
          </div>
        ) : (
          <iframe
            className="w-full h-full rounded-lg "
            src="https://www.youtube.com/embed/2PuFyjAs7JA?autoplay=1"
            title="4K 2K 1080p 720p 480p video resolution test"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div> */}
      <div className="w-full max-w-[598px] aspect-video rounded-lg overflow-hidden relative">
        {!isPlaying ? (
          <div
            className="w-full h-full relative cursor-pointer rounded-xl overflow-hidden"
            onClick={handlePlay}
          >
            <Image
              src="/icons/video-thumb.png"
              alt="Video Thumbnail"
              fill
              className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
            />
            <Image
              src="/icons/click-video.svg"
              alt="Play"
              width={80}
              height={80}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            />
          </div>
        ) : (
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/2PuFyjAs7JA?autoplay=1"
            title="4K 2K 1080p 720p 480p video resolution test"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
