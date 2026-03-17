import close from "../assets/Close Circle.svg";
import success from "../assets/Women-Led--Streamline-Manila.png";

const SuccessModal = ({ isOpen, onClose, title, message }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 bg-[#000000B2] flex justify-center items-center z-50">
        <div className="bg-[#FBFBFB] p-4 rounded-[30px] flex flex-col gap-[35px] w-[728px] max-h-[95vh] scrollbar-hidden">
          <div className="flex items-start justify-between">
            <img src={success} alt="" />
            <button onClick={onClose} className="cursor-pointer ">
              <img src={close} alt="Close modal" />
            </button>
          </div>

          <div className="space-y-[7px]">
            <h3 className="text-[30px] font-bold tracking-tight">{title}</h3>
            <p className="text-[16px] font-medium leading-[20px] tracking-tighter">
              {message}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[16px] tracking-tighter font-medium rounded-[22px] py-2.5 px-[19px] bg-[#77C2FF] border border-b-4 border-[#000000] cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
