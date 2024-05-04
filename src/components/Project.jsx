import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <>
      <NavBar />
      <section className="h-full w-full px-5 lg:px-20 pt-20 pb-52 flex flex-col items-center justify-between bg-slate-900  ">
        <h1
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="700"
          className="text-[40px] text-white font-semibold mb-20 leading-normal uppercase"
        >
          My Projects
        </h1>
        <div className="md:grid lg:grid-cols-4 md:grid-cols-2 md:gap-36 justify-between">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="justify-centre md:w-80 md:ml-20 mb-5 px-2 py-2 pb-5 border-2 border-sky-800 hover:bg-sky-950 rounded-3xl b_glow"
          >
            <h2 className="text-[20px] flex justify-between mt-5 mx-5 font-semibold text-white ">
              All In One Application
            </h2>
            <p className="text-gray-400 mx-5 mb-5 italic">Project Assignment</p>
            <p className="text-gray-400 mx-5 mb-4">
              Application All-In-One is an application that contains a variety
              of calculations, such as calculator, temprature conversions,
              distance and time speed calculations
            </p>
            <p className="text-gray-400 mx-5 mb-5">
              Build With HTML, Python and Streamlit
            </p>
            <p className="text-gray-400 mx-5 mb-1">
              Here the link of Application :
            </p>
            <a
              href="https://tubesdasproif1cpagi.streamlit.app/"
              className="text-sky-200 hover:text-sky-300 mx-5"
            >
              All-In-One App
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="justify-centre md:w-80 md:ml-20 mb-5 p-2 border-2 border-sky-800 hover:bg-sky-950 rounded-3xl b_glow"
          >
            <h2 className="text-[20px] flex justify-between mt-5 mx-5 font-semibold text-white ">
              Logistic Catalog Based Web Application
            </h2>
            <p className="text-gray-400 mx-5 mb-5 italic">
              Mini Project Base Learnig
            </p>
            <p className="text-gray-400 mx-5 mb-4">
              Logistic Catalog Application is an Web-based an application that
              contains a logistic catalog of building material
            </p>
            <p className="text-gray-400 mx-5 mb-5">
              Build With PHP, Bootstrap and MySQL
            </p>
            <p className="text-gray-400 mx-5 mb-1">
              Here the link of Application :
            </p>
            <a
              href="https://calogik.nuscip.xyz/"
              className="text-sky-200 hover:text-sky-300 mx-5 pb-5"
            >
              Homeworks App
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
            className="justify-centre md:w-80 md:ml-20 mb-5 p-2 border-2 border-sky-800 hover:bg-sky-950 rounded-3xl b_glow"
          >
            <h2 className="text-[20px] flex justify-between mt-5 mx-5 font-semibold text-white ">
              Final Project Information System Business Manajemen Department
            </h2>
            <p className="text-gray-400 mx-5 mb-5 italic">
              Project Base Learning
            </p>
            <p className="text-gray-400 mx-5 mb-4">
              Final Project Information System is desined to make it easier for
              students and lecture to manage the process of the final assigment.{" "}
            </p>
            <p className="text-gray-400 mx-5 mb-5">
              Build With PHP, Bootstrap 4 and MySQL
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Project;
