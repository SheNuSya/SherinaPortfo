import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <>
      <NavBar />

      <section className="lg:px-56 px-10 lg:py-0 py-20 text-between lg-text-start flex lg:flex-row justify-center items-center bg-slate-900">
        <div className="h-full lg:py-40 flex justify-center flex-col-reverse lg:items-start items-center text-white ">
          <div
            data-aos="fade-up-right"
            className=" bg-gray-800 shadow-lg shadow-blue-500/50  rounded hover:rounded-lg p-10"
          >
            <h1 className="text-[50px] font-semibold mb-8 leading-normal text-fuchsia-600  uppercase">
              Contact Me
            </h1>
            <h2 className="text-[20px] font-bold">Email :</h2>
            <p className="mb-5">sherinanursyabania@gmail.com</p>
            <h2 className="text-[20px] font-bold">Linkedlin :</h2>
            <p className="mb-5">Sherina Nur Syabania</p>
            <h2 className="text-[20px] font-bold">Instagram :</h2>
            <p className="mb-5">@ririnsherina_</p>
            <h2 className="text-[20px] font-bold">GitHub :</h2>
            <p className="mb-10">SheNuSya</p>
          </div>
          <div className="col-start-2 col-end-2"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
