import { useState } from "react";
import back from "../../assets/Arrow 31.png";
import imagee from "../../assets/image 500.png";
import { Link } from "react-router-dom";
import { sendOTP } from "../../api/authService";

const Forgot = ({ setShowScreen }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleConfirm = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await sendOTP(email.trim().toLowerCase());
      setShowScreen("otp");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 min-h-screen md:min-h-0">
      <div className="pt-[40px] flex flex-col gap-[35px] w-full md:w-[484px] px-0 md:px-0">
        <Link to="/login" className="flex items-center gap-2 cursor-pointer">
          <img src={back} alt="" />
          <p className="text-[14px] md:text-[16px]">Back</p>
        </Link>

        <div className="space-y-[7px]">
          <h4 className="text-[24px] md:text-[30px] tracking-tight font-bold">
            Forgot your password?
          </h4>
          <p className="text-[14px] md:text-[16px] tracking-tighter text-[#666666] font-medium">
            Enter the email linked to your account and we'll send you an OTP.
          </p>
        </div>

        <form onSubmit={handleConfirm} className="flex flex-col gap-[35px]">
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="email"
              className="text-[#0C0C0C] font-medium text-[14px] md:text-[16px]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email used to create account"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="text-[#666666] text-[14px] outline-none font-medium w-full py-3 px-[19px] border border-[#D9D9D9] rounded-[48px]"
            />
          </div>
          {error && (
            <p className="text-red-500 text-[14px] font-medium">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#77C2FF] text-[14px] md:text-[16px] font-bold rounded-[48px] block w-full py-3 px-[19px] cursor-pointer border-2 border-b-4 border-[#000000] disabled:opacity-60"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      </div>
      <img
        src={imagee}
        alt=""
        className="hidden md:block flex-1 w-[747px] h-[724px] object-cover"
      />
    </div>
  );
};

export default Forgot;
