import React from "react";
import Image from "next/image";

const HeroSection = () => (
  <div
    className=" flex flex-row gap-30 justify-center
 items-start bg-gray-50 py-12 px-4 bg-white"
  >
    <div className="flex flex-col ">
      {/* <section className="w-full bg-white py-12 px-4 text-center flex flex-col items-start"> */}
      <section className="w-full bg-white py-12 px-4 text-left flex flex-col items-start">
        <div className="align-text-start ">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Your Comprehensive <br />{" "}
            <span className="text-pink-500">
              Cloud Cost Optimization Partner
            </span>{" "}
            for
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-6 text-lg font-medium text-gray-700">
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
              Unlimited Cloud <br />
              Support
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
                src={"/icons/lens.svg"}
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
          className="inline-block px-8 py-3 bg-[#4398d7] text-white rounded font-semibold text-lg shadow hover:bg-blue-800 transition"
        >
          Talk to us
        </a>
      </section>
    </div>
    <div className="rightsec">
      <h1>rightsec</h1>
      <div className="mb-6">
        <video width="640" height="360" controls>
          <source
            src="https://youtu.be/QfaoiYUU_PM?feature=shared"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
);

export default HeroSection;
