import { useState } from "react";
import back from "../../assets/Arrow 31.png";
import imagee from "../../assets/image 500.png";
import { Link } from "react-router-dom";
import { sendOTP } from "../../api/authService";

const Forgot = ({ setShowScreen }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await sendOTP();
      setShowScreen("otp");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-5">
      <div className="pt-[40px] flex flex-col gap-[35px] w-[484px]">
        <Link to="/login" className="flex items-center gap-2 cursor-pointer">
          <img src={back} alt="" />
          <p>Back</p>
        </Link>

        <div className="space-y-[7px]">
          <h4 className="text-[30px] tracking-tight font-bold">
            Forgot your password?
          </h4>
          <p className="text-[16px] tracking-tighter text-[#666666] font-medium">
            We will send an OTP to your registered email to reset your password.
          </p>
        </div>

        <form onSubmit={handleConfirm} className="flex flex-col gap-[35px]">
          {error && (
            <p className="text-red-500 text-[14px] font-medium">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#77C2FF] text-[16px] font-bold rounded-[48px] block w-full py-3 px-[19px] cursor-pointer border-2 border-b-4 border-[#000000] disabled:opacity-60"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      </div>
      <img src={imagee} alt="" className="flex-1 w-[747px] h-[724px]" />
    </div>
  );
};

export default Forgot;
