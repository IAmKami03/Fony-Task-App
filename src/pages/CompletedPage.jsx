import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ViewModal from "../components/ViewModal";
import Nav from "./dashboard/Nav";
import { getCompletedTasks, deleteTask } from "../api/taskService";

const PAGE_SIZE = 10;

const priorityStyles = {
  high: "border border-red-500 text-red-500",
  medium: "border border-orange-400 bg-orange-100 text-orange-500",
  low: "border border-blue-500 bg-blue-100 text-blue-500",
};

const CompletedPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const [page, setPage] = useState(1);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const { data } = await getCompletedTasks();
      setTasks(data);
    } catch (err) {
      console.error("Failed to fetch completed tasks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const filtered =
    priorityFilter === "all"
      ? tasks
      : tasks.filter((t) => t.priority === priorityFilter);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <Nav />

      <div className="px-6 sm:px-10 md:px-[100px] mt-10 mb-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-[22px] md:text-[30px] font-extrabold leading-[100%] tracking-tight">
            Completed Tasks
          </h2>

          {/* Priority filter */}
          <div className="flex gap-2.5 items-center relative">
            <p className="font-medium text-[14px] md:text-[16px] text-black">
              Priority
            </p>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="border flex justify-center items-center px-4 h-11 rounded-[22px] gap-1 min-w-[100px]"
            >
              <p className="text-[14px] md:text-[16px] font-medium capitalize">
                {priorityFilter}
              </p>
              <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
            </button>
            {filterOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-[#D9D9D9] rounded-[16px] shadow-md z-10 overflow-hidden">
                {["all", "low", "medium", "high"].map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      setPriorityFilter(p);
                      setFilterOpen(false);
                      setPage(1);
                    }}
                    className={`block w-full text-left px-4 py-2 text-[14px] capitalize hover:bg-[#F6FBFF] ${priorityFilter === p ? "font-bold" : ""}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block border rounded-[20px] border-b-4 border-[#000000] overflow-hidden">
          {/* Table header */}
          <div className="flex bg-[#FBFBFB] font-bold border-b">
            <p className="py-4 px-[30px] w-[403px]">Name</p>
            <p className="py-4 px-[30px] w-[146px]">Priority</p>
            <p className="py-4 px-[30px] w-[236px]">Date</p>
            <p className="py-4 px-[30px] w-[237px]">Progress</p>
            <p className="py-4 px-[30px] w-[180px]">More Action</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-[200px]">
              <p className="text-[#666666]">Loading completed tasks...</p>
            </div>
          ) : paginated.length === 0 ? (
            <div className="flex justify-center items-center h-[200px]">
              <p className="text-[#666666]">No completed tasks yet.</p>
            </div>
          ) : (
            paginated.map((task, index) => (
              <div
                key={task._id}
                className={`flex items-center border-b last:border-b-0 ${index % 2 !== 0 ? "bg-[#F6FBFF]" : ""}`}
              >
                <p className="text-[16px] py-5 px-[30px] w-[403px] font-semibold tracking-tight leading-5 truncate">
                  {task.title}
                </p>
                <div className="py-5 px-[30px] w-[146px] flex justify-start">
                  <span
                    className={`text-[13px] font-medium rounded-[20px] px-3 py-1 capitalize ${priorityStyles[task.priority] || ""}`}
                  >
                    {task.priority}
                  </span>
                </div>
                <p className="text-[14px] py-5 px-[30px] w-[236px] font-medium tracking-tight leading-5 text-[#666666]">
                  {formatDate(task.createdAt)}
                </p>
                <div className="py-5 px-[30px] w-[237px]">
                  <div className="flex items-center gap-2">
                    <div className="w-[120px] bg-[#E4E9ED] rounded-full h-2">
                      <div
                        className="bg-[#77C2FF] h-2 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>
                    <p className="text-[13px] font-medium">{task.progress}%</p>
                  </div>
                </div>
                <div className="flex gap-5 py-5 px-[30px] w-[180px] items-center">
                  <IoEye
                    className="w-6 h-6 text-gray-700 cursor-pointer hover:text-[#77C2FF] transition"
                    onClick={() => setSelectedTask(task)}
                  />
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="text-[#FF3B3B] text-[13px] font-medium hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Pagination */}
          <div className="flex justify-between items-center px-[30px] py-4 border-t border-[#F1F1F1]">
            <p className="text-[14px] md:text-[16px] font-medium text-[#666666]">
              Showing {paginated.length} of {filtered.length}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => page > 1 && setPage(page - 1)}
                className={`border rounded-[20px] p-1 ${page === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#F6FBFF]"}`}
              >
                <MdOutlineKeyboardArrowLeft className="w-[24px] h-[24px]" />
              </button>
              {Array.from(
                { length: Math.min(totalPages, 4) },
                (_, i) => i + 1,
              ).map((num) => (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={`w-8 h-8 text-[14px] font-medium rounded-full ${page === num ? "border-b-2 border-[#000000] font-bold" : "hover:bg-[#F6FBFF]"}`}
                >
                  {num}
                </button>
              ))}
              <button
                onClick={() => page < totalPages && setPage(page + 1)}
                className={`border rounded-[20px] p-1 ${page >= totalPages ? "opacity-30 cursor-not-allowed" : "hover:bg-[#F6FBFF]"}`}
              >
                <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px]" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile cards */}
        <div className="flex flex-col gap-3 md:hidden">
          {loading ? (
            <p className="text-[#666666] text-center py-10">Loading...</p>
          ) : paginated.length === 0 ? (
            <p className="text-[#666666] text-center py-10">
              No completed tasks yet.
            </p>
          ) : (
            paginated.map((task) => (
              <div
                key={task._id}
                className="border border-[#D9D9D9] rounded-[16px] p-4 flex flex-col gap-3"
              >
                <div className="flex justify-between items-start">
                  <p className="font-semibold text-[15px] flex-1 pr-2">
                    {task.title}
                  </p>
                  <span
                    className={`text-[12px] font-medium px-3 py-1 rounded-full capitalize ${priorityStyles[task.priority] || ""}`}
                  >
                    {task.priority}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-[#E4E9ED] rounded-full h-2">
                    <div
                      className="bg-[#77C2FF] h-2 rounded-full"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                  <p className="text-[12px] font-medium">{task.progress}%</p>
                </div>
                <div className="flex justify-between items-center text-[12px] text-[#666666]">
                  <span>{formatDate(task.createdAt)}</span>
                  <div className="flex gap-4 items-center">
                    <IoEye
                      className="w-5 h-5 text-gray-700 cursor-pointer"
                      onClick={() => setSelectedTask(task)}
                    />
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="text-[#FF3B3B] font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Mobile pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center pt-2">
              <p className="text-[13px] text-[#666666]">
                Showing {paginated.length} of {filtered.length}
              </p>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => page > 1 && setPage(page - 1)}
                  className={`border rounded-[20px] p-1 ${page === 1 ? "opacity-30" : ""}`}
                >
                  <MdOutlineKeyboardArrowLeft className="w-5 h-5" />
                </button>
                <span className="text-[14px] font-medium">{page}</span>
                <button
                  onClick={() => page < totalPages && setPage(page + 1)}
                  className={`border rounded-[20px] p-1 ${page >= totalPages ? "opacity-30" : ""}`}
                >
                  <MdOutlineKeyboardArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* View Modal */}
      {selectedTask && (
        <ViewModal task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  );
};

export default CompletedPage;
