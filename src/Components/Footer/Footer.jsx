import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-end">
        {/* Column 1 */}
        <div>
          <p className="text-[16px] m-0 leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
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
        {/* Column 2 */}
        <div>
          <p className="font-bold text-[16px] m-0 leading-[28px]">
            Home
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="text-[16px] m-0 leading-[28px] block"
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
        {/* Column 3 */}
        <div>
          <p className="font-bold text-gray-900">Home</p>
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
        {/* Column 4 */}
        <div>
          <p className="font-bold text-gray-900">Home</p>
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
    </footer>
  );
};

export default Footer;
