import React, { useState, useEffect } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: handleOutsideClick,
  });
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 781) {
        setIsOpen(false);
      } else {
        // setIsOpen(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup event listener on component unmount
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);
  function handleToggleMenu() {
    setIsOpen((prev) => !prev);
  }
  function handleOutsideClick() {
    setIsOpen(false);
  }
  return (
    <header ref={ref} className="py-4 px-4">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="logo">
          <NavLink to="/" className="">
            <h2>REALSTYLE</h2>
          </NavLink>
        </div>
        <nav
          className={`md:block z-10  ${
            !isOpen
              ? "hidden"
              : " absolute top-[5rem] right-[2rem] bg-white py-16 px-16 shadow-md rounded-lg"
          }`}
        >
          <ul
            className={`list-none p-0 list__style md:flex md:gap-10 flex-col md:flex-row ${
              !isOpen
                ? "hidden"
                : " flex-col gap-4 flex justify-start  "
            }`}
          >
            <li>
              <a href="#"> Booking</a>
            </li>
            <li>
              <a href="#"> Facilities</a>
            </li>
            <li>
              {" "}
              <a href="#"> About Us</a>
            </li>
            <li>
              {" "}
              <a> Location</a>
            </li>
            <li>
              {" "}
              <NavLink to="contact" href="#">
                {" "}
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 ">
          <NavLink to="login">
          <button className="rounded-[35px] py-2 px-6 primary-button">
            Login
          </button>
          </NavLink>
          <button
            className="md:hidden w-full bg-white"
            onClick={handleToggleMenu}
          >
            <MdMenu size={25} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
