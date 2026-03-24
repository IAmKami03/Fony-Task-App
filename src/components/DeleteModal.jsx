import React from "react";
import trash from "../assets/Trash Bin.svg";
import { MdCancel } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteModal = ({ isOpen, onClose, onConfirm, task, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="w-[90%] max-w-[500px] rounded-[30px] border bg-[#FBFBFB] flex flex-col mx-auto px-10 py-5">
        {/* Top */}
        <div className="flex justify-between mb-5">
          <img src={trash} alt="" />
          <MdCancel
            className="text-gray-500 w-6 h-6 cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Content */}
        <h1 className="text-left font-bold text-[24px] md:text-[30px] text-[#000000] mb-2">
          Are you sure you want to delete?
        </h1>

        <p className="text-left text-[14px] md:text-[16px] text-[#666666] font-medium mb-6">
          This action cannot be undone.{" "}
          <span className="font-semibold">{task?.title}</span> will be lost.
        </p>

        {/* Buttons */}
        <button
          onClick={onConfirm}
          disabled={loading}
          className="bg-[#FF3B3B] h-14 rounded-[48px] flex items-center justify-center gap-2.5 mb-3 shadow-[0_4px_6px_rgba(0,0,0,1)]"
        >
          <RiDeleteBinLine className="text-white" />
          <p className="text-white font-bold text-[16px]">
            {loading ? "Deleting..." : "Delete Task"}
          </p>
        </button>

        <button
          onClick={onClose}
          className="border border-[#D9D9D9] h-14 rounded-[48px] text-[#666666] font-medium"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
