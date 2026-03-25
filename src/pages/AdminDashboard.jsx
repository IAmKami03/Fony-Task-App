import { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import arr from "../assets/Alt Arrow Down.png";
import logoo from "../assets/logo.png";
import prof from "../assets/image.png";
import close from "../assets/Close Circle.svg";
import logout from "../assets/Logout 2.png";
import { Link } from "react-router-dom";
import AdminSummarycard from "../components/adminComponents/AdminSummarycard";
import AdminUserRow from "../components/adminComponents/AdminUserRow";
import { getDashboard, getUsers } from "../api/adminService";
import { useAuth } from "../context/AuthContext";

const PAGE_SIZE = 10;

const AdminDashBoard = () => {
  const navigate = useNavigate();
  const { user: currentUser, logout: logoutUser } = useAuth();
  const [profileOpen, setProfileOpen] = useState(false);

  const [stats, setStats] = useState({ totalUsers: 0, totalTasks: 0 });
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("newest");
  const [statsLoading, setStatsLoading] = useState(true);
  const [usersLoading, setUsersLoading] = useState(true);

  // Redirect non-admins away
  useEffect(() => {
    if (currentUser && currentUser.role !== "admin") {
      navigate("/dashboard");
    }
  }, [currentUser]);

  // Fetch dashboard stats
  useEffect(() => {
    getDashboard()
      .then(({ data }) => {
        setStats({
          totalUsers: data.stats.totalUsers,
          totalTasks: data.stats.totalTasks,
        });
      })
      .catch(console.error)
      .finally(() => setStatsLoading(false));
  }, []);

  // Fetch users whenever page or sort changes
  useEffect(() => {
    setUsersLoading(true);
    getUsers({ page, limit: PAGE_SIZE })
      .then(({ data }) => {
        // Sort client-side based on createdAt
        const sorted = [...data.users].sort((a, b) => {
          const diff = new Date(b.createdAt) - new Date(a.createdAt);
          return sortOrder === "newest" ? diff : -diff;
        });
        setUsers(sorted);
        setTotal(data.total ?? data.users.length);
        setTotalPages(data.totalPages ?? 1);
      })
      .catch(console.error)
      .finally(() => setUsersLoading(false));
  }, [page, sortOrder]);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "newest" ? "oldest" : "newest"));
    setPage(1);
  };

  // Build visible page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.min(totalPages, 4); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Admin Nav */}
      <div className="flex justify-between items-center border-b border-[#D9D9D9] shadow-md py-5 md:py-[30px] px-6 sm:px-10 md:px-[100px] relative">
        <Link to="/">
          <img src={logoo} alt="Fony" className="h-8 md:h-auto" />
        </Link>

        <div className="flex items-center gap-2.5">
          <span className="font-medium text-[14px] md:text-[16px] bg-[#77C2FF] py-2 px-4 rounded-[22px] border border-[#000000]">
            Admin Panel
          </span>
          <Link
            to="/dashboard"
            className="font-medium text-[14px] md:text-[16px] bg-[#F1F1F180] py-2 px-4 rounded-[22px]"
          >
            Dashboard
          </Link>
        </div>

        <div className="relative">
          <img
            src={prof}
            alt="Profile"
            className="cursor-pointer w-8 h-8 md:w-auto md:h-auto rounded-full"
            onClick={() => setProfileOpen(!profileOpen)}
          />

          {profileOpen && (
            <div className="absolute mt-3 right-0 w-[280px] sm:w-[326px] bg-white rounded-[20px] shadow-md border border-[#E4E4E4] p-[6px] space-y-[6px] z-50">
              <div className="flex justify-between items-start border border-[#E4E4E4] rounded-[60px] p-2.5">
                <div className="flex gap-2.5">
                  <img
                    src={prof}
                    alt=""
                    className="w-[38px] h-[38px] rounded-full"
                  />
                  <div className="space-y-[2px]">
                    <p className="font-normal text-[16px] text-[#0C0C0C] leading-[100%] tracking-tight">
                      {currentUser?.name || "Admin"}
                    </p>
                    <p className="text-[12px] text-[#535353] leading-[100%] tracking-tight">
                      {currentUser?.email || ""}
                    </p>
                  </div>
                </div>
                <img
                  src={close}
                  alt=""
                  className="cursor-pointer"
                  onClick={() => setProfileOpen(false)}
                />
              </div>
              <div
                onClick={handleLogout}
                className="py-[5px] px-2.5 flex gap-[6px] items-center rounded-[60px] cursor-pointer hover:bg-[#F4F4F4]"
              >
                <img src={logout} alt="" />
                <p className="text-[14px] text-[#FF3B3B] leading-[126%] tracking-tight p-2">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 sm:px-10 md:px-[100px] flex flex-col gap-[50px] py-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-[22px] md:text-[30px] leading-[100%] tracking-tight">
            Welcome Admin! {currentUser?.name}
          </h3>
        </div>

        {/* Summary Cards */}
        <AdminSummarycard
          totalUsers={stats.totalUsers}
          totalTasks={stats.totalTasks}
          loading={statsLoading}
        />

        {/* Users Table */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <h2 className="text-[22px] md:text-[30px] font-bold leading-[100%] tracking-tight">
              All Users
            </h2>

            <div className="flex items-center gap-[10px]">
              <p className="font-medium text-[14px] md:text-[16px] leading-[20px]">
                Date Joined
              </p>
              <button
                onClick={handleSortToggle}
                className="border flex justify-center items-center gap-2 px-4 h-[44px] rounded-[22px] hover:bg-[#F6FBFF] transition"
              >
                <p className="font-semibold text-[14px] md:text-[16px]">
                  {sortOrder === "newest"
                    ? "Newest to Oldest"
                    : "Oldest to Newest"}
                </p>
                <img
                  src={arr}
                  alt=""
                  className={`w-[24px] h-[24px] transition-transform ${sortOrder === "oldest" ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>

          <div className="rounded-[30px] border border-b-4 border-[#000000] overflow-hidden mb-10">
            {/* Table Header — desktop */}
            <div className="hidden md:flex bg-[#FBFBFB]">
              <p className="w-[453px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
                User
              </p>
              <p className="w-[154px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
                Total Tasks
              </p>
              <p className="w-[219px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
                Completed
              </p>
              <p className="w-[237px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
                Date Joined
              </p>
              <p className="w-[177px] py-[21px] px-[30px] h-[70px] font-semibold text-[20px] leading-[20px]">
                Role
              </p>
            </div>

            {/* Desktop rows */}
            <div className="hidden md:block">
              <AdminUserRow users={users} loading={usersLoading} />
            </div>

            {/* Mobile cards */}
            <div className="flex flex-col gap-3 p-4 md:hidden">
              {usersLoading ? (
                <p className="text-[#666666] text-center py-10">
                  Loading users...
                </p>
              ) : users.length === 0 ? (
                <p className="text-[#666666] text-center py-10">
                  No users found.
                </p>
              ) : (
                users.map((user) => (
                  <div
                    key={user._id}
                    className="border border-[#D9D9D9] rounded-[16px] p-4 flex flex-col gap-2"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-[15px]">{user.name}</p>
                        <p className="text-[12px] text-[#666666]">
                          {user.email}
                        </p>
                      </div>
                      <span
                        className={`text-[12px] font-medium px-3 py-1 rounded-full capitalize ${
                          user.role === "admin"
                            ? "bg-[#77C2FF] border border-[#000000]"
                            : "bg-[#F1F1F1] text-[#666666]"
                        }`}
                      >
                        {user.role}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[13px] text-[#666666]">
                      <div>
                        <p className="font-medium text-[#0C0C0C]">
                          {user.taskCount ?? 0}
                        </p>
                        <p>Total Tasks</p>
                      </div>
                      <div>
                        <p className="font-medium text-[#0C0C0C]">
                          {user.completedTasks ?? 0}
                        </p>
                        <p>Completed</p>
                      </div>
                      <div>
                        <p className="font-medium text-[#0C0C0C]">
                          {new Date(user.createdAt).toLocaleDateString(
                            "en-GB",
                            { day: "numeric", month: "short", year: "numeric" },
                          )}
                        </p>
                        <p>Joined</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-between px-[30px] py-[15px] items-center border-t border-[#F1F1F1]">
              <p className="text-[14px] md:text-[16px] font-medium text-[#666666]">
                Showing {users.length} of {total}
              </p>
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={() => page > 1 && setPage(page - 1)}
                  className={`border rounded-[20px] p-1 ${page === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#F6FBFF]"}`}
                >
                  <MdOutlineKeyboardArrowLeft className="w-[24px] h-[24px]" />
                </button>
                {pageNumbers.map((num) => (
                  <button
                    key={num}
                    onClick={() => setPage(num)}
                    className={`w-8 h-8 text-[14px] font-medium rounded-full ${page === num ? "border-b-2 border-[#000000] font-bold" : "hover:bg-[#F6FBFF]"}`}
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={() => page < totalPages && setPage(page + 1)}
                  className={`border rounded-[20px] p-1 ${page >= totalPages ? "opacity-30 cursor-not-allowed" : "hover:bg-[#F6FBFF]"}`}
                >
                  <MdOutlineKeyboardArrowRight className="w-[24px] h-[24px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
