import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-6 sm:px-10 md:px-[100px] flex justify-between py-5 sm:py-[30px] items-center border-b border-[#D9D9D9] relative">
      <Link to="/">
        <img src={logo} alt="Fony" className="h-8 sm:h-auto" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex gap-10 items-center">
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

      <div className="hidden md:flex gap-3">
        <Link
          to="/login"
          className="font-bold text-[16px] py-2 px-6 border border-[#000000] border-b-4 rounded-[48px] hover:bg-[#F6FBFF] transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="font-bold text-[16px] py-2 px-6 bg-[#77C2FF] border-2 border-b-4 border-[#000000] rounded-[48px]"
        >
          Sign Up
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#D9D9D9] shadow-md z-50 flex flex-col px-6 py-5 gap-4 md:hidden">
          <Link
            className="font-medium text-[16px]"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="font-medium text-[16px]"
            onClick={() => setMenuOpen(false)}
          >
            Benefits
          </Link>
          <Link
            className="font-medium text-[16px]"
            onClick={() => setMenuOpen(false)}
          >
            Testimonial
          </Link>
          <hr className="border-[#D9D9D9]" />
          <Link
            to="/login"
            className="font-medium text-[16px] text-center py-2 px-6 border border-[#000000] rounded-[48px]"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="font-bold text-[16px] text-center py-2 px-6 bg-[#77C2FF] border-2 border-b-4 border-[#000000] rounded-[48px]"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
