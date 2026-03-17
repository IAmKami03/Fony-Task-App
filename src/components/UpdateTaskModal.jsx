import React from "react";
import close from "../assets/Close Circle.svg";
import SuccessModal from "./SuccessModal";

const UpdateTaskModal = ({ isOpen, onClose, onSuccess }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed inset-0   bg-[#000000B2] flex justify-center items-center z-50 ">
        <div className="bg-[#FBFBFB] p-4 rounded-[30px]  flex flex-col gap-[35px] w-[728px]  max-h-[90vh] overflow-y-auto scrollbar-hidden">
          <div className="flex items-start justify-between ">
            <div className="space-y-[7px] ">
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

            <div className="space-y-[11px]">
              <label
                htmlFor=""
                className="text-[16px] font-medium tracking-tighter leading-[142%] "
              >
                Select Task Priority <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-5 items-center gap-1">
                <div className="flex justify-center items-center bg-[#FFFFFF] leading-[20px] rounded-[48px] border border-[#D9D9D9] h-[50px]">
                  <p className="font-medium text-[20px] text-[#666666] tracking-tighter ">
                    0%
                  </p>
                </div>

                <div className="flex justify-center items-center bg-[#FFFFFF] leading-[20px] rounded-[48px] border border-[#D9D9D9] h-[50px]">
                  <p className="font-medium text-[20px] text-[#666666] tracking-tighter ">
                    25%
                  </p>
                </div>

                <div className="flex justify-center items-center bg-[#FFFFFF] leading-[20px] rounded-[48px] border border-[#D9D9D9] h-[50px]">
                  <p className="font-medium text-[20px] text-[#666666] tracking-tighter ">
                    50%
                  </p>
                </div>

                <div className="flex justify-center items-center bg-[#FFFFFF] leading-[20px] rounded-[48px] border border-[#D9D9D9] h-[50px]">
                  <p className="font-medium text-[20px] text-[#666666] tracking-tighter ">
                    75%
                  </p>
                </div>
                <div className="flex justify-center items-center bg-[#FFFFFF] leading-[20px] rounded-[48px] border border-[#D9D9D9] h-[50px]">
                  <p className="font-medium text-[20px] text-[#666666] tracking-tighter ">
                    100%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onSuccess();
            }}
            className="text-[16px] tracking-tighter font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF]  border border-b-4 border-[#000000] cursor-pointer"
          >
            Update Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
