import React from "react";
import back from "../../assets/Arrow 31.png";
import imagee from "../../assets/image 500.png";
import { Link } from "react-router-dom";

const Forgot = ({ setShowScreen }) => {
  return (
    <div className="flex gap-5">
      <div className="pt-[40px] flex flex-col gap-[35px] w-[484px]">
        <Link to="/login" className="flex items-center gap-2 cursor-pointer">
          <img src={back} alt="" />
          <p>Back</p>
        </Link>

        <div className="space-y-[7px] ">
          <h4 className="text-[30px] tracking-tight font-bold">
            Forgot your password?
          </h4>
          <p className="text-[16px] tracking-tighter text-[#666666] font-medium">
            We will send instructions to your email to reset your password.
          </p>
        </div>

        <form action="" className="flex flex-col gap-[35px]">
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="text-[#0C0C0C] font-medium text-[16px] "
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter email used to create account"
              required
              className=" text-[#666666] text-[14px] outline-nonefont-medium w-full  py-3 px-[19px]  gap-2.5 border border-[#D9D9D9] rounded-[48px] "
            />
          </div>
          <button
            type="button"
            onClick={() => setShowScreen("otp")}
            className="bg-[#77C2FF] text-[16px] font-bold rounded-[48px] block w-full py-3 px-[19px] cursor-pointer border-2 border-b-4 border-[#000000]"
          >
            Confirm
          </button>
        </form>
      </div>
      <img src={imagee} alt="" className=" flex-1 w-[747px] h-[724px]" />
    </div>
  );
};

export default Forgot;
