import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  useEffect(() => {
    const currentPage = location.pathname.substring(1) || "home";
    setActivePage(currentPage);
  }, [location]);
  const content = (
    <>
      <nav className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooth={true} to={"/"}>
              Home
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooth={true} to={"/About"}>
              About
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooth={true} to={"/Project"}>
              Project
            </Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link spy={true} smooth={true} to={"/Contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
  return (
    <header className="flex justify-between bg-slate-900 text-white lg:px-20 px-9 py-4 items-center border-b border-slate-800">
      <div className="text-3xl font-bold">SheNuSya</div>
      <nav className="lg:items-center lg:font-normal hidden lg:flex">
        <ul className="flex gap-5 text-[18px]">
          <li
            className={`hover:text-cyan-600 transition border-b-2 border-slate-900 hover:border-cyan-600 cursor-pointer ${
              activePage === "home" ? "text-[#4792c5]" : "dark:text-white"
            }`}
          >
            <Link spy={true} smooth={true} to={"/"}>
              Home
            </Link>
          </li>
          <li
            className={`hover:text-cyan-600 transition border-b-2 border-slate-900 hover:border-cyan-600 cursor-pointer ${
              activePage === "About" ? "text-[#4792c5]" : "dark:text-white"
            }`}
          >
            <Link spy={true} smooth={true} to={"/About"}>
              About
            </Link>
          </li>
          <li
            className={`hover:text-cyan-600 transition border-b-2 border-slate-900 hover:border-cyan-600 cursor-pointer ${
              activePage === "Project" ? "text-[#4792c5]" : "dark:text-white"
            }`}
          >
            <Link spy={true} smooth={true} to={"/Project"}>
              Project
            </Link>
          </li>
          <li
            className={`hover:text-cyan-600 transition border-b-2 border-slate-900 hover:border-cyan-600 cursor-pointer ${
              activePage === "Contact" ? "text-[#4792c5]" : "dark:text-white"
            }`}
          >
            <Link spy={true} smooth={true} to={"/Contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="block sm:hidden">{click && content}</div>
      <button className="block sm:hidden transition" onClick={handleClick}>
        {click ? <FaTimes /> : <CiMenuBurger />}
      </button>
    </header>
  );
};

export default NavBar;
