import { useState } from "react";
import { useOutsideClick } from "../hooks/OutsideClickDetector";

const Review = ({ setSteps }) => {
  const [openDrop, setOpenDrop] = useState(false);
  const [dropVal, setDropVal] = useState("Travel Payment");
  const handleClickOutside = () => {
    setOpenDrop(false);
  };
  const ref = useOutsideClick(handleClickOutside);
  return (
    <div className="flex justify-start items-center gap-3 flex-col mt-[30px] w-full max-w-[600px] px-5">
      <h2 className="text-dark-blue text-2xl font-medium ">
        Reason for Transfer
      </h2>
      <div
        ref={ref}
        className="w-full mt-2 flex justify-start items-center relative gap-0"
      >
        <button
          onClick={() => setOpenDrop((prev) => !prev)}
          className="justify-between bg-white border-[1px] hover:hover:bg-[#86a7bd12] transition-all border-solid border-dark-blue p-3 rounded cursor-pointer text-dark-blue items-center w-full flex"
        >
          <p className=" font-medium text-lg">{dropVal}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {openDrop && (
          <div className="absolute flex-col max-h-[300px] overflow-y-auto border-[1px]  border-solid border-dark-blue bg-white top-[110%] left-0 w-full flex justify-start items-center z-20">
            <p
              onClick={(e) => {
                setDropVal(e.target.innerText);
                setOpenDrop(false);
              }}
              className="hover:hover:bg-[#86a7bd12] transition-all p-3 w-full cursor-pointer text-dark-blue font-medium text-lg"
            >
              Medical Reasons
            </p>
            <p
              onClick={(e) => {
                setDropVal(e.target.innerText);
                setOpenDrop(false);
              }}
              className="hover:hover:bg-[#86a7bd12] transition-all p-3 w-full cursor-pointer text-dark-blue font-medium text-lg"
            >
              Business Reasons
            </p>
            <p
              onClick={(e) => {
                setDropVal(e.target.innerText);
                setOpenDrop(false);
              }}
              className="hover:hover:bg-[#86a7bd12] transition-all p-3 w-full cursor-pointer text-dark-blue font-medium text-lg"
            >
              Other
            </p>
          </div>
        )}
      </div>
      <button
        onClick={(e) => {
          setSteps(3);
        }}
        className="border-none mt-4 text-base font-medium cursor-pointer bg-blue text-white rounded w-full max-w-[200px] h-[50px]"
      >
        Confirm
      </button>
    </div>
  );
};

export default Review;
