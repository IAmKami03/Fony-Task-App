import { useState } from "react";
import back from "../../assets/Arrow 31.png";
import imagee from "../../assets/image 500.png";
import eye from "../../assets/eye.png";
import { resetPassword } from "../../api/authService";
import { useNavigate } from "react-router-dom";

const NewPassword = ({ setShowScreen }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ newPassword: "", confirmPassword: "" });
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (form.newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await resetPassword(form.newPassword);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Reset failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-5">
      <div className="pt-[40px] flex flex-col gap-[35px] w-[484px]">
        <div
          onClick={() => setShowScreen("otp")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={back} alt="" />
          <p>Back</p>
        </div>

        <div className="space-y-[7px]">
          <h4 className="text-[30px] tracking-tight font-bold">
            Create your password
          </h4>
          <p className="text-[16px] tracking-tighter text-[#666666] font-medium">
            Create a new password by filling the form below.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[35px]">
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="newPassword"
              className="text-[#0C0C0C] font-medium text-[16px]"
            >
              Create Password <span className="text-red-500">*</span>
            </label>
            <div className="w-full flex py-3 px-[19px] gap-2.5 border border-[#D9D9D9] rounded-[48px]">
              <input
                id="newPassword"
                name="newPassword"
                type={showNew ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={form.newPassword}
                onChange={handleChange}
                className="w-[412px] text-[14px] outline-none font-medium text-[#666666]"
              />
              <img
                src={eye}
                alt="toggle"
                className="cursor-pointer"
                onClick={() => setShowNew(!showNew)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="confirmPassword"
              className="text-[#0C0C0C] font-medium text-[16px]"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="w-full flex py-3 px-[19px] gap-2.5 border border-[#D9D9D9] rounded-[48px]">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter password"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-[412px] text-[14px] outline-none font-medium text-[#666666]"
              />
              <img
                src={eye}
                alt="toggle"
                className="cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-[14px] font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#77C2FF] text-[16px] font-bold rounded-[48px] block w-full py-3 px-[19px] cursor-pointer border-2 border-b-4 border-[#000000] disabled:opacity-60"
          >
            {loading ? "Saving..." : "Confirm"}
          </button>
        </form>
      </div>
      <img src={imagee} alt="" className="flex-1 w-[747px] h-[724px]" />
    </div>
  );
};

export default NewPassword;
