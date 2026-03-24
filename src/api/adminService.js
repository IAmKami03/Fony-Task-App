import api from "./axios";

export const getDashboard = () => api.get("/api/admin/dashboard");
export const getUsers = (params) => api.get("/api/admin/users", { params });
