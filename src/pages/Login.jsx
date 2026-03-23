import { useState } from "react";
import eye from "../assets/eye.png";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { login } from "../api/authService";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { saveUser } = useAuth();

  const [form, setForm] = useState({ emailOrPhone: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await login(form);
      saveUser(data.user, data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`;
  };

  return (
    <>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[11px]">
          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="emailOrPhone"
              className="text-[#0C0C0C] font-medium text-[16px]"
            >
              Email or Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="emailOrPhone"
              name="emailOrPhone"
              type="text"
              placeholder="Enter email or phone number"
              required
              value={form.emailOrPhone}
              onChange={handleChange}
              className="outline-none text-[#666666] text-[14px] font-medium w-full py-3 px-[19px] gap-2.5 border border-[#D9D9D9] rounded-[48px]"
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label
              htmlFor="password"
              className="text-[#0C0C0C] font-medium text-[16px]"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="w-full flex py-3 px-[19px] gap-2.5 border border-[#D9D9D9] rounded-[48px]">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-[412px] outline-none text-[14px] font-medium text-[#666666]"
              />
              <img
                src={eye}
                alt="toggle password"
                className="cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <Link
              to="/forgot"
              className="text-[14px] font-medium text-[#0C0C0C]"
            >
              Forget password?
            </Link>
          </div>

          {error && (
            <p className="text-red-500 text-[14px] font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#77C2FF] text-[16px] font-bold rounded-[48px] block w-full mt-6 py-3 px-[19px] cursor-pointer border-2 border-b-4 border-[#000000] disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex flex-col gap-3 w-full">
          <div className="relative mt-[22px]">
            <hr className="relative text-[#D9D9D9]" />
            <p className="text-[12px] text-[#A6A9AC] rounded-[24px] bg-[#E4E9ED] w-[47px] h-[26px] flex justify-center py-1 px-[14px] absolute right-[230px] z-2 bottom-[-13px]">
              or
            </p>
          </div>
          <div
            onClick={handleGoogleLogin}
            className="w-full mt-3 py-3 px-[19px] flex gap-2.5 border border-[#D9D9D9] rounded-[48px] justify-center items-center cursor-pointer"
          >
            <img src={google} alt="" />
            <p className="text-[14px] font-medium text-[#0C0C0C]">
              Continue with Google
            </p>
          </div>
        </div>
      </div>

      <Link
        to="/register"
        className="text-center w-full text-[#666666] text-[16px]"
      >
        Don't have an account?{" "}
        <span className="text-[#77C2FF] font-bold">Sign Up</span>
      </Link>
    </>
  );
};

export default Login;
