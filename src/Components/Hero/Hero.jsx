import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex lg:flex-row flex-col relative ">
        <div className="hero__container--left flex-1 bg-primary rounded-ss-[50px] ">
          <div className="flex flex-col lg:pl-12 lg:pt-12 lg:gap-6 pl-6 pt-4 pr-4 gap-4 lg:mt-6 items-start mb-4 md:mb-0 xl:mt-16 py-5">
            <h1 className="text-[45px] lg:text-[54px] xl:text-[64px] m-0  text-left 2xl:text-[85px] ">
              Find your perfect place to stay
            </h1>
            <p className="m-0 font-normal leading-8 text-left text-[20px] 2xl:text-[25px] ">
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
            <div className="flex items-center gap-2 lg:mt-4 mt-1 ">
              <img src="/video.png" />
              <p className="text[20px] font-semibold 2xl:text-[25px] ">
                Watch video
              </p>
            </div>
          </div>
        </div>
        <div className="hero__container--right flex-1  ">
          <div className="bg-primary">
            <img
              src="/hero.png"
              className="h-[20rem] w-full object-cover md:h-full"
            />
          </div>
        </div>
        <div className="absolute bottom-6 w-[75%] mx-auto bg-white left-0 right-0 rounded-280 flex justify-between p-2 md:p-6 items-center">
          {/* left div  */}

          {/* 1st */}
          <div className="flex items-start gap-2  ">
            <img src="/pin.png" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[16px] md:text-[20px] font-normal text-[#222222]">
                Location
              </p>
              <p className="m-0 text-[#555555] text-[14px] hidden md:block">
                United States
              </p>
            </span>
          </div>
          {/* 2nd  */}
          <div className="flex items-start gap-2 border-r border-black">
            <img src="/cale.png" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[16px] md:text-[20px] font-normal text-[#222222]">
                Check in
              </p>
              <p className="m-0 hidden md:block text-[#555555] text-[14px]">
                10 Jun 2021
              </p>
            </span>
          </div>
          {/* 3rd  */}
          <div className="hidden lg:flex items-start gap-2 border-r border-black">
            <img src="/cale.png" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[20px] font-normal text-[#222222]">
                Check out
              </p>
              <p className="m-0 text-[#555555] text-[14px]">
                10 Jun 2021
              </p>
            </span>
          </div>
          {/* 4th  */}
          <div className="hidden md:flex items-start gap-2 border-r border-black">
            <img src="/person.png" />
            <span className="flex flex-col gap-1">
              <p className="m-0 text-[20px] font-normal text-[#222222]">
                Rooms for
              </p>
              <p className="m-0 text-[#555555] text-[14px]">
                1 room, 2 guests
              </p>
            </span>
          </div>
          <div className="bg-secondary flex gap-2 items-center px-2 md:px-8 rounded-280">
            <img src="search.png" />
            <p className="text-white">Search...</p>
          </div>
        </div>
        {/* right div */}

        {/* <div className="bg-secondary flex gap-2 items-center px-8 rounded-280">
            <img src="search.png" />
            <p className="text-white">Search...</p>
          </div> */}
      </div>
    </section>
  );
};

export default Hero;
