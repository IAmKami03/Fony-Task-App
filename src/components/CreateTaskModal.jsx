import React from "react";
import close from "../assets/Close Circle.svg";
import add from "../assets/Gallery Add.svg";
import SuccessModal from "./SuccessModal";

const CreateTaskModal = ({ isOpen, onClose, onSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0   bg-[#000000B2] flex justify-center items-center z-50 ">
      <div className="bg-[#FBFBFB] p-4 rounded-[30px]  flex flex-col gap-[35px] w-[728px]  max-h-[90vh] overflow-y-auto scrollbar-hidden">
        <div className="flex items-start justify-between ">
          <div className="space-y-[7px] ">
            <h3 className="text-[30px] font-bold tracking-tight">
              Create New Task
            </h3>
            <p className="text-[16px] font-medium leading-[20px] tracking-tighter">
              Enter description about this task
            </p>
          </div>
          <button onClick={onClose} className="cursor-pointer">
            <img src={close} alt="" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-[11px]">
            <label
              htmlFor=""
              className="text-[16px] font-medium tracking-tighter leading-[142%] "
            >
              Task Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your task name"
              className="text-[14px] font-medium text-[#666666] outline-none tracking-tighter leading-[142%] border bg-[#FFFFFF] rounded-[48px] py-3 px-[19px] w-full"
            />
          </div>

          <div className="space-y-[11px]">
            <label
              htmlFor=""
              className="text-[16px] font-medium tracking-tighter leading-[142%] "
            >
              Task Description <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="What is this task about?"
              className="text-[14px] font-medium text-[#666666] outline-none tracking-tighter leading-[142%] border bg-[#FFFFFF] rounded-[48px] py-3 px-[19px] w-full"
            />
          </div>

          <div className="space-y-[11px]">
            <label
              htmlFor=""
              className="text-[16px] font-medium tracking-tighter leading-[142%] "
            >
              Select Task Priority <span className="text-red-500">*</span>
            </label>

            <div className="grid grid-cols-3 items-center gap-2.5">
              <button className="font-medium text-[14px] text-[#666666] tracking-tighter bg-[#FFFFFF] py-[18px] px-[19px] rounded-[48px] border border-[#D9D9D9] ">
                Low
              </button>
              <button className="font-medium text-[14px] text-[#666666] tracking-tighter bg-[#FFFFFF] py-[18px] px-[19px] rounded-[48px] border border-[#D9D9D9] ">
                Medium
              </button>
              <button className="font-medium text-[14px] text-[#666666] tracking-tighter bg-[#FFFFFF] py-[18px] px-[19px] rounded-[48px] border border-[#D9D9D9] ">
                High
              </button>
            </div>
          </div>

          <div className="space-y-[6px]">
            <label
              htmlFor=""
              className="text-[16px] font-medium tracking-tighter leading-[142%] "
            >
              Select image <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center gap-[14px]">
              <div
                className="bg-white border border-[#D9D9D9] rounded-[48px]
                h-[145px] w-[173px]
                flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
              >
                <img src={add} alt="" />
              </div>

              <p className="text-[14px]  tracking-tighter text-[#0C0C0C] font-medium ">
                <span className="font-semibold">Drag & Drop</span> your Image Or{" "}
                <br /> <span className="font-semibold">Browse file</span> on
                your computer
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onSuccess();
          }}
          className="text-[16px] tracking-tighter font-medium rounded-[22px] py-2.5 px-[19px] bg-[#DDDCD9] border-2 border-[#666666] cursor-pointer "
        >
          Create New Task
        </button>
      </div>
    </div>
  );
};

export default CreateTaskModal;
