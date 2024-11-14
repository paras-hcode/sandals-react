import React, { useEffect, useState } from 'react';

const Hero = () => {


  return (
    <>
      <section className="  w-full overflow-hidden absolute top-0 left-0 z-10">
        <div className="   flex flex-col items-center bg-[#f8f0db] p-4">
          <div className="w-[250px]">
            <img 
              src="assets/images/sandalsLogo.svg" 
              loading="lazy" 
              alt="Sandals Logo"
              className="w-full"
            />
          </div>
          <div className="w-full text-center  ">
            <h1 className="text-[#0057ff] font-['SandalsSlab'] text-[50px] md:text-[60px] font-normal cursor-pointer">
              WHERE TO NEXT?
            </h1>
          </div>
          <div className="w-[5.9rem] ">
            <a 
              href="http://ltobe.sandals.com/" 
              className="block bg-[#0057ff] px-2.5 py-1.5 rounded-xl text-white font-['SandalsSans'] text-base cursor-pointer border-[1.5px] border-transparent hover:bg-white hover:text-[#171724] hover:border-[#171724] transition-colors duration-200"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;