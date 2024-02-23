import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Navbar/Navbar";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <section className="bg-black pb-8 p-8 sm:pt-12">
      <Footer />
      </section>
    </>
  );
};

export default AppLayout;
