import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-900 leading-[28px]">
              <span className="font-bold">Lorem Ipsum</span>{" "}
              is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="flex mt-4 space-x-4">
              <a
                href="#"
                className="hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="hover:text-gray-300"
                style={{ textDecoration: "none" }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-gray-900 text-[16px] leading-[28px]">
              Home
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                Booking
              </a>
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                Facilities
              </a>
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                Location
              </a>
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-gray-900 text-[16px] leading-[28px]">
              Help
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                Help center
              </a>
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                FAQs
              </a>
            </div>
          </div>
        </div>
        {/* Column 4 */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-bold text-gray-900 text-[16px] leading-[28px]">
              Get the app
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                iOS app
              </a>
              <a
                href="#"
                className="hover:text-gray-300 block"
                style={{ textDecoration: "none" }}
              >
                Android app
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
