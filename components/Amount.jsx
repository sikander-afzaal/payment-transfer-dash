import Image from "next/image";
import { useState } from "react";
import { useOutsideClick } from "../hooks/OutsideClickDetector";

const Amount = ({ setSteps }) => {
  const DUMMY__DETAILS__DROPDOWN = [
    {
      curr: "GBP",
      flag: "/flag.webp",
      name: "UK",
    },
    {
      curr: "AED",
      flag: "/flag.webp",
      name: "Australia",
    },
    {
      curr: "INR",
      flag: "/flag.webp",
      name: "India",
    },
    {
      curr: "USD",
      flag: "/flag.webp",
      name: "USA",
    },
  ];
  const DUMMY__DETAILS = {
    fee: "54,705.87 GBP",
    we__convert: "12,068,417.13 GBP",
    rate: "278.297",
  };
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDownVal, setDropDownVal] = useState(DUMMY__DETAILS__DROPDOWN[0]);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDownVal2, setDropDownVal2] = useState(DUMMY__DETAILS__DROPDOWN[0]);
  const [searchDrop1, setSearchDrop1] = useState("");
  const [searchDrop2, setSearchDrop2] = useState("");
  const handleClickOutside = () => {
    setDropDown1(false);
  };
  const handleClickOutside2 = () => {
    setDropDown2(false);
  };
  const ref = useOutsideClick(handleClickOutside);
  const ref2 = useOutsideClick(handleClickOutside2);

  return (
    <div className="flex justify-start items-start flex-col w-full max-w-[562px] px-5 mt-[30px] lg:mt-[80px]">
      <div className="flex justify-center items-center w-full">
        <p className="text-blue cursor-pointer text-center font-medium w-full pb-3 border-solid border-b-[3px] border-b-blue ">
          International
        </p>
        <p className="text-dark-blue cursor-pointer transition-colors hover:text-blue text-center font-medium w-full pb-3 border-solid border-b-[1px] border-b-[#0000001a] ">
          Same Currency
        </p>
      </div>
      <div className="flex justify-center items-center flex-col w-full mt-6">
        <div className="flex justify-center items-stretch w-full">
          <div className="flex focus-within:border-dark-blue focus-within:text-dark-blue transition-all text-gray justify-center items-start flex-col px-2 py-3 w-full border-solid border-[1px] border-[#0000001a] gap-1">
            <p className=" font-normal text-sm transition-all">
              You send exactly
            </p>
            <input
              type="text"
              placeholder="0.00"
              className="w-full outline-none border-none bg-transparent text-dark-blue text-xl"
            />
          </div>
          {/* currency selector ------------------------ */}
          <div
            ref={ref}
            className="relative  cursor-pointer text-blue  min-w-[150px] bg-[#2e4369]"
          >
            <div
              className="flex justify-center items-center gap-3 h-full w-full"
              onClick={() => {
                setDropDown1((prev) => !prev);
                setDropDown2(false);
              }}
            >
              {" "}
              <Image alt="" src={dropDownVal.flag} width={34} height={16} />
              <h2 className="text-white font-base text-xl">
                {dropDownVal.curr}
              </h2>
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
            </div>
            {dropDown1 && (
              <div className="absolute pb-5 z-20  top-full  right-0 bg-white rounded-md shadow-lg max-h-[600px] overflow-y-auto  w-[350px] sm:w-[420px]">
                <div className="flex px-5 py-2 border-b-[1px] border-solid border-[#0000001a] justify-start text-gray items-center gap-2 w-full">
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <input
                    onChange={(e) => setSearchDrop1(e.target.value)}
                    value={searchDrop1}
                    type="text"
                    placeholder="Type currency / country"
                    className="border-none w-full outline-none text-gray font-normal text-base h-[50px]"
                  />
                </div>
                <div className="flex justify-start  items-start flex-col gap-0">
                  <p className="text-gray px-5 py-2 text-base">
                    Popular Countries
                  </p>
                  {DUMMY__DETAILS__DROPDOWN.filter((elem) => {
                    return (
                      elem.name
                        .toLowerCase()
                        .includes(searchDrop1.toLowerCase()) ||
                      elem.curr
                        .toLowerCase()
                        .includes(searchDrop1.toLowerCase())
                    );
                  }).map((elem, idx) => {
                    return (
                      <CountryDropdown
                        key={"select1" + idx}
                        setDrop={setDropDown1}
                        setDropVal={setDropDownVal}
                        {...elem}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-start flex-col items-center gap-[30px] py-6 isolate w-full pl-[20px] relative">
          <span className="bg-[rgba(0,0,0,0.1)] w-[2px] h-full absolute left-[31px] -z-10 top-0 rounded-full"></span>
          <div className="text-dark-blue  flex justify-start items-center w-full gap-[25px]">
            <p className="bg-[rgba(0,0,0,0.1)] relative  grid place-items-center w-6 h-6 rounded-full text-[22px] font-normal leading-[1] text-dark-blue">
              -
              <span className="absolute left-0 top-0 w-full h-full -z-10 bg-white"></span>
            </p>
            <p className="font-semibold text-base leading-[1]">
              {DUMMY__DETAILS.fee}{" "}
              <span className="font-normal">(0.45%) fee</span>
            </p>
          </div>
          <div className="text-dark-blue flex justify-start items-center w-full gap-[25px]">
            <p className="bg-[rgba(0,0,0,0.1)] relative grid place-items-center w-6 h-6 rounded-full text-[16px] font-normal leading-[1] text-dark-blue">
              ={" "}
              <span className="absolute left-0 top-0 w-full h-full -z-10 bg-white"></span>
            </p>
            <p className="font-semibold text-base leading-[1]">
              {DUMMY__DETAILS.we__convert}{" "}
              <span className="font-normal">Total amount we’ll convert</span>
            </p>
          </div>
          <div className="text-dark-blue flex justify-start items-center w-full gap-[25px]">
            <p className="bg-[rgba(0,0,0,0.1)] relative grid place-items-center w-6 h-6 rounded-full text-[16px] font-normal leading-[1] text-dark-blue">
              x{" "}
              <span className="absolute left-0 top-0 w-full h-full -z-10 bg-white"></span>
            </p>
            <p className="font-semibold text-base leading-[1]">
              {DUMMY__DETAILS.rate}{" "}
              <span className="font-normal">Guaranteed rate (24 hrs)</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-stretch w-full">
          <div className="flex focus-within:border-dark-blue focus-within:text-dark-blue transition-all text-gray justify-center items-start flex-col px-2 py-3 w-full border-solid border-[1px] border-[#0000001a] gap-1">
            <p className=" font-normal text-sm transition-all">
              Recipient gets
            </p>
            <input
              type="text"
              placeholder="0.00"
              className="w-full outline-none border-none bg-transparent text-dark-blue text-xl"
            />
          </div>
          {/* currency selector ------------------------ */}
          <div
            ref={ref2}
            className="relative  cursor-pointer text-blue  min-w-[150px] bg-[#2e4369]"
          >
            <div
              className="flex justify-center items-center gap-3 h-full w-full"
              onClick={() => {
                setDropDown2((prev) => !prev);
                setDropDown1(false);
              }}
            >
              {" "}
              <Image alt="" src={dropDownVal2.flag} width={34} height={16} />
              <h2 className="text-white font-base text-xl">
                {dropDownVal2.curr}
              </h2>
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
            </div>
            {dropDown2 && (
              <div className="absolute pb-5 z-20  top-full  right-0 bg-white rounded-md shadow-lg max-h-[600px] overflow-y-auto w-[350px] sm:w-[420px]">
                <div className="flex px-5 py-2 border-b-[1px] border-solid border-[#0000001a] justify-start text-gray items-center gap-2 w-full">
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <input
                    onChange={(e) => setSearchDrop2(e.target.value)}
                    value={searchDrop2}
                    type="text"
                    placeholder="Type currency / country"
                    className="border-none w-full outline-none text-gray font-normal text-base h-[50px]"
                  />
                </div>
                <div className="flex justify-start  items-start flex-col gap-0">
                  <p className="text-gray px-5 py-2 text-base">
                    Popular Countries
                  </p>
                  {DUMMY__DETAILS__DROPDOWN.filter((elem) => {
                    return (
                      elem.name
                        .toLowerCase()
                        .includes(searchDrop2.toLowerCase()) ||
                      elem.curr
                        .toLowerCase()
                        .includes(searchDrop2.toLowerCase())
                    );
                  }).map((elem, idx) => {
                    return (
                      <CountryDropdown
                        key={"select2" + idx}
                        setDrop={setDropDown2}
                        setDropVal={setDropDownVal2}
                        {...elem}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-base text-gray font-normal mt-4">
        You could save up to{" "}
        <span className="font-semibold text-dark-blue">382,077.34 GBP</span> vs
        the average bank
      </p>
      <button
        onClick={() => setSteps(1)}
        className="w-full bg-blue hover:bg-cyan-600 cursor-pointer h-[50px] text-white border-none text-lg rounded-lg mt-5"
      >
        Continue
      </button>
    </div>
  );
};

export default Amount;

const CountryDropdown = ({ name, flag, curr, setDrop, setDropVal }) => {
  return (
    <div
      onClick={() => {
        setDrop(false);
        setDropVal({ name, flag, curr });
      }}
      className="flex justify-start px-5  hover:bg-[rgba(134,167,189,.102)] cursor-pointer w-full py-4 items-center gap-0"
    >
      <Image alt="" src={flag} width={34} height={16} />
      <h3 className="text-dark-blue font-medium text-base ml-3 leading-[1]">
        {name}
      </h3>
      <p className="text-gray text-sm leading-[1] ml-2">{curr}</p>
    </div>
  );
};
