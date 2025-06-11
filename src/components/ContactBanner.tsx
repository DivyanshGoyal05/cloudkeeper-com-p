import React from "react";

const ContactBanner = () => (
  <div className="flex flex-col py-2 sm:flex-row max-w-[1400px] mx-auto px-4 py-8 items-center justify-between text-center sm:text-left">
    <div className="text-[10px] sm:text-[30px] leading-[30px] sm:leading-[45px] font-metropolis font-bold text-white mb-6 sm:mb-0 sm:pr-12">
      Speak with our advisors to learn how you can take control of your Cloud
      Cost
    </div>
    <div className="flex justify-center sm:justify-start">
      <a
        href="#"
        className="relative min-w-[180px] sm:min-w-[209px] w-[180px] sm:w-[209px] h-[48px] sm:h-[52px] flex items-center justify-center overflow-hidden border border-white bg-white text-[#4398D7] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] rounded-[6px] shadow-2xl transition-all duration-500 
           before:absolute before:top-0 before:left-1/2 before:h-full before:w-0 before:bg-[#2b3c66] before:transition-all before:duration-500 before:transform before:-translate-x-1/2
           hover:before:w-full hover:text-white"
      >
        <span className="relative z-10">Contact us</span>
      </a>
    </div>
  </div>
);

export default ContactBanner;
