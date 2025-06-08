import React from "react";
import Image from "next/image";

const HeroSection = () => (
  <div className=" flex flex-row items-start bg-gray-50 bg-white">
    {/* <div className="flex flex-col w-[56%] "> */}
    <div className="flex flex-col w-[56%] mr-[80px] pr-[80px]">
      <div className="w-full bg-white  text-left flex flex-col items-start">
        <div className="align-text-start ">
          <div className="text-3xl md:text-4xl font- mb-4 text-gray-900 font-bitter space-y-2 ">
            <div>Your Comprehensive</div>
            <div>
              <span className="text-pink-500">
                Cloud Cost Optimization Partner {""}
              </span>
              <span className="text-black">for</span>{" "}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-6 text-lg font-medium text-gray-700">
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

          <div className="border-r-2 border-gray-200  px-4 py-2">
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
            <div>
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
          </div>
        </div>

        <a
          href="#"
          className="inline-block px-16 py-3 bg-[#4398d7] text-white rounded font-semibold text-lg shadow hover:bg-blue-800 transition"
        >
          Talk to us
        </a>
      </div>
    </div>
    <div className="rightsec w-[44%]">
      <div className="aspect-video w-full rounded-lg shadow overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/QfaoiYUU_PM"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

export default HeroSection;
