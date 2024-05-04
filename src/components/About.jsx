import React from "react";
import NavBar from "./NavBar";
import img from "../assets/sherin_2.jpeg";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <>
      <NavBar />

      <section className="bg-slate-900 w-full lg:px-56 px-10 lg:py-0 py-20 text-between gap-5 lg-text-start flex lg:flex-row justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-40 flex justify-between flex-col-reverse lg:items-start items-center text-white lg:grid lg:grid-cols-2 lg:gap-5">
          <div data-aos="fade-up" className="col-start-1 col-end-1">
            <h2 className="text-[38px] font-semibold leading-normal">
              Hello I Am,
            </h2>
            <h1 className="text-[38px] font-semibold mb-8 leading-normal md:w-[380px] text-sky-600">
              Sherina Nur Syabania
            </h1>
            <p
              style={{ fontFamily: "monospace" }}
              className="text-[16.5px] mb-5"
            >
              I'am an active student in the Informatics Engineering at Batam
              State Polytechnic. I'm currently interested on backend Development
              and I am also want to learn more about how the system works.
            </p>
            <p style={{ fontFamily: "initial" }} className="text-[16.5px] mb-8">
              You can have a look at my CV below
            </p>
            <a
              href="https://drive.google.com/file/d/1kOAIubL9e4iJ9scp4gUr-B7FiBZfEQcm/view?usp=sharing"
              className="text-sky-200 hover:text-sky-300 rounded-full glow p-4 bg-sky-900 border-b mt-2 border-slate-800"
            >
              My Resume
            </a>
          </div>
          <div className="col-start-2 col-end-2 lg:ml-40 m-auto ">
            <img
              data-aos="fade-up"
              src={img}
              width={290}
              height={290}
              className="rounded-full border-2 p-1 border-sky-400 img_glow"
              alt=""
            />
            <div data-aos="fade-up" className="flex space-x-2 mt-11 ml-14">
              <a
                href="https://github.com/SheNuSya"
                className="text-sky-600 hover:text-sky-500 rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/sherina-nur-syabania-0186702a3/"
                className="text-sky-600 hover:text-sky-500 rounded-full glow p-2 "
              >
                <AiFillLinkedin className="text-[28px]" />
              </a>
              <a
                href="https://www.instagram.com/ririnsherina_?igsh=MTV2aHF3Z3N6ODlzcg=="
                className="text-sky-600 hover:text-sky-500 rounded-full glow p-2 "
              >
                <AiFillInstagram className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 lg:px-56 px-10 lg:py-0 py-20 text-between gap-5 lg-text-start flex lg:flex-row justify-between lg:gap-25 items-center">
        <div className="h-full lg:py-40 flex justify-between flex-col-reverse lg:items-start items-center text-white lg:grid lg:grid-cols-2 lg:gap-5">
          <div className="col-start-1 col-end-1">
            <h1
              data-aos="fade-up-right"
              className="text-[40px] font-semibold mb-20 leading-normal uppercase"
            >
              Timeline Study
            </h1>
            <ul>
              <li className="relative flex gap-6">
                <div className="container mx-auto px-8">
                  <div
                    data-aos="fade-right"
                    className="absolute left-[5.5px] h-full w-[1px] bg-sky-200"
                  >
                    <FaCircle className="absolute -left-[7px]" />
                  </div>
                  <div
                    data-aos="zoom-in"
                    className="bg-slate-800 mx-auto p-4 hover:bg-sky-900"
                  >
                    <h2 className="text-[29px] font-semibold leading-normal">
                      Batam State 3 Vocational School
                    </h2>
                    <p className=" text-gray-400 italic">High School</p>
                    <p className=" text-gray-400 mb-5">July 2019 - June 2022</p>
                    <p className="">
                      Majored In Computer and Network Engineering
                    </p>
                    <p className="mb-10">GPA 85.60</p>
                  </div>
                </div>
              </li>
              <li className="relative flex gap-6">
                <div className="container mx-auto px-8">
                  <div
                    data-aos="fade-right"
                    className="absolute left-[5.5px] h-full w-[1px] bg-sky-200"
                  >
                    <FaCircle className="absolute -left-[7px] mt-5" />
                  </div>
                  <div
                    data-aos="zoom-in"
                    className="bg-slate-800 mt-5 p-4 hover:bg-sky-900"
                  >
                    <h2 className="text-[29px] font-semibold leading-normal">
                      Internship In BAPELITBANGDA
                    </h2>
                    <p className=" text-gray-400 italic">Internship</p>
                    <p className=" text-gray-400 mb-5">
                      January 2021 - April 2021
                    </p>
                    <p>Experience:</p>
                    <li className="list-disc ml-5">
                      <p className="">
                        Responsibility for zoom meeting activities
                      </p>
                    </li>
                    <li className="list-disc ml-5">
                      <p className="mb-5">Developing SIDALITBANG Application</p>
                    </li>
                  </div>
                </div>
              </li>
              <li className="relative flex gap-6">
                <div className="container mx-auto px-8">
                  <div
                    data-aos="fade-right"
                    className="absolute left-[5.5px] h-full w-[1px] bg-sky-200"
                  >
                    <FaCircle className="absolute -left-[7px] mt-5" />
                  </div>
                  <div
                    data-aos="zoom-in"
                    className="bg-slate-800 mt-5 p-4 hover:bg-sky-900"
                  >
                    <h2 className="text-[29px] font-semibold leading-normal">
                      Batam State Polythenic
                    </h2>
                    <p className=" text-gray-400 italic">University</p>
                    <p className=" text-gray-400 mb-5">August 2022 - Recent</p>
                    <p className="mb-5">Majored In Informatic Engineering</p>
                  </div>
                </div>
              </li>
              <li className="relative flex gap-6">
                <div className="container mx-auto px-8">
                  <div
                    data-aos="fade-right"
                    className="absolute left-[5.5px] h-full w-[1px] bg-sky-200"
                  >
                    <FaCircle className="absolute -left-[7px] mt-5" />
                  </div>
                  <div
                    data-aos="zoom-in"
                    className="bg-slate-800 mt-5 p-4 hover:bg-sky-900"
                  >
                    <h2 className="text-[29px] font-semibold leading-normal">
                      Infinite Learning
                    </h2>
                    <p className=" text-gray-400 italic">Study Independent</p>
                    <p className=" text-gray-400 mb-5">
                      Februari 2024 - Recent
                    </p>
                    <p className="mb-5">
                      Majored In Web Development & UI UX Design{" "}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div data-aos="fade-up-left" className="col-start-2 col-end-2">
            <h1 className="text-[40px] font-semibold mb-16 leading-normal uppercase">
              Experience Skill
            </h1>
            <ul>
              <li className="relative flex gap-6">
                <div className="container mx-auto px-4">
                  <div className="bg-slate-800 mt-5 mb-10 p-3 hover:bg-sky-900">
                    <h2 className="text-[29px] font-semibold leading-normal">
                      Programming Skill
                    </h2>
                    <p className=" text-gray-400 mt-5">PHP</p>
                    <div className="w-full bg-gray-200 h-1.5 rounded-md">
                      <div className="w-9/12 bg-indigo-600 h-1.5 rounded-md"></div>
                    </div>
                    <p className=" text-gray-400 mt-5">PYTHON</p>
                    <div className="w-full bg-gray-200 h-1.5 rounded-md">
                      <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
                    </div>
                    <p className=" text-gray-400 mt-5">C++</p>
                    <div className="w-full bg-gray-200 h-1.5 rounded-md">
                      <div className="w-4/6 bg-indigo-600 h-1.5 rounded-md"></div>
                    </div>
                    <p className=" text-gray-400 mt-5">VISUAL BASIC</p>
                    <div className="w-full bg-gray-200 h-1.5 rounded-md">
                      <div className="w-4/5 bg-indigo-600 h-1.5 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
