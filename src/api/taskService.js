import api from "./axios";

export const getAllTasks = () => api.get("/api/tasks");
export const getOngoingTasks = () => api.get("/api/tasks/ongoing");
export const getCompletedTasks = () => api.get("/api/tasks/completed");
export const getTaskById = (id) => api.get(`/api/tasks/${id}`);
export const createTask = (formData) => api.post("/api/tasks", formData);
export const updateTask = (id, formData) =>
  api.patch(`/api/tasks/${id}`, formData);
export const deleteTask = (id) => api.delete(`/api/tasks/${id}`);
