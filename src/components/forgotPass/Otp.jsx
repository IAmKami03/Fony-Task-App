import { useState, useRef } from "react";
import back from "../../assets/Arrow 31.png";
import otpImg from "../../assets/otp image.png";
import { verifyOTP, sendOTP } from "../../api/authService";

const Otp = ({ setShowScreen }) => {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const updated = [...digits];
    updated[index] = value.slice(-1);
    setDigits(updated);
    setError("");
    if (value && index < 5) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0)
      inputs.current[index - 1]?.focus();
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    const otpValue = digits.join("");
    if (otpValue.length < 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await verifyOTP(otpValue);
      setShowScreen("newPassword");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResending(true);
    setError("");
    try {
      await sendOTP();
      setDigits(["", "", "", "", "", ""]);
      inputs.current[0]?.focus();
    } catch {
      setError("Failed to resend OTP. Try again.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 min-h-screen md:min-h-0">
      <div className="pt-[40px] flex flex-col gap-[35px] w-full md:w-[484px]">
        <div
          onClick={() => setShowScreen("forgot")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={back} alt="back" />
          <p className="text-[14px] md:text-[16px]">Back</p>
        </div>

        <div className="space-y-[7px]">
          <h4 className="text-[24px] md:text-[30px] tracking-tight font-bold">
            Enter 6-Digit Code
          </h4>
          <p className="text-[14px] md:text-[16px] tracking-tighter text-[#666666] font-medium">
            Enter the 6-digit code sent to your email.
          </p>
        </div>

        <form onSubmit={handleVerify} className="flex flex-col">
          <div className="flex gap-[6px] items-center">
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputs.current[i] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="border border-[#D9D9D9] rounded-[48px] w-[44px] h-[44px] md:w-[56px] md:h-[56px] text-center text-[18px] md:text-[20px] font-medium outline-none focus:border-[#77C2FF]"
              />
            ))}
          </div>
          {error && (
            <p className="text-red-500 text-[14px] font-medium mt-3">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#77C2FF] text-[14px] md:text-[16px] font-bold rounded-[48px] block w-full mt-6 py-3 px-[19px] cursor-pointer border-2 border-b-4 border-[#000000] disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
          <p className="text-[#666666] text-[14px] md:text-[16px] mt-6">
            Didn't get code?{" "}
            <span
              onClick={handleResend}
              className="text-[#77C2FF] font-bold cursor-pointer"
            >
              {resending ? "Resending..." : "Resend"}
            </span>
          </p>
        </form>
      </div>
      <img
        src={otpImg}
        alt="otp"
        className="hidden md:block flex-1 w-[747px] h-[724px] object-cover"
      />
    </div>
  );
};

export default Otp;
