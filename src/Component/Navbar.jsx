import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constant";
import '../index.css'
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function handletoggle() {
    setToggle((prev) => !prev);
  }

  return (
    <nav className="sm:sticky top-0 flex justify-between items-center w-full sm:px-40 px-5 py-5 lg:px-30 bg-primary">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden items-center">
        {navLinks.map((nav, index) => (
          <li key={index} className="">
            <Link to={nav.id} spy={true} smooth={true} offset={-100} duration={500} >
              <p className="text-[1rem] text-white p-4 cursor-pointer">{nav.title}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end transition-all">
        <img src={toggle ? close : menu} alt="" onClick={handletoggle} className="object-contain" />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-[70px] right-0 rounded-lg bg-black-gradient min-w-[140px] px-10 py-5`}
        > 
         <ul>
        {navLinks.map((nav, index) => (
          <li key={index} className="">
            <Link to={nav.id} spy={true} smooth={true} offset={-70} duration={500} >
              <p className="text-[1rem] text-white p-4 cursor-pointer">{nav.title}</p>
            </Link>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
