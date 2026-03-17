import React, { useState } from "react";
import logoo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import prof from "../../assets/image.png";
import close from "../../assets/Close Circle.svg";
import logout from "../../assets/Logout 2.png";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center border-b border-[#D9D9D9] shadow-md py-[30px] px-[100px]">
        <Link to="/">
          <img src={logoo} alt="" />
        </Link>

        <div className="flex items-center gap-2.5">
          <button className="font-medium text-[16px] leading-[20px] tracking-tighter bg-[#77C2FF] py-2.5 px-[19px] rounded-[22px] border border-[#000000] ">
            Dashboard
          </button>
          {/* <button className="font-medium text-[16px] leading-[20px] tracking-tighter bg-[#F1F1F180] py-2.5 px-[19px] rounded-[22px]">
            Ongoing
          </button> */}
          <button className="font-medium text-[16px] leading-[20px] tracking-tighter bg-[#F1F1F180] py-2.5 px-[19px] rounded-[22px]">
            Completed
          </button>
        </div>

        <div>
          <img
            src={profile}
            alt=""
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div className="absolute mt-3 right-3  w-[326px] bg-[#FFFFFF] rounded-[20px] shadow-md border border-[#E4E4E4] l p-[6px] space-y-[6px] z-50">
              <div className="flex justify-between items-start border border-[#E4E4E4] rounded-[60px] p-2.5">
                <div className="flex gap-2.5">
                  <img src={prof} alt="" className="w-[38px] h-[38px]" />
                  <div className="space-y-[2px] ">
                    <p className="font-normal text-[16px] text-[#0C0C0C] leading-[100%] tracking-tight">
                      Farid Ahmed
                    </p>
                    <p className="text-[12px] text-[#535353] leading-[100%] tracking-tight">
                      alofariid@gmail.com
                    </p>
                  </div>
                </div>
                <img
                  src={close}
                  alt=""
                  className=""
                  onClick={() => setOpen(false)}
                />
              </div>

              <div>
                <div className="py-[5px] px-2.5 flex gap-[6px] items-center rounded-[60px]">
                  <img src={user} alt="" />
                  <p className="flex items-center gap-2 text-[14px] text-[#0C0C0C] text-[16px] leading-[126%] tracking-tight p-2 rounded-lg">
                    View Profile
                  </p>
                </div>

                <div className="py-[5px] px-2.5 flex gap-[6px] items-center rounded-[60px]">
                  <img src={logout} alt="" />
                  <p className="flex items-center gap-2 text-[14px] text-[#0C0C0C] text-[16px] leading-[126%] tracking-tight  p-2 rounded-lg">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
