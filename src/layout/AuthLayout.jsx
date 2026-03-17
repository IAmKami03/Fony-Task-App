import React from "react";
import logo from "../assets/logo.png";
import imagee from "../assets/image 500.png";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex gap-[20px]  pl-[100px] ">
      <div className="w-[484px]  flex flex-col gap-[35px] items-start justify-center py-[40px] ">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <div className="">
          <div className="space-y-[7px]">
            <h4 className="text-[30px] font-bold tracking-tight">
              Welcome Back
            </h4>
            <p className="text-[16px] font-medium text-[#666666]">
              Enter your details to sign in to your account.
            </p>
          </div>
        </div>

        <Outlet />
      </div>

      <img src={imagee} alt="" className=" flex-1 w-[747px] h-[724px]" />
    </div>
  );
};

export default AuthLayout;
