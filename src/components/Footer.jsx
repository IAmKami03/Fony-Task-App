import footer from "../assets/footer.png";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook-02.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/new-twitter.png";
import tiktok from "../assets/tiktok.png";

const Footer = () => {
  return (
    <div className="px-6 sm:px-10 md:px-[100px] flex flex-col md:flex-row items-start gap-8 md:gap-[60.1px] mb-10">
      <img src={footer} alt="Fony" className="h-10 md:h-auto" />

      <div className="flex flex-col justify-between w-full gap-8 md:gap-0 md:h-[400px]">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
          <div className="flex gap-6 sm:gap-10 items-center flex-wrap">
            <Link className="font-medium text-[16px] hover:text-[#77C2FF] transition">
              Home
            </Link>
            <Link className="font-medium text-[16px] hover:text-[#77C2FF] transition">
              Benefits
            </Link>
            <Link className="font-medium text-[16px] hover:text-[#77C2FF] transition">
              Testimonial
            </Link>
          </div>
          <div className="flex gap-[22px] items-center">
            <img
              src={facebook}
              alt="Facebook"
              className="cursor-pointer hover:opacity-70 transition"
            />
            <img
              src={instagram}
              alt="Instagram"
              className="cursor-pointer hover:opacity-70 transition"
            />
            <img
              src={twitter}
              alt="Twitter"
              className="cursor-pointer hover:opacity-70 transition"
            />
            <img
              src={tiktok}
              alt="TikTok"
              className="cursor-pointer hover:opacity-70 transition"
            />
          </div>
        </div>

        {/* Big logo text */}
        <div className="overflow-hidden">
          <p className="logo text-[120px] sm:text-[200px] md:text-[270px] tracking-normal leading-[100%]">
            Fony
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
