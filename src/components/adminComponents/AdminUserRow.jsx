import pic from "../../assets/prof.png";

const AdminUserRow = ({ users, loading }) => {
  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-[#666666]">Loading users...</p>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <p className="text-[#666666]">No users found.</p>
      </div>
    );
  }

  return (
    <div className="border-y">
      {users.map((user, index) => (
        <div
          key={user._id || index}
          className="flex h-[70px] items-center border-b last:border-b-0 hover:bg-[#F6FBFF]"
        >
          {/* User */}
          <div className="w-113.25 items-center flex gap-2.5 pl-[30px]">
            <img
              src={user.avatar || pic}
              alt={user.name}
              className="w-8 h-8 rounded-full object-cover shrink-0 border border-[#D9D9D9]"
              onError={(e) => {
                e.target.src = pic;
              }}
            />
            <div className="overflow-hidden">
              <p className="text-[16px] font-semibold tracking-tight leading-[20px] truncate">
                {user.name}
              </p>
              <p className="text-[12px] text-[#666666] truncate">
                {user.email}
              </p>
            </div>
          </div>

          {/* Total Tasks */}
          <p className="text-[16px] py-[21px] px-[30px] w-[154px] font-semibold tracking-tight leading-[20px]">
            {user.taskCount ?? 0}
          </p>

          {/* Completed Tasks */}
          <p className="text-[16px] py-[21px] px-[30px] w-[219px] font-semibold tracking-tight leading-[20px]">
            {user.completedTasks ?? 0}
          </p>

          {/* Date Joined */}
          <p className="text-[14px] py-[21px] px-[30px] w-[237px] font-medium tracking-tight leading-[20px] text-[#666666]">
            {formatDate(user.createdAt)}
          </p>

          {/* Role badge */}
          <div className="w-[177px] py-[21px] px-[30px]">
            <span
              className={`text-[12px] font-medium px-3 py-1 rounded-full capitalize ${
                user.role === "admin"
                  ? "bg-[#77C2FF] text-[#000000] border border-[#000000]"
                  : "bg-[#F1F1F1] text-[#666666]"
              }`}
            >
              {user.role}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUserRow;
