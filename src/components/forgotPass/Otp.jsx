import React from "react";
import back from "../../assets/Arrow 31.png";
import otp from "../../assets/otp image.png";

const Otp = ({ setShowScreen }) => {
  return (
    <div>
      <div className="flex gap-5 ">
        <div className="pt-[40px] flex flex-col gap-[35px] w-[484px] ">
          <div
            onClick={() => setShowScreen("forgot")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={back} alt="back" />
            <p>Back</p>
          </div>

          <div className="space-y-[7px] ">
            <h4 className="text-[30px] tracking-tight font-bold">
              Enter 6-Digit Code
            </h4>
            <p className="text-[16px] tracking-tighter text-[#666666] font-medium">
              Enter 6-digit code sent to your olaagwj@gmail.com
            </p>
          </div>

          <form className="flex flex-col " onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-[6px] items-center">
              <p className="border border-[#D9D9D9] rounded-[48px] w-[56px] h-[56px]"></p>
              <p className="border border-[#D9D9D9] rounded-[48px] w-[56px] h-[56px]"></p>
              <p className="border border-[#D9D9D9] rounded-[48px] w-[56px] h-[56px]"></p>
              <p className="border border-[#D9D9D9] rounded-[48px] w-[56px] h-[56px]"></p>
              <p className="border border-[#D9D9D9] rounded-[48px] w-[56px] h-[56px]"></p>
              <p className="border border-[#D9D9D9] rounded-[48px] w-[56px] h-[56px]"></p>
            </div>
            <button
              type="button"
              onClick={() => setShowScreen("newPassword")}
              className="bg-[#77C2FF] text-[16px] font-bold rounded-[48px] block w-full mt-6 py-3 px-[19px] cursor-pointer border-2 border-b-4 border-[#000000]"
            >
              Login
            </button>

            <p className=" text-[#666666] text-[16px] mt-6 ">
              Didn’t get code?
              <span className="text-[#77C2FF] font-bold">Resend</span>
            </p>
          </form>

          <p className="text-[#666666] text-[16px]">
            Remember you Password? <span className="font-bold">Sign in</span>
          </p>
        </div>

        <img src={otp} alt="otp" className="flex-1 w-[747px] h-[724px]" />
      </div>
    </div>
  );
};

export default Otp;
