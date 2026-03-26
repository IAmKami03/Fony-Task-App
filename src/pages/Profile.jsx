import { useState, useRef } from "react";
import Nav from "./dashboard/Nav";
import profDefault from "../assets/prof.png";
import camera from "../assets/camera-add-02.png";
import forgot from "../assets/security-lock.png";
import logoutImg from "../assets/Logout 2.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { updateProfile } from "../api/authService";

const Profile = () => {
  const { user, saveUser, logout: logoutUser } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Split name for display
  const nameParts = user?.name?.split(" ") || [];
  const [firstName, setFirstName] = useState(nameParts[0] || "");
  const [lastName, setLastName] = useState(nameParts.slice(1).join(" ") || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || "");
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(user?.avatar || null);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setError("");
    setSuccess("");
  };

  const handleCancel = () => {
    // Reset to original values
    const parts = user?.name?.split(" ") || [];
    setFirstName(parts[0] || "");
    setLastName(parts.slice(1).join(" ") || "");
    setPhoneNumber(user?.phoneNumber || "");
    setAvatarFile(null);
    setAvatarPreview(user?.avatar || null);
    setEditMode(false);
    setError("");
  };

  const handleSave = async () => {
    if (!firstName.trim()) {
      setError("First name is required.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const formData = new FormData();
      formData.append("name", `${firstName.trim()} ${lastName.trim()}`.trim());
      if (phoneNumber.trim())
        formData.append("phoneNumber", phoneNumber.trim());
      if (avatarFile) formData.append("image", avatarFile);

      const { data } = await updateProfile(formData);

      // Update context with new user data
      const token = localStorage.getItem("token");
      saveUser(data.user, token);

      setEditMode(false);
      setAvatarFile(null);
      setSuccess("Profile updated successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const avatarSrc = avatarPreview || profDefault;

  return (
    <div>
      <Nav />
      <div className="w-full max-w-[736px] bg-white py-6 md:py-[22px] px-4 md:px-6 rounded-[18px] mx-auto mt-6 mb-10">
        <div className="gap-6 md:gap-[35px] flex flex-col">
          <h3 className="text-center font-bold text-[22px] md:text-[30px] leading-[100%] tracking-tight">
            Personal Information
          </h3>

          {/* Avatar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative">
              <img
                src={avatarSrc}
                alt="Profile"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#D9D9D9]"
              />
              {editMode && (
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 bg-[#77C2FF] rounded-full flex items-center justify-center cursor-pointer border border-[#000000]"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <span className="text-[10px] font-bold">+</span>
                </div>
              )}
            </div>

            {editMode ? (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 cursor-pointer bg-[#F6FBFF] py-2 px-4 rounded-[48px] border border-[#D9D9D9] text-[14px] md:text-[16px]"
              >
                <img src={camera} alt="" />
                <span>
                  {avatarFile ? "Change Image" : "Upload Profile Image"}
                </span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <img src={camera} alt="" />
                <p className="text-[14px] md:text-[16px] text-[#666666]">
                  Profile Image
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>

          {/* Avatar filename preview */}
          {editMode && avatarFile && (
            <p className="text-[13px] text-[#666666] text-center -mt-4">
              Selected: {avatarFile.name}
            </p>
          )}

          {/* Fields */}
          <div className="flex flex-col gap-4 md:gap-[15px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-[11px]">
              <div className="flex flex-col gap-[6px]">
                <label className="font-medium text-[14px] md:text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  readOnly={!editMode}
                  className={`py-3 md:py-[18px] px-[19px] border text-[13px] md:text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px] transition ${
                    editMode
                      ? "bg-white border-[#77C2FF] outline-none"
                      : "bg-[#FBFBFB] border-[#D9D9D9]"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="font-medium text-[14px] md:text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  readOnly={!editMode}
                  className={`py-3 md:py-[18px] px-[19px] border text-[13px] md:text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px] transition ${
                    editMode
                      ? "bg-white border-[#77C2FF] outline-none"
                      : "bg-[#FBFBFB] border-[#D9D9D9]"
                  }`}
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
                  className="py-3 md:py-[18px] px-[19px] bg-[#FBFBFB] border border-[#D9D9D9] text-[13px] md:text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px] text-[#999999]"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="font-medium text-[14px] md:text-[16px] leading-[142%] tracking-tighter text-[#0C0C0C]">
                  Phone number
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  readOnly={!editMode}
                  className={`py-3 md:py-[18px] px-[19px] border text-[13px] md:text-[14px] font-medium tracking-tighter leading-[142%] rounded-[48px] transition ${
                    editMode
                      ? "bg-white border-[#77C2FF] outline-none"
                      : "bg-[#FBFBFB] border-[#D9D9D9]"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Feedback messages */}
          {error && (
            <p className="text-red-500 text-[14px] font-medium text-center">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-600 text-[14px] font-medium text-center">
              {success}
            </p>
          )}

          {/* Action buttons */}
          <div className="space-y-4 md:space-y-[30px]">
            {editMode ? (
              <div className="flex gap-3">
                <button
                  onClick={handleCancel}
                  className="flex-1 bg-[#FBFBFB] py-3 px-[19px] rounded-[48px] border-2 border-[#000000] border-b-4 text-[14px] md:text-[16px] font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex-1 bg-[#77C2FF] py-3 px-[19px] rounded-[48px] border-2 border-[#000000] border-b-4 text-[14px] md:text-[16px] font-bold disabled:opacity-60"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-[#FBFBFB] py-3 px-[19px] rounded-[48px] border-2 border-[#000000] border-b-4 w-full text-[14px] md:text-[16px] font-medium"
              >
                Edit Profile information
              </button>
            )}

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
                <img src={logoutImg} alt="" />
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
