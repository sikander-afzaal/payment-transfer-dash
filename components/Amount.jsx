import Image from "next/image";

const Amount = ({ setSteps }) => {
  return (
    <div className="flex justify-start items-start flex-col w-full max-w-[562px] px-5 mt-[50px] lg:mt-[80px]">
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
          <div className="flex cursor-pointer text-blue justify-center items-center gap-3 min-w-[150px] bg-[#2e4369]">
            <Image src={"/flag.webp"} width={34} height={16} />
            <h2 className="text-white font-base text-xl">GBP</h2>
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
        </div>
        <div className="flex justify-start flex-col items-center gap-[30px] py-6 isolate w-full pl-[20px] relative">
          <span className="bg-[rgba(0,0,0,0.1)] w-[2px] h-full absolute left-[31px] -z-10 top-0 rounded-full"></span>
          <div className="text-dark-blue  flex justify-start items-center w-full gap-[25px]">
            <p className="bg-[rgba(0,0,0,0.1)] relative  grid place-items-center w-6 h-6 rounded-full text-[22px] font-normal leading-[1] text-dark-blue">
              -
              <span className="absolute left-0 top-0 w-full h-full -z-10 bg-white"></span>
            </p>
            <p className="font-semibold text-base leading-[1]">
              54,705.87 GBP <span className="font-normal">(0.45%) fee</span>
            </p>
          </div>
          <div className="text-dark-blue flex justify-start items-center w-full gap-[25px]">
            <p className="bg-[rgba(0,0,0,0.1)] relative grid place-items-center w-6 h-6 rounded-full text-[16px] font-normal leading-[1] text-dark-blue">
              ={" "}
              <span className="absolute left-0 top-0 w-full h-full -z-10 bg-white"></span>
            </p>
            <p className="font-semibold text-base leading-[1]">
              12,068,417.13 GBP{" "}
              <span className="font-normal">Total amount we’ll convert</span>
            </p>
          </div>
          <div className="text-dark-blue flex justify-start items-center w-full gap-[25px]">
            <p className="bg-[rgba(0,0,0,0.1)] relative grid place-items-center w-6 h-6 rounded-full text-[16px] font-normal leading-[1] text-dark-blue">
              x{" "}
              <span className="absolute left-0 top-0 w-full h-full -z-10 bg-white"></span>
            </p>
            <p className="font-semibold text-base leading-[1]">
              278.297{" "}
              <span className="font-normal">Guaranteed rate (24 hrs)</span>
            </p>
          </div>
        </div>
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
          <div className="flex cursor-pointer text-blue justify-center items-center gap-3 min-w-[150px] bg-[#2e4369]">
            <Image src={"/flag.webp"} width={34} height={16} />
            <h2 className="text-white font-base text-xl">GBP</h2>
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
