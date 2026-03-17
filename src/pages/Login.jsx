import React from "react";
import eye from "../assets/eye.png";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full">
        <form action="" className="flex flex-col gap-[11px]">
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="text-[#0C0C0C] font-medium text-[16px] "
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              required
              className=" outline-none text-[#666666] text-[14px] font-medium w-full  py-3 px-[19px]  gap-2.5 border border-[#D9D9D9] rounded-[48px] "
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="password"
              className="text-[#0C0C0C] font-medium text-[16px] "
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className=" w-full flex  py-3 px-[19px]  gap-2.5 border border-[#D9D9D9] rounded-[48px] ">
              <input
                type="text"
                placeholder="Enter your password"
                required
                className="w-[412px]  outline-none text-[14px] font-medium text-[#666666]"
              />
              <img src={eye} alt="" />
            </div>

            <p className="text-[14px] font-medium text-[#0C0C0C]">
              Forget password?
            </p>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            type="submit"
            className="bg-[#77C2FF] text-[16px] font-bold rounded-[48px] block w-full mt-6 py-3 px-[19px] cursor-pointer border-2 border-b-4 border-[#000000]"
          >
            Login
          </button>
        </form>

        <div className="flex flex-col gap-3 w-full">
          <div className="relative mt-[22px] ">
            <hr className="relative text-[#D9D9D9]" />
            <p
              className="text-[12px] text-[#A6A9AC] rounded-[24px] bg-[#E4E9ED]
          w-[47px] h-[26px] flex justify-center py-1 px-[14px] absolute right-[230px] z-2 bottom-[-13px] "
            >
              or
            </p>
          </div>

          <div className=" w-full mt-3 py-3 px-[19px] flex gap-2.5 border border-[#D9D9D9] rounded-[48px] justify-center items-center cursor-pointer">
            <img src={google} alt="" />
            <p className="text-[14px] font-medium text-[#0C0C0C]">
              Continue with Google
            </p>
          </div>
        </div>
      </div>

      <Link className="text-center w-full text-[#666666] text-[16px]  ">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-[#77C2FF] font-bold"
        >
          {" "}
          Sign Up
        </span>
      </Link>
    </>
  );
};

export default Login;
