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

      <div className="px-6 sm:px-10 md:px-[100px]">
        {/* Hero */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10 md:py-0">
          <div className="flex flex-col gap-6 md:gap-[33px] w-full md:w-[694px] text-center md:text-left">
            <h1 className="text-[42px] sm:text-[56px] md:text-[70px] font-black leading-[1.1] tracking-tight">
              Organize What Matters, Move At Your Own Pace
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/login"
                className="bg-[#77C2FF] border-b-4 py-3 px-[49px] border-2 border-[#000000] rounded-[48px] text-[16px] font-bold w-full sm:w-auto text-center"
              >
                Get Started
              </Link>
              <Link
                to="/register"
                className="bg-[#FFFFFF] border-b-4 py-3 px-[49px] border-2 border-[#000000] rounded-[40.5px] text-[16px] font-bold w-full sm:w-auto text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <img
            src={hero}
            alt="Hero"
            className="w-[280px] sm:w-[360px] md:w-auto mx-auto md:mx-0"
          />
        </div>

        {/* Features */}
        <div className="my-[60px] md:my-[80px]">
          <h2 className="text-[36px] sm:text-[48px] md:text-[60px] font-black mx-auto text-center leading-[1.2] max-w-[646px] mb-[40px] md:mb-[50px]">
            A Simple Way To Manage Your Tasks
          </h2>

          <div className="space-y-[30px] md:space-y-[50px]">
            {/* Feature 1 */}
            <div className="flex flex-col md:grid md:grid-cols-2 items-center border-t border-b-4 border-[#000000] rounded-[40px] md:rounded-full overflow-hidden">
              <div className="bg-[#F6FBFF] w-full flex justify-center py-6 md:py-0">
                <img
                  src={create}
                  alt="Create tasks"
                  className="px-6 md:px-[122px] w-full max-w-[300px] md:max-w-none"
                />
              </div>
              <div className="flex flex-col gap-3 px-6 md:ml-[70px] md:w-[393px] py-8 md:py-0 text-center md:text-left">
                <h3 className="text-[28px] md:text-[40px] font-black">
                  Create Your Tasks
                </h3>
                <p className="text-[16px] md:text-[20px] tracking-tight leading-[130%]">
                  Add What Matters, When It Matters. Big Goals Or Small Wins,
                  All In One Place.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center border-t border-b-4 border-[#000000] rounded-[40px] md:rounded-full overflow-hidden">
              <div className="flex flex-col gap-3 px-6 md:ml-[70px] md:w-[393px] py-8 md:py-0 text-center md:text-left">
                <h3 className="text-[28px] md:text-[40px] font-black">
                  Update As You Go
                </h3>
                <p className="text-[16px] md:text-[20px] tracking-tight leading-[130%]">
                  Edit, Prioritize, And Track Progress Easily As Your Day
                  Evolves.
                </p>
              </div>
              <div className="bg-[#F6FBFF] w-full flex justify-center py-6 md:py-0">
                <img
                  src={update}
                  alt="Update tasks"
                  className="px-6 md:px-[122px] w-full max-w-[300px] md:max-w-none"
                />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col md:grid md:grid-cols-2 items-center border-t border-b-4 border-[#000000] rounded-[40px] md:rounded-full overflow-hidden">
              <div className="bg-[#F6FBFF] w-full flex justify-center py-6 md:py-0">
                <img
                  src={complete}
                  alt="Complete tasks"
                  className="px-6 md:px-[122px] w-full max-w-[300px] md:max-w-none"
                />
              </div>
              <div className="flex flex-col gap-3 px-6 md:ml-[70px] md:w-[393px] py-8 md:py-0 text-center md:text-left">
                <h3 className="text-[28px] md:text-[40px] font-black leading-[91%]">
                  Get Things Done, Better
                </h3>
                <p className="text-[16px] md:text-[20px] tracking-tight leading-[130%]">
                  Stay Focused, Feel Accomplished, And Enjoy The Momentum Of
                  Checking Things Off.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-[36px] sm:text-[48px] md:text-[60px] font-black mx-auto text-center leading-[1.2] max-w-[818px] mb-[40px] md:mb-[50px]">
            Loved by People Who Get Things Done
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                type: "review",
                name: "OlaChi Maryam",
                text: "This app completely changed how I plan my day. Creating tasks is simple, updating them feels effortless, and I actually finish what I start now.",
              },
              {
                type: "stat",
                stat: "32%",
                label: "increase in task completion rate",
              },
              {
                type: "review",
                name: "Joseph Ibrahim",
                text: "I love how organized everything feels without being overwhelming. It fits perfectly into my daily routine and keeps me focused.",
              },
              {
                type: "stat",
                stat: "3X",
                label: "better daily focus and consistency",
              },
              {
                type: "review",
                name: "Wasiu David",
                text: "Managing my tasks used to be stressful, but this makes it feel calm and intentional. I get more done with less pressure.",
              },
              {
                type: "stat",
                stat: "2.5 hrs",
                label: "saved per week on planning",
              },
            ].map((item, i) =>
              item.type === "review" ? (
                <div
                  key={i}
                  className="bg-[#F6FBFF] h-[260px] sm:h-[290px] flex items-center justify-center border-t border-b-4 border-[#000000] rounded-[120px] sm:rounded-[210px] px-4"
                >
                  <div className="flex flex-col gap-2 text-center w-full max-w-[322px] items-center">
                    <img
                      src={image1}
                      alt=""
                      className="w-10 h-10 sm:w-auto sm:h-auto"
                    />
                    <h5 className="text-[20px] sm:text-[30px] font-black tracking-tight">
                      {item.name}
                    </h5>
                    <p className="text-[14px] sm:text-[20px] tracking-[-0.03em] leading-[130%] capitalize">
                      {item.text}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className="border-t border-b-4 h-[260px] sm:h-[290px] border-[#000000] rounded-[120px] sm:rounded-[210px] flex items-center justify-center px-4"
                >
                  <div className="flex flex-col text-center gap-3 w-full max-w-[322px]">
                    <h5 className="text-[60px] sm:text-[80px] font-black tracking-tight leading-[110%]">
                      {item.stat}
                    </h5>
                    <p className="text-[16px] sm:text-[20px] tracking-tight leading-[130%] capitalize">
                      {item.label}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Newsletter */}
        <div className="my-[60px] md:my-[80px] flex flex-col md:grid md:grid-cols-2 items-center border-t border-b-4 border-[#000000] rounded-[40px] md:rounded-full overflow-hidden gap-0">
          <div className="flex flex-col gap-4 px-6 md:ml-[70px] md:w-[469px] py-10 md:py-0 text-center md:text-left">
            <h3 className="text-[28px] md:text-[40px] font-black">
              Stay in the loop
            </h3>
            <p className="text-[16px] md:text-[20px] tracking-tight leading-[130%]">
              Get simple, practical insights on productivity, design, and
              building better digital experiences delivered straight to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="border border-b-4 border-[#000000] w-full sm:w-[315px] rounded-[48px] py-3 pl-[19px]">
                <input
                  type="text"
                  placeholder="Enter your mail here"
                  className="outline-none w-full text-[14px]"
                />
              </div>
              <button className="bg-[#77C2FF] border border-b-4 border-[#000000] h-[48px] sm:h-[56px] w-full sm:w-[138px] rounded-[48px] font-bold text-[16px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="bg-[#F6FBFF] w-full flex justify-center py-6 md:py-0">
            <img
              src={mail}
              alt="Newsletter"
              className="px-6 md:px-[122px] md:py-[15px] w-full max-w-[300px] md:max-w-none"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
