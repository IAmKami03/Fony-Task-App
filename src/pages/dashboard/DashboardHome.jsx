import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import logo from "../../assets/footer.png";
import progress from "../../assets/progress.png";
import down from "../../assets/Alt Arrow Down.png";
import editPen from "../../assets/edit-pen.svg";
import deleteBin from "../../assets/Trash Bin.svg";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import CreateTaskModal from "../../components/CreateTaskModal";
import Nav from "./Nav";
import UpdateTaskModal from "../../components/UpdateTaskModal";
import SuccessModal from "../../components/SuccessModal";
import {
  getAllTasks,
  getOngoingTasks,
  deleteTask,
} from "../../api/taskService";
import { useAuth } from "../../context/AuthContext";
import DeleteModal from "../../components/DeleteModal";

const DashboardHome = () => {
  const { user } = useAuth();
  const [modal, setModal] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [successModal, setSuccessModal] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [ongoingTasks, setOngoingTasks] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const fetchTasks = async () => {
    try {
      const [allRes, ongoingRes] = await Promise.all([
        getAllTasks(),
        getOngoingTasks(),
      ]);
      setTasks(allRes.data);
      setOngoingTasks(ongoingRes.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
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

  const filteredTasks =
    priorityFilter === "all"
      ? tasks
      : tasks.filter((t) => t.priority === priorityFilter);
  const totalPages = Math.ceil(filteredTasks.length / pageSize);
  const paginated = filteredTasks.slice((page - 1) * pageSize, page * pageSize);
  const completedCount = tasks.filter((t) => t.status === "completed").length;
  const ongoingCount = tasks.filter((t) => t.status === "ongoing").length;

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div>
      <Nav />
      <div className="px-6 sm:px-10 md:px-[100px] pt-6 md:pt-[30px] mb-10 space-y-10 md:space-y-[50px]">
        {/* Header + Stats */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h4 className="font-bold text-[22px] md:text-[30px] tracking-tighter">
              Welcome back! {user?.name}
            </h4>
            <button
              onClick={() => setModal("create")}
              className="cursor-pointer text-[14px] md:text-[16px] tracking-tighter font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF] border-b-4 border-[#000000] w-full sm:w-auto"
            >
              Create new task
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-[33px]">
            {[
              { label: "Total Task", value: tasks.length },
              { label: "Ongoing Task", value: ongoingCount },
              { label: "Completed Task", value: completedCount },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="border border-b-4 border-[#000000] bg-[#F6FBFF] flex items-center gap-3 py-2.5 px-[22px] rounded-[22px] h-[90px] md:h-[111px]"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-[36px] h-[36px] md:w-[40px] md:h-[40px]"
                />
                <div>
                  <p className="font-medium text-[14px] md:text-[16px] tracking-tighter">
                    {label}
                  </p>
                  <p className="font-bold text-[22px] md:text-[26px]">
                    {loading ? "..." : value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing tasks */}
        <div className="space-y-5">
          <h4 className="font-bold text-[22px] md:text-[30px] tracking-tighter">
            Tasks In Progress
          </h4>
          {loading ? (
            <p className="text-[#666666]">Loading...</p>
          ) : ongoingTasks.length === 0 ? (
            <div
              onClick={() => setModal("create")}
              className="border cursor-pointer border-[#999999] rounded-[22px] h-[240px] md:h-[301px] w-full sm:w-[391px]"
            >
              <div className="bg-[#F4F4F4] rounded-t-[22px] h-[120px] md:h-[159px] flex justify-center items-center">
                <img src={progress} alt="" />
              </div>
              <div className="py-5 md:py-[31px] pl-[22px] flex flex-col gap-4">
                <p className="text-[14px] md:text-[16px]">
                  No Task in Progress yet
                </p>
                <button className="text-[14px] md:text-[16px] tracking-tighter font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF] border-b-4 border-[#000000] w-fit">
                  Create new task
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2">
              {ongoingTasks.map((task) => (
                <div
                  key={task._id}
                  className="min-w-[280px] sm:min-w-[320px] snap-start border border-[#999999] rounded-[22px] overflow-hidden flex-shrink-0"
                >
                  {task.image && (
                    <img
                      src={task.image}
                      alt={task.title}
                      className="w-full h-[140px] md:h-[159px] object-cover"
                    />
                  )}

                  <div className="py-4 px-[22px] flex flex-col gap-3">
                    <p className="font-semibold text-[15px] md:text-[16px]">
                      {task.title}
                    </p>

                    <p className="text-[13px] md:text-[14px] text-[#666666] line-clamp-2">
                      {task.description}
                    </p>

                    <div className="w-full bg-[#E4E9ED] rounded-full h-2">
                      <div
                        className="bg-[#77C2FF] h-2 rounded-full"
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>

                    <p className="text-[12px] text-[#666666]">
                      {task.progress}% complete
                    </p>

                    <button
                      onClick={() => {
                        setSelectedTask(task);
                        setModal("update");
                      }}
                      className="text-[13px] md:text-[14px] font-medium rounded-[22px] py-2 px-[19px] bg-[#77C2FF] border-b-4 border-[#000000]"
                    >
                      Update
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* All tasks table */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <h4 className="font-bold text-[22px] md:text-[30px] tracking-tighter">
              All Created Tasks
            </h4>
            <div className="flex items-center gap-2.5">
              <p className="text-[14px] md:text-[16px]">Priority</p>
              <select
                value={priorityFilter}
                onChange={(e) => {
                  setPriorityFilter(e.target.value);
                  setPage(1);
                }}
                className="py-2.5 px-4 rounded-[22px] border border-[#F1F1F180] outline-none text-[14px] md:text-[16px] font-medium"
              >
                <option value="all">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          {/* Mobile task cards */}
          <div className="flex flex-col gap-3 md:hidden">
            {loading ? (
              <p className="text-[#666666] text-center py-10">
                Loading tasks...
              </p>
            ) : paginated.length === 0 ? (
              <div className="flex flex-col items-center py-10 gap-4">
                <p className="text-[#666666]">No tasks created yet</p>
                <button
                  onClick={() => setModal("create")}
                  className="text-[14px] font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF] border-b-4 border-[#000000]"
                >
                  Create new task
                </button>
              </div>
            ) : (
              paginated.map((task) => (
                <div
                  key={task._id}
                  className="border border-[#D9D9D9] rounded-[16px] p-4 flex flex-col gap-2"
                >
                  <div className="flex justify-between items-start">
                    <p className="font-semibold text-[15px] flex-1 pr-2">
                      {task.title}
                    </p>
                    <span
                      className={`text-[12px] font-medium capitalize px-3 py-1 rounded-full ${task.priority === "high" ? "bg-red-100 text-red-500" : task.priority === "medium" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"}`}
                    >
                      {task.priority}
                    </span>
                  </div>
                  <div className="flex justify-between text-[12px] text-[#666666]">
                    <span>{formatDate(task.createdAt)}</span>
                    <span
                      className={`font-medium capitalize ${task.status === "completed" ? "text-green-600" : "text-blue-500"}`}
                    >
                      {task.status}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-1">
                    <img
                      src={editPen}
                      alt=""
                      onClick={() => {
                        setSelectedTask(task);
                        setModal("update");
                      }}
                    />
                    <img
                      src={deleteBin}
                      alt=""
                      onClick={() => {
                        setSelectedTask(task);
                        setDeleteModal(true);
                      }}
                    />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Desktop task table */}
          <div className="hidden md:block rounded-[20px] border border-b-4 border-[#000000]">
            <div className="flex">
              <p className="text-[20px] font-semibold tracking-tighter w-[403px] py-2.5 px-[30px]">
                Name
              </p>
              <p className="text-[20px] font-semibold tracking-tighter w-[146px] py-2.5 px-[30px]">
                Priority
              </p>
              <p className="text-[20px] font-semibold tracking-tighter w-[236px] py-2.5 px-[30px]">
                Date
              </p>
              <p className="text-[20px] font-semibold tracking-tighter w-[237px] py-2.5 px-[30px]">
                Status
              </p>
              <p className="text-[20px] font-semibold tracking-tighter w-[236px] py-2.5 px-[30px]">
                More action
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-[200px]">
                <p className="text-[#666666]">Loading tasks...</p>
              </div>
            ) : paginated.length === 0 ? (
              <div className="border-t border-[#F1F1F1] flex justify-center items-center h-[300px]">
                <div className="flex flex-col gap-4 items-center">
                  <p>No Task Created yet</p>
                  <button
                    onClick={() => setModal("create")}
                    className="text-[16px] font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF] border-b-4 border-[#000000] cursor-pointer"
                  >
                    Create new task
                  </button>
                </div>
              </div>
            ) : (
              paginated.map((task) => (
                <div
                  key={task._id}
                  className="flex items-center border-t border-[#F1F1F1] hover:bg-[#F6FBFF]"
                >
                  <p className="text-[16px] font-medium tracking-tighter w-[403px] py-3 px-[30px] truncate">
                    {task.title}
                  </p>
                  <p
                    className={`text-[14px] font-medium w-[146px] py-3 px-[30px] capitalize ${task.priority === "high" ? "text-red-500" : task.priority === "medium" ? "text-yellow-500" : "text-green-500"}`}
                  >
                    {task.priority}
                  </p>
                  <p className="text-[14px] w-[236px] py-3 px-[30px] text-[#666666]">
                    {formatDate(task.createdAt)}
                  </p>
                  <p
                    className={`text-[14px] font-medium w-[237px] py-3 px-[30px] capitalize ${task.status === "completed" ? "text-green-600" : "text-blue-500"}`}
                  >
                    {task.status}
                  </p>
                  <div className="flex gap-2 w-[236px] py-3 px-[30px]">
                    <img
                      src={editPen}
                      alt=""
                      onClick={() => {
                        setSelectedTask(task);
                        setModal("update");
                      }}
                    />
                    <img
                      src={deleteBin}
                      alt=""
                      onClick={() => {
                        setSelectedTask(task);
                        setDeleteModal(true);
                      }}
                    />
                  </div>
                </div>
              ))
            )}

            <div className="flex justify-between items-center py-5 pr-[60px] pl-[30px]">
              <p className="text-[16px] md:text-[20px] font-medium tracking-tighter">
                Showing {paginated.length} of {filteredTasks.length}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={left}
                  alt=""
                  className={`cursor-pointer ${page === 1 ? "opacity-30" : ""}`}
                  onClick={() => page > 1 && setPage(page - 1)}
                />
                <p className="border-b border-[#000000] text-[20px] font-medium w-[32px] text-center">
                  {page}
                </p>
                <img
                  src={right}
                  alt=""
                  className={`cursor-pointer ${page >= totalPages ? "opacity-30" : ""}`}
                  onClick={() => page < totalPages && setPage(page + 1)}
                />
              </div>
            </div>
          </div>

          {/* Mobile pagination */}
          <div className="flex justify-between items-center md:hidden">
            <p className="text-[14px] font-medium text-[#666666]">
              Showing {paginated.length} of {filteredTasks.length}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={left}
                alt=""
                className={`cursor-pointer ${page === 1 ? "opacity-30" : ""}`}
                onClick={() => page > 1 && setPage(page - 1)}
              />
              <p className="border-b border-[#000000] text-[16px] font-medium w-[28px] text-center">
                {page}
              </p>
              <img
                src={right}
                alt=""
                className={`cursor-pointer ${page >= totalPages ? "opacity-30" : ""}`}
                onClick={() => page < totalPages && setPage(page + 1)}
              />
            </div>
          </div>
        </div>
      </div>

      <CreateTaskModal
        isOpen={modal === "create"}
        onClose={() => setModal(null)}
        onSuccess={() => {
          setSuccessModal("create");
          fetchTasks();
        }}
      />
      <UpdateTaskModal
        isOpen={modal === "update"}
        task={selectedTask}
        onClose={() => {
          setModal(null);
          setSelectedTask(null);
        }}
        onSuccess={() => {
          setSuccessModal("update");
          fetchTasks();
        }}
      />
      <DeleteModal
        isOpen={deleteModal}
        task={selectedTask}
        loading={deleting}
        onClose={() => {
          setDeleteModal(false);
          setSelectedTask(null);
        }}
        onConfirm={async () => {
          if (!selectedTask) return;

          try {
            setDeleting(true);
            await handleDelete(selectedTask._id);
          } finally {
            setDeleting(false);
            setDeleteModal(false);
            setSelectedTask(null);
          }
        }}
      />
      <SuccessModal
        isOpen={successModal === "create"}
        onClose={() => setSuccessModal(null)}
        title="Task Created Successfully"
        message="Now that you've successfully completed your task, please update your status to ensure your progress is accurately tracked."
      />
      <SuccessModal
        isOpen={successModal === "update"}
        onClose={() => setSuccessModal(null)}
        title="Task Updated Successfully"
        message="Your task has been updated. Keep tracking your progress to stay on top of your goals."
      />
    </div>
  );
};

export default DashboardHome;
