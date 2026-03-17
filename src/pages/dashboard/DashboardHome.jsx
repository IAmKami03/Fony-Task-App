import React, { useState } from "react";
import logo from "../../assets/footer.png";
import progress from "../../assets/progress.png";
import down from "../../assets/Alt Arrow Down.png";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import CreateTaskModal from "../../components/CreateTaskModal";
import Nav from "./Nav";
import UpdateTaskModal from "../../components/UpdateTaskModal";
import SuccessModal from "../../components/SuccessModal";

const DashboardHome = () => {
  const [modal, setModal] = useState(null);
  const [successModal, setSuccessModal] = useState(null);

  return (
    <div>
      <Nav />
      <div className="px-[100px] pt-[30px] mb-10 space-y-[50px]">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-[30px] tracking-tighter ">
              Welcome back! Fawas
            </h4>
            <button
              onClick={() => setModal("create")}
              className="cursor-pointer text-[16px] tracking-tighter font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF] border-b-4 border-[#000000]"
            >
              Create new task
            </button>
          </div>

          <div className="flex gap-[33px] ">
            <div className="border border-b-4 border-[#000000] bg-[#F6FBFF] w-[391px] h-[111px] flex items-center gap-3 py-2.5 px-[22px] rounded-[22px] ">
              <img src={logo} alt="" className="w-[40px] h-[40px]" />
              <div>
                <p className="font-medium text-[16px] tracking-tighter ">
                  Total Task
                </p>
                <p className="font-bold text-[26px] ">0</p>
              </div>
            </div>

            <div className="border border-b-4 border-[#000000] bg-[#F6FBFF] w-[391px] h-[111px] flex items-center gap-3 py-2.5 px-[22px] rounded-[22px] ">
              <img src={logo} alt="" className="w-[40px] h-[40px]" />
              <div>
                <p className="font-medium text-[16px] tracking-tighter ">
                  Ongoing Task{" "}
                </p>
                <p className="font-bold text-[26px] ">0</p>
              </div>
            </div>

            <div className="border border-b-4 border-[#000000] bg-[#F6FBFF] w-[391px] h-[111px] flex items-center gap-3 py-2.5 px-[22px] rounded-[22px] ">
              <img src={logo} alt="" className="w-[40px] h-[40px]" />
              <div>
                <p className="font-medium text-[16px] tracking-tighter ">
                  Completed Task{" "}
                </p>
                <p className="font-bold text-[26px] ">0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h4 className="font-bold text-[30px] tracking-tighter ">
            Tasks In Progress
          </h4>

          <div
            onClick={() => setModal("create")}
            className="border cursor-pointer border-[#999999] rounded-[22px] h-[301px] w-[391px]"
          >
            <div className="bg-[#F4F4F4] rounded-[22px]  h-[159px] flex justify-center items-center ">
              <img src={progress} alt="" className=" " />
            </div>

            <div className="py-[31px] pl-[22px] w-[227px] flex flex-col gap-[19px] ">
              <p>No Task in Progress yet</p>
              <button className=" text-[16px] tracking-tighter font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF]  border-b-4 border-[#000000]">
                Create new task
              </button>{" "}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-[30px] tracking-tighter ">
              All Created Tasks
            </h4>
            <div className="flex items-center gap-2.5">
              <p>Priority</p>
              <div className="flex items-center gap-2.5 py-2.5 px-4 rounded-[22px] border border-[#F1F1F180] w-[86px]">
                <p className="text-[16px] tracking-tighter  font-medium">All</p>
                <img src={down} alt="" />
              </div>
            </div>
          </div>

          <div className=" rounded-[20px] border border-b-4  border-[#000000]">
            <div className=" flex ">
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

            <div className="border border-[#000000] rounded-[10px] flex justify-center items-center h-[700px]">
              <div className="py-[31px] pl-[22px] w-[227px] flex flex-col gap-[19px] items-center">
                <p>No Task Created yet</p>
                <button
                  onClick={() => setModal("update")}
                  className="text-[16px] tracking-tighter font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF] border-b-4 border-[#000000] cursor-pointer"
                >
                  Create new task
                </button>{" "}
              </div>
            </div>

            <div className="flex justify-between items-center py-5 pr-[60px] pl-[30px]">
              <p className="text-[20px] font-medium tracking-tighter">
                Showing of 0
              </p>

              <div className="flex items-center gap-3">
                <img src={left} alt="" />
                <p className="border-b border-[#000000] text-[20px] font-medium w-[32px] text-center ">
                  1
                </p>
                <img src={right} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateTaskModal
        isOpen={modal === "create"}
        onClose={() => setModal(null)}
        onSuccess={() => setSuccessModal("create")}
      />

      <UpdateTaskModal
        isOpen={modal === "update"}
        onClose={() => setModal(null)}
        onSuccess={() => setSuccessModal("update")}
      />

      <SuccessModal
        isOpen={successModal === "create"}
        onClose={() => setSuccessModal(null)}
        title="Task Created Successfully"
        message="Now that you’ve successfully completed your task, please update your status to ensure your progress is accurately tracked."
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
