import React from "react";

const Popular = () => {
  return (
    <section className="mt-12">
      <div className="container mx-auto ">
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
      </div>
    </section>
  );
};

export default Popular;
