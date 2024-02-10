import React from "react";
import Rating from "../Rating";

const Popular = () => {
  return (
    <section className="mt-16 px-4">
      <div className="container mx-auto ">
        {/* top */}
        <div>
          <h2 className="lg:text-[40px] md:text-[35px] m-0 ">
            Our most popular Hotels
          </h2>
          <div className="flex justify-between items-end">
            <p className="text-[16px] m-0">
              Lorem Ipsum is simply dummy text of the
              printing and <br /> typesetting industry.
            </p>
            <button className="text-secondary bg-[#24ab710b] rounded-[35px]  px-6 py-4 ">
              View All
            </button>
          </div>
        </div>
        {/* bottom */}
        <div className=" gap-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {/* 1st */}
          <div className="flex-1 bg-[#FAFAFA] ">
            <div>
              <img className="w-full" src="/hotel-1.png" />
            </div>
            <div className="py-6 px-4 flex flex-col gap-2 rounded-bl-[16px] rounded-br-[16px]">
              <p className="m-0 text-[14px] text-secondary">
                London NW8 7JT England
              </p>
              <h3 className="m-0 text-[24px] font-semibold">
                Danubius Hotel Regents Park
              </h3>
              <div className="flex justify-between mt-2">
                <p className="m-0 text-[16px] text-[#222222]">
                  $200 Par Night
                </p>
                <Rating />
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="flex-1 bg-[#FAFAFA] rounded-tl-[16px] rounded-tr-[16px]">
            <div>
              <img className="w-full" src="/hotel-2.png" />
            </div>
            <div className="py-6 px-4 flex flex-col gap-2">
              <p className="m-0 text-[14px] text-secondary">
                London NW8 7JT England
              </p>
              <h3 className="m-0 text-[24px] font-semibold">
                The Resident Soho
              </h3>
              <div className="flex justify-between mt-2">
                <p className="m-0 text-[16px] text-[#222222]">
                  $200 Par Night
                </p>
                <Rating />
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="flex-1 bg-[#FAFAFA] rounded-tl-[16px] rounded-tr-[16px]">
            <div>
              <img className="w-full" src="/hotel3.png" />
            </div>
            <div className="py-6 px-4 flex flex-col gap-2">
              <p className="m-0 text-[14px] text-secondary">
                London Bridge Hotel
              </p>
              <h3 className="m-0 text-[24px] font-semibold">
                Danubius Hotel Regents Park
              </h3>
              <div className="flex justify-between mt-2">
                <p className="m-0 text-[16px] text-[#222222]">
                  $200 Par Night
                </p>
                <Rating />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
