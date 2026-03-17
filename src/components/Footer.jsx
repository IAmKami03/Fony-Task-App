import React from "react";
import footer from "../assets/footer.png";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook-02.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/new-twitter.png";
import tiktok from "../assets/tiktok.png";

const Footer = () => {
  return (
    <div className="px-[100px] flex items-start gap-[60.1px] mb-[40px] ">
      <img src={footer} alt="" />

      <div className=" flex flex-col justify-between h-[400px]">
        <div className="flex justify-between">
          <div className="flex gap-10 items-center">
            <Link>Home</Link>
            <Link>Benefits</Link>
            <Link>Testimonial</Link>
          </div>
          <div className="flex gap-[22px] items-center">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={tiktok} alt="" />
          </div>
        </div>
        <div>
          <p className="logo text-[270px] tracking-normal leading-[100%]">Fony</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
