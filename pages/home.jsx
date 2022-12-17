import Image from "next/image";
import Link from "next/link";
import DashboardLayout from "../layout/DashboardLayout";

const Home = () => {
  return (
    <DashboardLayout>
      <div className="flex lg:pb-0 pb-[60px] justify-start h-full items-center self-start sm:items-start flex-col max-w-[1200px] pt-[40px] sm:pt-5 w-full">
        <h2 className="text-dark-blue text-2xl font-medium">Home</h2>
        <div className="flex mt-[20px] flex-wrap justify-center sm:justify-start items-center gap-4">
          <CurrencyCard flag={"/flag.webp"} name="UK GBP" amount="0.00" />
          <CurrencyCard flag={"/flag.webp"} name="UK GBP" amount="0.00" />
        </div>
        {/* <div className="flex flex-col h-full justify-center items-center gap-4 self-center">
            <p className="text-gray max-w-[400px] text-center">
              This is where you will see your transactions and activity. Choose
              how you would like to started.
            </p>{" "}
            <Link href={"/payment"}>
              <button className="bg-green block  rounded-sm mt-3 font-medium w-[115px] leading-[1] h-[40px] border-none text-white text-sm hover:bg-emerald-700 cursor-pointer">
                Send Money
              </button>
            </Link>
          </div> */}
        <div className="flex justify-start items-center gap-6 mt-[40px] flex-col w-full">
          <div className="flex cursor-pointer gap-5 text-gray justify-between items-center px-1 py-1 rounded-full bg-white border-[1px] border-gray border-solid">
            <div className="flex  justify-start items-center gap-2">
              <div className="rounded-full relative w-[30px] h-[30px] overflow-hidden">
                <Image alt="" src={"/flag.webp"} fill />
              </div>
              <p className="text-dark-blue text-sm font-medium">37.00 GBP</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <h2 className="text-dark-blue text-5xl font-bold my-5">£36.9980</h2>
          <div className="flex justify-start items-center  flex-col w-full">
            <div className="flex justify-center items-center w-full gap-[25x] sm:gap-[50px]">
              <div className="flex cursor-pointer justify-center items-center flex-col gap-2 sm:w-auto w-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="sm:w-10 w-8 sm:h-10 h-8 rounded-full bg-blue p-[6px] sm:p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p className="text-blue font-normal text-sm sm:text-base">
                  Recieve
                </p>
              </div>
              <div className="flex cursor-pointer justify-center items-center flex-col gap-2 sm:w-auto w-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="sm:w-10 w-8 sm:h-10 h-8 rounded-full bg-blue p-[6px] sm:p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>

                <p className="text-blue font-normal text-sm sm:text-base">
                  Buy
                </p>
              </div>
              <div className="flex cursor-pointer justify-center items-center flex-col gap-2 sm:w-auto w-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="sm:w-10 w-8 sm:h-10 h-8 rounded-full bg-blue p-[6px] sm:p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>

                <p className="text-blue font-normal text-sm sm:text-base">
                  Send
                </p>
              </div>
              <div className="flex cursor-pointer justify-center items-center flex-col gap-2 sm:w-auto w-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="sm:w-10 w-8 sm:h-10 h-8 rounded-full bg-blue p-[6px] sm:p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>

                <p className="text-blue font-normal text-sm sm:text-base">
                  Swap
                </p>
              </div>
              <div className="flex cursor-pointer justify-center items-center flex-col gap-2 sm:w-auto w-[60px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="sm:w-10 w-8 sm:h-10 h-8 rounded-full bg-blue p-[6px] sm:p-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>

                <p className="text-blue font-normal text-sm sm:text-base">
                  Withraw
                </p>
              </div>
            </div>
            <div className="flex mt-[30px] justify-center items-center gap-0 w-full">
              <p className="w-full cursor-pointer text-blue font-medium text-lg pb-1 text-center flex justify-center items-center border-b-[2px] border-solid border-blue">
                Currencies{" "}
              </p>
              <Link
                href={"/history"}
                className="w-full cursor-pointer text-gray font-medium text-lg pb-1 text-center flex justify-center items-center border-b-[2px] border-solid border-gray"
              >
                History{" "}
              </Link>
            </div>
            <div className="flex pt-2 justify-start items-start flex-col w-full">
              <CurrencyConvertorTab
                img="/flag.webp"
                amount={0}
                name={"GBP"}
                converted={"$0"}
              />
              <CurrencyConvertorTab
                img="/flag.webp"
                amount={0}
                name={"GBP"}
                converted={"$0"}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;

const CurrencyCard = ({ flag, amount, name }) => {
  return (
    <div className="cursor-pointer hover:bg-[#38c8ff1a] flex justify-between items-start flex-col p-5 bg-[#86a7bd1a] w-[208px] h-[208px] rounded-lg">
      <div className="relative overflow-hidden w-[48px] h-[48px] rounded-full">
        <Image alt="" src={flag} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="flex justify-start items-start flex-col gap-2">
        <h5 className="text-dark-blue text-xl font-normal leading-[1]">
          {amount}
        </h5>
        <p className="text-gray text-base leading-[1]">{name}</p>
      </div>
    </div>
  );
};

const CurrencyConvertorTab = ({ img, amount, name, converted }) => {
  return (
    <div className="flex cursor-pointer justify-between hover:bg-[#86a7bd1a] px-0 lg:px-5  py-5 rounded-md transition-all items-center w-full">
      <div className="flex gap-3 justify-start  items-center">
        <Image src={img} width={40} height={40} alt="" />

        <div className="flex justify-start items-start flex-col">
          <h4 className="text-dark-blue text-base font-medium">
            {amount} {name}
          </h4>
          <p className="text-gray font-normal text-sm ">{converted}</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="rgb(93, 112, 121)"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};
