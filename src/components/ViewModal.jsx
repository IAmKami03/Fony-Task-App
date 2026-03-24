import React from "react";
import { MdCancel } from "react-icons/md";
import { TiInputChecked } from "react-icons/ti";

const ViewModal = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl w-125">
        <div className="flex justify-between text-center">
          <h1 className="text-[30px] font-bold font-[Caveat] mb-6">
            Task Details
          </h1>
          <MdCancel onClick={onClose} className="text-[#FF3B3B] w-6 h-6" />
        </div>
        <div className="border p-6 rounded-xl space-y-3 text-left font-[Montserrat]">
          <p>
            <strong>Name:</strong> {task.name}
          </p>
          <div className="flex items-center gap-2">
            <p className="font-bold">Priority:</p>
            <span
              className={`px-3 py-1 rounded-[20px] text-center font-medium
                ${task.priority === "High" ? "border border-red-500 text-red-500" : ""}
                ${task.priority === "Medium" ? "border border-orange-500 bg-orange-100 text-orange-500" : ""}
                ${task.priority === "Low" ? "border border-blue-500 bg-blue-100 text-blue-500" : ""}
              `}
            >
              {task.priority}
            </span>
          </div>

          <p>
            <strong>Date:</strong> {task.date}
          </p>
          <p>
            <strong>Status:</strong> {task.status}
          </p>
        </div>

        <div className="flex gap-2 items-center justify-center mt-4">
          <TiInputChecked className=" text-green-600 w-6 h-6 " />
          <p className=" text-green-600 font-semibold">
            Task completed successfully
          </p>
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mt-5">
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default ViewModal;
