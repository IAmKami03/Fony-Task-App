import { useState, useEffect } from "react";
import close from "../assets/Close Circle.svg";
import { updateTask } from "../api/taskServices";

const UpdateTaskModal = ({ isOpen, onClose, onSuccess, task }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "",
    progress: 0,
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Pre-fill form when task is passed in
  useEffect(() => {
    if (task) {
      setForm({
        title: task.title || "",
        description: task.description || "",
        priority: task.priority || "",
        progress: task.progress ?? 0,
      });
      setPreview(task.image || null);
      setImage(null);
    }
  }, [task]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handlePriority = (value) => {
    setForm({ ...form, priority: value });
    setError("");
  };

  const handleProgress = (value) => {
    setForm({ ...form, progress: value });
    setError("");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!form.title || !form.description || !form.priority) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("priority", form.priority);
      formData.append("progress", form.progress);
      if (image) formData.append("image", image);
      await updateTask(task._id, formData);
      onClose();
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update task.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#000000B2] flex justify-center items-center z-50">
      <div className="bg-[#FBFBFB] p-4 rounded-[30px] flex flex-col gap-[35px] w-[728px] max-h-[90vh] overflow-y-auto scrollbar-hidden">
        <div className="flex items-start justify-between">
          <div className="space-y-[7px]">
            <h3 className="text-[30px] font-bold tracking-tight">
              Update your Task
            </h3>
            <p className="text-[16px] font-medium leading-[20px] tracking-tighter">
              Update your task to keep you on the go.
            </p>
          </div>
          <button onClick={onClose} className="cursor-pointer">
            <img src={close} alt="" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-[11px]">
            <label className="text-[16px] font-medium tracking-tighter leading-[142%]">
              Task Name <span className="text-red-500">*</span>
            </label>
            <input
              name="title"
              type="text"
              placeholder="Enter your task name"
              value={form.title}
              onChange={handleChange}
              className="text-[14px] font-medium text-[#666666] outline-none tracking-tighter leading-[142%] border bg-[#FFFFFF] rounded-[48px] py-3 px-[19px] w-full"
            />
          </div>

          <div className="space-y-[11px]">
            <label className="text-[16px] font-medium tracking-tighter leading-[142%]">
              Task Description <span className="text-red-500">*</span>
            </label>
            <input
              name="description"
              type="text"
              placeholder="What is this task about?"
              value={form.description}
              onChange={handleChange}
              className="text-[14px] font-medium text-[#666666] outline-none tracking-tighter leading-[142%] border bg-[#FFFFFF] rounded-[48px] py-3 px-[19px] w-full"
            />
          </div>

          <div className="space-y-[11px]">
            <label className="text-[16px] font-medium tracking-tighter leading-[142%]">
              Select Task Priority <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-3 items-center gap-2.5">
              {["low", "medium", "high"].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePriority(p)}
                  className={`font-medium text-[14px] tracking-tighter py-[18px] px-[19px] rounded-[48px] border capitalize ${
                    form.priority === p
                      ? "bg-[#77C2FF] border-[#000000] text-[#000000]"
                      : "bg-[#FFFFFF] border-[#D9D9D9] text-[#666666]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-[11px]">
            <label className="text-[16px] font-medium tracking-tighter leading-[142%]">
              Task Progress
            </label>
            <div className="grid grid-cols-5 items-center gap-1">
              {[0, 25, 50, 75, 100].map((val) => (
                <div
                  key={val}
                  onClick={() => handleProgress(val)}
                  className={`flex justify-center items-center leading-[20px] rounded-[48px] border h-[50px] cursor-pointer ${
                    form.progress === val
                      ? "bg-[#77C2FF] border-[#000000]"
                      : "bg-[#FFFFFF] border-[#D9D9D9]"
                  }`}
                >
                  <p className="font-medium text-[20px] text-[#666666] tracking-tighter">
                    {val}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-[6px]">
            <label className="text-[16px] font-medium tracking-tighter leading-[142%]">
              Replace Image (optional)
            </label>
            <div className="flex items-center gap-[14px]">
              <label className="bg-white border border-[#D9D9D9] rounded-[48px] h-[145px] w-[173px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition overflow-hidden">
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover rounded-[48px]"
                  />
                ) : (
                  <p className="text-[#666666] text-[14px]">No image</p>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>
              <p className="text-[14px] tracking-tighter text-[#0C0C0C] font-medium">
                Click to replace the current image
              </p>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-[14px] font-medium">{error}</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="text-[16px] tracking-tighter font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF] border border-b-4 border-[#000000] cursor-pointer disabled:opacity-60"
        >
          {loading ? "Updating..." : "Update Task"}
        </button>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
