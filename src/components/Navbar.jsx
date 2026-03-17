import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="px-[100px] flex justify-between py-[30px] items-center border-b border-[#D9D9D9]">
      <div className="">
        <img src={logo} alt="" className="" />
      </div>
      <div className="flex gap-10 items-center">
        <Link className=" hover:text-[#77C2FF]">Home</Link>
        <Link className=" hover:text-[#77C2FF]">Benefits</Link>
        <Link className=" hover:text-[#77C2FF]">Testimonial</Link>
      </div>
    </div>
  );
};

export default Navbar;
