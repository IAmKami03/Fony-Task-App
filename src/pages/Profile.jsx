import Nav from "./dashboard/Nav";
import prof from "../assets/prof.png";
import camera from "../assets/camera-add-02.png";
import forgot from "../assets/security-lock.png";
import logout from "../assets/Logout 2.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const { user, logout: logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  
  // Split name into first/last for display
  const nameParts = user?.name?.split(" ") || [];
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div>
      <Nav />
      <div className="w-full max-w-[736px] bg-white py-6 md:py-[22px] px-4 md:px-3 rounded-[18px] mx-auto mt-6">
        <div className="gap-6 md:gap-[35px] flex flex-col">
          <h3 className="text-center font-bold text-[22px] md:text-[30px] leading-[100%] tracking-tight">
            Personal Information
          </h3>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <img src={prof} alt="" className="w-16 h-16 sm:w-auto sm:h-auto rounded-full" />
            <div className="flex items-center gap-2 cursor-pointer">
              <img src={camera} alt="" />
              <p className="text-[14px] md:text-[16px]">Change Profile Image</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-[15px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-[11px]">
              <div className="flex flex-col gap-[6px]">
                <label className="font-medium text-[14px] md:text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  readOnly
                  className="py-3 md:py-[18px] px-[19px] bg-[#FBFBFB] border border-[#D9D9D9] text-[13px] md:text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px]"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="font-medium text-[14px] md:text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  readOnly
                  className="py-3 md:py-[18px] px-[19px] bg-[#FBFBFB] border border-[#D9D9D9] text-[13px] md:text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-[11px]">
              <div className="flex flex-col gap-[6px]">
                <label className="font-medium text-[14px] md:text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]">
                  Email
                </label>
                <input
                  type="text"
                  value={user?.email || ""}
                  readOnly
                  className="py-3 md:py-[18px] px-[19px] bg-[#FBFBFB] border border-[#D9D9D9] text-[13px] md:text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px]"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="font-medium text-[14px] md:text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]">
                  Phone number
                </label>
                <input
                  type="text"
                  value={user?.phoneNumber || "—"}
                  readOnly
                  className="py-3 md:py-[18px] px-[19px] bg-[#FBFBFB] border border-[#D9D9D9] text-[13px] md:text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 md:space-y-[30px]">
            <button className="bg-[#FBFBFB] py-3 px-[19px] rounded-[48px] border-2 border-[#000000] border-b-4 w-full text-[14px] md:text-[16px]">
              Edit Profile information
            </button>

            <div className="space-y-2.5">
              <Link
                to="/forgot"
                className="bg-[#FBFBFB] py-3 px-[19px] rounded-[48px] border border-[#D9D9D9] w-full flex gap-2.5 justify-center items-center"
              >
                <img src={forgot} alt="" />
                <span className="text-[#448AFF] font-medium text-[14px] md:text-[16px] leading-[20px] tracking-tight">
                  Forgot Password
                </span>
              </Link>

              <div
                onClick={handleLogout}
                className="bg-[#FBFBFB] py-3 px-[19px] rounded-[48px] border border-[#D9D9D9] w-full flex gap-2.5 justify-center items-center cursor-pointer"
              >
                <img src={logout} alt="" />
                <span className="text-[#FF3B3B] font-medium text-[14px] md:text-[16px] leading-[20px] tracking-tight">
                  Log out
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
