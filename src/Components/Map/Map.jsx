import React from "react";

const Map = () => {
  return (
    <section className="mt-16 mx-4">
      <div className="container mx-auto h-[677px] relative">
        <div
          className="h-full w-full"
          style={{
            position: "relative",
          }}
        >
          {/* Google Map iframe */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60502.96642095626!2d73.67601878315675!3d18.599476123009214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc048041bef%3A0xd0c9eb5ac3c3dee5!2sHinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707756827316!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              position: "absolute",
              top: 0,
              left: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Overlay content */}
          <div
            className="flex flex-col items-center xl:flex-row gap-4"
            style={{
              position: "absolute",
              bottom: "3rem", // Added margin from the bottom
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "90%",
            }}
          >
            {/* Left section */}
            <div className="mb-4 md:mb-0 md:mr-4">
              <h2 className="text-[40px] m-0 leading-[51px]">
                Location of our Hotels
              </h2>
              <p className="text-[16px] m-0 leading-[28px]">
                Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem
                Ipsum has been the industry's
              </p>
            </div>
            {/* Right section */}
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-md text-[16px] m-0 leading-[28px]"
              />
              <button className="primary-button ml-2 px-4 py-2 text-white rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
