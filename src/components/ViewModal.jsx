import { MdCancel } from "react-icons/md";
import { TiInputChecked } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const priorityStyles = {
  high: "border border-red-500 text-red-500",
  medium: "border border-orange-500 bg-orange-100 text-orange-500",
  low: "border border-blue-500 bg-blue-100 text-blue-500",
};

const ViewModal = ({ task, onClose }) => {
  const navigate = useNavigate();

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
      <div className="bg-white p-6 md:p-8 rounded-[20px] w-full max-w-[500px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[24px] md:text-[30px] font-bold tracking-tight">
            Task Details
          </h1>
          <MdCancel
            onClick={onClose}
            className="text-[#FF3B3B] w-6 h-6 cursor-pointer flex-shrink-0"
          />
        </div>

        {/* Task image */}
        {task.image && (
          <img
            src={task.image}
            alt={task.title}
            className="w-full h-[180px] object-cover rounded-[12px] mb-4"
          />
        )}

        {/* Details */}
        <div className="border p-5 rounded-[16px] space-y-3 text-left">
          <div>
            <p className="text-[13px] text-[#666666] font-medium">Task Name</p>
            <p className="font-semibold text-[16px] tracking-tight">
              {task.title}
            </p>
          </div>

          <div>
            <p className="text-[13px] text-[#666666] font-medium">
              Description
            </p>
            <p className="text-[14px] tracking-tight text-[#0C0C0C]">
              {task.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-[13px] text-[#666666] font-medium">Priority:</p>
            <span
              className={`px-3 py-1 rounded-[20px] text-center font-medium text-[13px] capitalize ${priorityStyles[task.priority] || ""}`}
            >
              {task.priority}
            </span>
          </div>

          <div>
            <p className="text-[13px] text-[#666666] font-medium">
              Date Created
            </p>
            <p className="font-medium text-[14px]">
              {formatDate(task.createdAt)}
            </p>
          </div>

          <div>
            <p className="text-[13px] text-[#666666] font-medium mb-1">
              Progress
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-[#E4E9ED] rounded-full h-2">
                <div
                  className="bg-[#77C2FF] h-2 rounded-full"
                  style={{ width: `${task.progress}%` }}
                />
              </div>
              <p className="text-[13px] font-medium">{task.progress}%</p>
            </div>
          </div>

          <div>
            <p className="text-[13px] text-[#666666] font-medium">Status</p>
            <p className="font-medium text-[14px] capitalize text-green-600">
              {task.status}
            </p>
          </div>
        </div>

        {/* Success indicator */}
        <div className="flex gap-2 items-center justify-center mt-4">
          <TiInputChecked className="text-green-600 w-6 h-6" />
          <p className="text-green-600 font-semibold text-[14px]">
            Task completed successfully
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => {
            onClose();
            navigate("/dashboard");
          }}
          className="w-full bg-[#77C2FF] text-[16px] font-bold rounded-[48px] py-3 px-[19px] mt-5 border-2 border-b-4 border-[#000000] cursor-pointer"
        >
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default ViewModal;
