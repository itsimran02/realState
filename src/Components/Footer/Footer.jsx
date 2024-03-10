import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGooglePlay,
  FaAppStoreIos,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center text-white lg:text-left">
      <div className="text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h2
              className="mb-4 text-white flex items-center justify-center font-semibold uppercase md:justify-start">
              REALSTYLE
            </h2>
            <p className="text-white w-60 max-sm:w-full">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ut expedita illum, laborum quidem nam dolores maxime provident amet consequatur!
            </p>
            <div className='flex items-center gap-5 mt-4 max-sm:justify-center'>
              <div className='flex justify-center items-center w-7 h-7 bg-white rounded-full'>
                <a href="#" target="_blank" className="pt-1"><FaFacebookF /></a>
              </div>
              <div className='flex justify-center items-center w-7 h-7 bg-white rounded-full'>
                <a href="#" target="_blank" className="pt-1"><FaTwitter /></a>
              </div>
              <div className='flex justify-center items-center w-7 h-7 bg-white rounded-full'>
                <a href="#" target="_blank" className="pt-1"><FaInstagram /></a>
              </div>
            </div>
          </div>

          <div className="">
            <h2
              className="mb-4 text-white flex justify-center font-semibold uppercase md:justify-start">
              Home
            </h2>
            <p className="mb-4">
              <a href="#" className="text-neutral-600 no-underline hover:underline dark:text-neutral-200"
              >Booking</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600 no-underline hover:underline dark:text-neutral-200"
              >Facilities</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600 no-underline hover:underline dark:text-neutral-200"
              >Location</a>
            </p>
            <p>
              <a href="#" className="text-neutral-600 no-underline hover:underline dark:text-neutral-200"
              >Contact</a>
            </p>
          </div>

          <div className="">
            <h2
              className="mb-4 text-white flex justify-center font-semibold uppercase md:justify-start">
              Help
            </h2>
            <p className="mb-4">
              <a href="#" className="text-neutral-600 no-underline hover:underline dark:text-neutral-200"
              >About Us</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600 no-underline hover:underline dark:text-neutral-200"
              >Help Center</a>
            </p>
            <p className="mb-4">
              <a href="#" className="text-neutral-600 no-underline hover:underline dark:text-neutral-200"
              >Privacy Policy</a>
            </p>
            <p>
              <a href="#" className="text-neutral-600 no-underline hover:underline dark:text-neutral-200"
              >FAQs</a>
            </p>
          </div>

          <div>
            <h2
              className="mb-4 text-white flex justify-center font-semibold uppercase md:justify-start">
              Get the App
            </h2>
            <p className="mb-4 text-white flex items-center justify-center md:justify-start">
              <FaAppStoreIos /><span>&nbsp;</span> iOS App
            </p>
            <p className="mb-4 text-white flex items-center justify-center md:justify-start">
              <FaGooglePlay /><span>&nbsp;</span> Android App
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
