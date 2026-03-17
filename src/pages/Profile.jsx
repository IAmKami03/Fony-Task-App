import React from "react";
import Nav from "./dashboard/Nav";
import prof from "../assets/prof.png";
import camera from "../assets/camera-add-02.png";
import forgot from "../assets/security-lock.png";
import logout from "../assets/Logout 2.png";

const Profile = () => {
  return (
    <div>
      <Nav />

      <div className="w-[736px] bg-white py-[22px] px-3 rounded-[18px]  mx-auto ">
        <div className="gap-[35px] flex flex-col">
          <h3 className="text-center font-bold text-[30px] leading-[100%] tracking-tight ">
            Personal Information
          </h3>
          <div className="flex justify-between items-center">
            <img src={prof} alt="" />
            <div className="flex items-center gap-2">
              <img src={camera} alt="" />
              <p>Change Profile Image</p>
            </div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="grid grid-cols-2 gap-[11px] items-center">
              <div className="flex flex-col gap-[6px] ">
                <label
                  htmlFor="fName"
                  className="font-medium text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Cole"
                  className="py-[18px] px-[19px] bg-[#FBFBFB] border border-[#D9D9D9] text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px] "
                />
              </div>

              <div className="flex flex-col gap-[6px] ">
                <label
                  htmlFor="lName"
                  className="font-medium text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Mudryk"
                  className="py-[18px] px-[19px] bg-[#FBFBFB] border border-[#D9D9D9] text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px] "
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[11px] items-center ">
              <div className="flex flex-col gap-[6px] ">
                <label
                  htmlFor="email"
                  className="font-medium text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="olafarid12@gmail.com"
                  className="py-[18px] px-[19px] bg-[#FBFBFB] border border-[#D9D9D9] text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px] "
                />
              </div>

              <div className="flex flex-col gap-[6px] ">
                <label
                  htmlFor="numtber"
                  className="font-medium text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  placeholder="09025730919"
                  className="py-[18px] px-[19px] bg-[#FBFBFB] border border-[#D9D9D9] text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px] "
                />
              </div>
            </div>
          </div>

          <div className="space-y-[30px]">
            <button className="bg-[#FBFBFB] py-3 px-[19px] rounded-[48px] border-2 border-[#000000] border-b-4 w-full ">
              Edit Profile information
            </button>

            <div className="space-y-2.5">
              <div className="bg-[#FBFBFB] py-3 px-[19px] rounded-[48px] border border-[#D9D9D9]  w-full flex gap-2.5 flex justify-center items-center">
                <img src={forgot} alt="" />
                <button className="text-[#448AFF] font-medium text-[16px] leading-[20px] tracking-tight">
                  Forgot Password
                </button>
              </div>

              <div className="bg-[#FBFBFB] py-3 px-[19px] rounded-[48px] border border-[#D9D9D9]  w-full flex gap-2.5 flex justify-center items-center">
                <img src={logout} alt="" />
                <button className="text-[#FF3B3B] font-medium text-[16px] leading-[20px] tracking-tight">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
