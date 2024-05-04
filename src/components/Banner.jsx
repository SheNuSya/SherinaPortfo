import React from "react";
import img from "../assets/sherin_1.jpeg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750
  })
  return (
    <section className="lg:px-56 px-10 lg:py-0 py-20 text-between gap-5 lg-text-start flex lg:flex-row justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex justify-between flex-col-reverse lg:items-start items-center text-white lg:grid lg:grid-cols-2 lg:gap-5">
        <div data-aos="fade-up-right" className="col-start-1 col-end-1 md:w-[450px]">
          <h1 style={{fontFamily:"cursive"}} className="text-[40px] font-semibold mb-8 leading-normal uppercase">
            Welcome To <span className="text-sky-600">Sherina Portfolio</span>
          </h1>
          <p className="mb-10">
            Hii.., I am Sherina, Now I am a Students and Web Developer
          </p>
          <Link
            to={"/About"}
            className="text-sky-200 hover:text-sky-300 rounded-full glow p-4 bg-sky-900 border-b mt-10 border-slate-800"
          >
            About Me
          </Link>
        </div>
        <div data-aos="fade-up" className="col-start-2 col-end-2 lg:ml-40 m-auto ">
          <img
            src={img}
            width={290}
            height={290}
            className="rounded-full border-2 p-1 border-sky-400 img_glow"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
