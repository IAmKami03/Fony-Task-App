import React, { useState } from "react";
import del from "../assets/Trash Bin.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import ViewModal from "../components/ViewModal";
import Nav from "./dashboard/Nav";

const CompletedPage = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const priorityClasses = {
    High: "border-[1px] border-[#FF0000] text-[#FF0000]",
    Medium: "border-[1px] border-[#FF0000] bg-[#FFE7E0] text-[#FF0000]",
    Low: "border-[1px] border-[#448AFF] bg-[#EEF4FF] text-[#448AFF]",
  };

  const allTasks = [
    {
      id: 1,
      name: "Create my portfolio responsiveness",
      priority: "High",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 2,
      name: "Create my portfolio responsiveness",
      priority: "Medium",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 3,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 4,
      name: "Create my portfolio responsiveness",
      priority: "Medium",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 5,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 6,
      name: "Create my portfolio responsiveness",
      priority: "High",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 7,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 8,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 9,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 10,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 11,
      name: "Create my portfolio responsiveness",
      priority: "High",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 12,
      name: "Create my portfolio responsiveness",
      priority: "Medium",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 13,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 14,
      name: "Create my portfolio responsiveness",
      priority: "Medium",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 15,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 16,
      name: "Create my portfolio responsiveness",
      priority: "High",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 17,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 18,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 19,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
    {
      id: 20,
      name: "Create my portfolio responsiveness",
      priority: "Low",
      date: "19 December, 2025",
      progress: 100,
      status: "Completed",
    },
  ];

  return (
    <div>
      <Nav />

      <div className="space-y-6 h-400 w-310 mt-10 mx-auto">
        <div className="flex justify-between">
          <h2 className="text-[30px]  font-extrabold leading-[100%]">
            Recent Tasks
          </h2>
          <div className="flex gap-2.5 h-11 justify-center items-center">
            <p className="font-medium leading-5 text-[16px] text-black ">
              Priority
            </p>
            <div className="border flex justify-center items-center w-21.5 h-11 rounded-[22px] gap-1">
              <p className="text-[16px] font-medium">All</p>
              <RiArrowDropDownLine className="w-8 h-8 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="border-y border-x rounded-[20px]">
          <div className="flex justify-between border-b font-bold">
            <p className="py-4 ml-15">Name</p>
            <div className="flex justify-between gap-14 ml-32">
              <p className="py-4">Priority</p>
              <p className="py-4 ml-10">Date</p>
            </div>
            <p className="py-4">Status</p>
            <p className="py-4 mr-28">More Action</p>
          </div>

          {allTasks.map((task, index) => (
            <div
              key={index}
              className={`flex h-17.5 justify-between items-center border-b ${
                index % 2 === 0 ? "" : "bg-[#F6FBFF]"
              }`}
            >
              <p className="text-[20px] py-5.25 px-7.5 w-97.5 font-semibold font-[Montserrat] tracking-[-3%] leading-5">
                {task.name}
              </p>
              <div className="py-5.25 px-7.5 flex justify-center w-36.5">
                <p
                  className={`leading-5 w-21.5 flex items-center justify-center font-md rounded-[20px] px-2.5 pb-1 text-center ${priorityClasses[task.priority]}`}
                >
                  {task.priority}
                </p>
              </div>
              <p className="text-[20px] py-5.25 px-7.5 w-59.25 font-semibold font-[Montserrat] tracking-[-3%] leading-5">
                {task.date}
              </p>
              <div className="py-5.25 px-7.5 w-59.25">
                <div className="flex gap-1 w-44.25 h-7">
                  <div className="w-33.5 h-6.5 border flex items-center border-solid rounded-[170px]">
                    <div
                      className="bg-[#77C2FF] h-6 rounded-[170px]"
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                  <p className="font-md text-[20px] leading-5">
                    {task.progress}%
                  </p>
                </div>
              </div>
              <div className="flex gap-5 py-5.25 px-7.5 w-59.25">
                <IoEye
                  className="w-6 h-6 text-gray-700"
                  onClick={() => setSelectedTask(task)}
                />
                <img src={del} alt="" className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedTask && (
          <ViewModal
            task={selectedTask}
            onClose={() => setSelectedTask(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CompletedPage;
