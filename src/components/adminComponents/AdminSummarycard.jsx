import pic from "../../assets/footer.png";

const AdminSummarycard = ({ totalUsers, totalTasks, loading }) => {
  const taskSummary = [
    { label: "Total Users", value: totalUsers },
    { label: "Total Tasks", value: totalTasks },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 md:gap-[33px]">
      {taskSummary.map((summary, key) => (
        <div
          key={key}
          className="flex-1 h-[111px] border shadow-[0_4px_0_0_black] rounded-[22px] px-[22px] py-[35px] flex gap-[5px] items-center"
        >
          <img src={pic} alt="" className="w-[40px] h-[40px] rounded-[12px]" />
          <div className="leading-[20px]">
            <p className="text-[16px] font-medium tracking-tighter">
              {summary.label}
            </p>
            <p className="font-bold text-[26px] leading-[120%]">
              {loading ? "..." : summary.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminSummarycard;
