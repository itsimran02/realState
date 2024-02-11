import React from "react";

const AboutUs = () => {
  return (
    <section className="mt-16 px-4">
      <div className="container flex flex-col lg:flex-row gap-6 justify-center items-center mx-auto">
        {/* left section */}
        <div className="flex-1">
          <img
            className="object-cover w-full rounded-lg"
            src="/About.png "
          />
        </div>
        {/* Right section  */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6">
          <h2 className="text-[40px]  m-0 leading-[51px]">
            Discover our History
          </h2>
          <p className="text-[16px] m-0 leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been
            the industry's{" "}
          </p>
          <p className="text-[16px] m-0 leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy Lorem Ipsum is
            simply dummy text of the printing and
            typesetting industry.
          </p>
          <button className="primary-button mt-2 py-4 px-5 rounded-280">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
