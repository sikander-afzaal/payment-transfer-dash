import Link from "next/link";
import { useState } from "react";
import { useOutsideClick } from "../hooks/OutsideClickDetector";

const AccountDetailsHeader = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const handleClickOutside = () => {
    setOpenDrop(false);
  };
  const ref = useOutsideClick(handleClickOutside);
  return (
    <div
      ref={ref}
      className="flex relative justify-center text-blue items-center gap-2 sm:gap-4"
    >
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
          d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
        />
      </svg>
      <div
        onClick={() => setOpenDrop((prev) => !prev)}
        className="flex cursor-pointer group hover:bg-[#86a7bd1a] p-2 rounded-lg transition-colors justify-center text-blue items-center gap-2"
      >
        <p className="rounded-full group-hover:bg-white bg-[#86a7bd1a] w-[40px] delay-150 duration-500 transition-colors text-dark-blue font-base grid place-items-center text-base h-[40px]">
          SH
        </p>
        <p className="text-dark-blue sm:block hidden font-medium text-sm">
          Shaheer Ahmad
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 transition-transform ${
            openDrop ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      {/* //Drop down ---------------------- */}

      <div
        className={`fixed z-50 sm:absolute duration-700 top-0 sm:top-full transition-all bg-white shadow-lg ${
          openDrop ? "flex right-0" : "sm:hidden flex sm:right-0 right-[-800px]"
        } w-full h-screen sm:h-auto sm:w-[300px] justify-start items-start flex-col pt-5 px-5 sm:p-2`}
      >
        <svg
          onClick={() => setOpenDrop(false)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#00a2dd"
          className="w-6 h-6 block sm:hidden mb-3"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>

        <div className="flex p-2 flex-col  pb-3 border-b-[1px] border-solid border-[#0000001a] w-full  justify-start items-start gap-0">
          <h4 className="text-dark-blue text-2xl sm:text-base font-medium">
            Shaheer Ahmad
          </h4>
          <p className="text-gray text-sm font-normal">
            Membership number P35257555
          </p>
        </div>
        <div className="flex mt-2  cursor-pointer flex-col pb-2 border-b-[1px] border-solid border-[#0000001a] w-full  justify-start items-start gap-0">
          <Link className="w-full" href={"/profile"}>
            <div className="flex text-blue hover:bg-[#86a7bd1a] rounded-lg transition-all w-full  p-[13px__16px__11px__8px] justify-start items-center gap-4">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <p className="text-base font-medium leading-[1] text-dark-blue">
                Your Details
              </p>
            </div>
          </Link>
          <div className="flex text-blue hover:bg-[#86a7bd1a] rounded-lg transition-all w-full  p-[13px__16px__11px__8px] justify-start items-center gap-4">
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
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <p className="text-base font-medium leading-[1] text-dark-blue">
              Settings
            </p>
          </div>
          <div className="flex text-blue hover:bg-[#86a7bd1a] rounded-lg transition-all w-full  p-[13px__16px__11px__8px] justify-start items-center gap-4">
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
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>

            <p className="text-base font-medium leading-[1] text-dark-blue">
              Help Center
            </p>
          </div>
          <div className="flex text-blue hover:bg-[#86a7bd1a] rounded-lg transition-all w-full  p-[13px__16px__11px__8px] justify-start items-center gap-4">
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>

            <p className="text-base font-medium leading-[1] text-dark-blue">
              Log out
            </p>
          </div>
        </div>
        <div className="flex hover:bg-[#86a7bd1a] mt-2 rounded-lg transition-all w-full  p-[13px__16px__11px__8px] cursor-pointer text-blue justify-start items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-dark-blue font-normal text-sm">
            Open a business account
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsHeader;
