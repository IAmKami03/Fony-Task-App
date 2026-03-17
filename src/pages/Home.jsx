import React from "react";
import Navbar from "../components/Navbar";
import hero from "../assets/Designer-Color-Palette-2--Streamline-Manila.png";
import create from "../assets/Modular-Coding-Of-Application--Streamline-Manila.png";
import update from "../assets/Investing-3--Streamline-Manila.png";
import complete from "../assets/Virtual-Reality--Streamline-Manila.png";
import mail from "../assets/Digital-Ads-1--Streamline-Manila.png";
import image1 from "../assets/Ellipse 1.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="px-[100px] ">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[33px] w-[694px]">
            <h1
              className="text-[70px] font-black leading-[1.1] tracking-tight
"
            >
              Organize What Matters, Move At Your Own Pace
            </h1>
            <div className="flex items-center gap-4 ">
              <Link to="/login" className="bg-[#77C2FF] border-b-4 py-3 px-[49px] border-2 border-[#000000] rounded-[48px] text-[16px] font-bold">
                Get Started
              </Link>
              <Link to="/register" className="bg-[#FFFFFF] border-b-4 py-3 px-[49px] border-2 border-[#000000] rounded-[40.5px] text-[16px] font-bold">
                Sign Up
              </Link>
            </div>
          </div>
          <img src={hero} alt="" className="" />
        </div>
        {/* ========================== */}

        <div className="my-[80px]">
          <h2 className="text-[60px] font-black mx-auto text-center leading-[1.2] w-[646px] mb-[50px]">
            A Simple Way To Manage Your Tasks
          </h2>

          <div className="space-y-[50px]">
            <div className="grid grid-cols-2 items-center border-t-1 border-b-3 border-[#000000] rounded-full">
              <div className="rounded-l-full bg-[#F6FBFF] ">
                <img src={create} alt="" className=" px-[122px] " />
              </div>
              <div className="flex flex-col gap-3 ml-[70px] w-[393px] ">
                <h3 className="text-[40px] font-black">Create Your Tasks</h3>
                <p className="text-[20px] tracking-tight leading-[130%]">
                  Add What Matters, When It Matters Big Goals Or Small Wins, All
                  In One Place.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 items-center border-t-1 border-b-3 border-[#000000] rounded-full">
              <div className="flex flex-col gap-3 ml-[70px] w-[393px] ">
                <h3 className="text-[40px] font-black">Update As You Go</h3>
                <p className="text-[20px] tracking-tight leading-[130%]">
                  Edit, Prioritize, And Track Progress Easily As Your Day
                  Evolves.
                </p>
              </div>

              <div className="rounded-r-full bg-[#F6FBFF] ">
                <img src={update} alt="" className=" px-[122px] " />
              </div>
            </div>


            <div className="grid grid-cols-2 items-center border-t-1 border-b-3 border-[#000000] rounded-full">
              <div className="rounded-l-full bg-[#F6FBFF] ">
                <img src={complete} alt="" className=" px-[122px] " />
              </div>
              <div className="flex flex-col gap-3 ml-[70px] w-[393px] ">
                <h3 className="text-[40px] font-black leading-[91%]">
                  Get Things Done, Better
                </h3>
                <p className="text-[20px] tracking-tight leading-[130%]">
                  Stay Focused, Feel Accomplished, And Enjoy The Momentum Of
                  Checking Things Off.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div>
          <h3 className="text-[60px] font-black mx-auto text-center leading-[1.2] w-[818px] mb-[50px]">
            Loved by People Who Get Things Done
          </h3>

          <div className="grid grid-cols-3  gap-5">
            <div className="bg-[#F6FBFF] h-[290px] flex items-center justify-center border-t-1 border-b-3 border-[#000000] rounded-[210px]">
              <div className="flex flex-col gap-3  text-center w-[322px] items-center ">
                <img src={image1} alt="" />
                <h5 className="text-[30px] font-black tracking-tight">
                  OlaChi Maryam
                </h5>
                <p className="text-[20px] tracking-[-0.03em] leading-[130%] capitalize">
                  This app completely changed how I plan my day. Creating tasks
                  is simple, updating them feels effortless, and I actually
                  finish what I start now.
                </p>
              </div>
            </div>

            <div className=" border-t-1 border-b-3 h-[290px] border-[#000000] rounded-[210px] flex items-center justify-center">
              <div className="flex flex-col text-center gap-3 w-[322px] ">
                <h5 className="text-[80px] font-black tracking-tight leading-[110%]">
                  32%
                </h5>
                <p className="text-[20px] tracking-tight leading-[130%] capitalize">
                  increase in task completion rate
                </p>
              </div>
            </div>

            <div className="bg-[#F6FBFF]  border-t-1 border-b-3 h-[290px] flex items-center justify-center border-[#000000] rounded-[210px]">
              <div className="flex flex-col gap-3  text-center w-[322px] items-center ">
                <img src={image1} alt="" />
                <h5 className="text-[30px] font-black tracking-tight">
                  Joseph Ibrahim
                </h5>
                <p className="text-[20px] tracking-[-0.03em]  leading-[130%] capitalize">
                  I love how organized everything feels without being
                  overwhelming. It fits perfectly into my daily routine and
                  keeps me focused.
                </p>
              </div>
            </div>

            <div className=" border-t-1 border-b-3 h-[290px] border-[#000000] rounded-[210px] flex items-center justify-center">
              <div className="flex flex-col text-center gap-3 w-[322px] ">
                <h5 className="text-[80px] font-black tracking-tight leading-[110%]">
                  3X
                </h5>
                <p className="text-[20px] tracking-tight leading-[130%] capitalize">
                  better daily focus and consistency
                </p>
              </div>
            </div>

            <div className="bg-[#F6FBFF] flex items-center justify-center border-t-1 border-b-3 border-[#000000] h-[290px] rounded-[210px]">
              <div className="flex flex-col gap-3 text-center w-[322px] items-center">
                <img src={image1} alt="" />
                <h5 className="text-[30px] font-black tracking-tight">
                  Wasiu David
                </h5>
                <p className="text-[20px] tracking-[-0.03em]  leading-[130%]">
                  Managing my tasks used to be stressful, but this makes it feel
                  calm and intentional. I get more done with less pressure.
                </p>
              </div>
            </div>

            <div className=" border-t-1 border-b-3 h-[290px] border-[#000000] rounded-[210px] flex items-center justify-center">
              <div className="flex flex-col text-center gap-3 w-[322px] ">
                <h5 className="text-[80px] font-black tracking-tight leading-[110%]">
                  2.5 hours
                </h5>
                <p className="text-[20px] tracking-tight leading-[130%] capitalize">
                  saved per week on planning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="my-[80px] grid grid-cols-2 items-center border-t-1 border-b-3 border-[#000000] rounded-full">
          <div className="flex flex-col gap-3 ml-[70px] w-[469px] ">
            <h3 className="text-[40px] font-black">Stay in the loop</h3>
            <p className="text-[20px] tracking-tight leading-[130%]">
              Get simple, practical insights on productivity, design, and
              building better digital experiences delivered straight to your
              inbox.
            </p>

            <div className="flex items-center gap-4">
              <div className="border-t border-b-4 border-[#000000] w-[315px] rounded-[48px] py-3 pl-[19px]">
                <input type="text" placeholder="Enter your mail here" />
              </div>
              <button className="bg-[#77C2FF] border-t border-b-4 border-[#000000]  h-[56px] w-[138px] rounded-[48px]">
                Subscribe
              </button>
            </div>
          </div>

          <div className="rounded-r-full bg-[#F6FBFF] ">
            <img src={mail} alt="" className=" px-[122px] py-[15px]" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
