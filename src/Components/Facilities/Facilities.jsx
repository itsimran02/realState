import React from "react";
import {
  MdOutlineComputer,
  MdOutlinePushPin,
  MdOutlineDinnerDining,
  MdOutlineWifi,
  MdElectricBolt,
  MdOutlineWater,
  MdSportsMartialArts,
  MdCheckCircleOutline,
} from "react-icons/md";
const Facilities = () => {
  return (
    <section className="px-4 mt-16">
      <div className="container mx-auto flex flex-col lg:flex-row lg:gap-4 gap-12 ">
        {/* left section  */}
        <div className="lg:w-1/3 ">
          <h2 className="text-[40px]  m-0 leading-[51px]">
            We do our best facilities provide you
          </h2>
          <p className="leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing{" "}
            and typesetting industry. Lorem Ipsum has been{" "}
            the industry's standard dummy{" "}
          </p>
          <button className="primary-button py-4 px-5 rounded-280">
            Contact Now
          </button>
        </div>
        {/* right section  */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:w-2/3">
          <div className="flex flex-col items-center  py-6 px-4 gap-2 justify-center   hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlineComputer
                size={35}
                color="#24ab70"
              />
            </div>
            <p>Private Workspace</p>
          </div>
          <div className="flex flex-col items-center  py-6 px-4 gap-2 justify-center   hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlinePushPin size={35} color="#24ab70" />
            </div>
            <p>Parking Area</p>
          </div>
          <div className="flex flex-col items-center  py-6 px-4 gap-2 justify-center   hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlineDinnerDining
                size={35}
                color="#24ab70"
              />
            </div>
            <p>Breakfast</p>
          </div>
          <div className="flex flex-col items-center  py-6 px-4 gap-2 justify-center   hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlineWifi size={35} color="#24ab70" />
            </div>
            <p>Free Wifi</p>
          </div>
          <div className="flex flex-col items-center  py-6 px-4 gap-2 justify-center   hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdElectricBolt size={35} color="#24ab70" />
            </div>
            <p>Free Electricity</p>
          </div>
          <div className="flex flex-col items-center  py-6 px-4 gap-2 justify-center   hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdOutlineWater size={35} color="#24ab70" />
            </div>
            <p>Swimming Pool</p>
          </div>
          <div className="flex flex-col items-center  py-6 px-4 gap-2 justify-center   hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdSportsMartialArts
                size={35}
                color="#24ab70"
              />
            </div>
            <p>exercise Space</p>
          </div>
          <div className="flex flex-col items-center  py-6 px-4 gap-2 justify-center   hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <div>
              <MdCheckCircleOutline
                size={35}
                color="#24ab70"
              />
            </div>
            <p>Other Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
