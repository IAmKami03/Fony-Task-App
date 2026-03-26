import api from "./axios";

export const register = (data) => api.post("/api/auth/register", data);
export const login = (data) => api.post("/api/auth/login", data);
export const sendOTP = () => api.post("/api/auth/send-otp");
export const verifyOTP = (otp) => api.post("/api/auth/verify-otp", { otp });
export const resetPassword = (newPassword) =>
  api.post("/api/auth/reset-password", { newPassword });
export const updateProfile = (formData) =>
  api.patch("/api/auth/profile", formData);
