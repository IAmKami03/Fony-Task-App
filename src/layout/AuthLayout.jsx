import logo from "../assets/logo.png";
import imagee from "../assets/image 500.png";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:min-h-0 md:gap-[20px] px-6 sm:px-10 md:pl-[100px]">
      <div className="w-full md:w-[484px] flex flex-col gap-[35px] items-start justify-center py-[40px]">
        <Link to="/">
          <img src={logo} alt="Fony" className="h-8 md:h-auto" />
        </Link>

        <div>
          <div className="space-y-[7px]">
            <h4 className="text-[24px] md:text-[30px] font-bold tracking-tight">
              Welcome Back
            </h4>
            <p className="text-[14px] md:text-[16px] font-medium text-[#666666]">
              Enter your details to sign in to your account.
            </p>
          </div>
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </div>

      <img
        src={imagee}
        alt=""
        className="hidden md:block flex-1 w-[747px] h-[724px] object-cover"
      />
    </div>
  );
};

export default AuthLayout;
