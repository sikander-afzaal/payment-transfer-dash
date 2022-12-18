import Link from "next/link";
import { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const History = () => {
  const [searchVal, setSearchVal] = useState("");
  const dummyData = [
    {
      name: "lorem",
      status: "Cancelled",
      amount: "20 GBP",
      currency: "INR",
    },
    {
      name: "dummy",
      status: "Cancelled",
      amount: "20 GBP",
      currency: "INR",
    },
    {
      name: "ABC",
      status: "Cancelled",
      amount: "20 GBP",
      currency: "INR",
    },
    {
      name: "EFG",
      status: "Cancelled",
      amount: "20 GBP",
      currency: "INR",
    },
  ];
  return (
    <DashboardLayout>
      <div className="flex  max-w-[1200px] justify-start h-full items-center sm:items-start self-start flex-col pt-[40px] sm:pt-5 w-full">
        <h2 className="text-dark-blue text-2xl font-medium">
          Transaction History
        </h2>
        <div className="flex self-end mt-5 px-5 py-2 border-[1px] max-w-full sm:max-w-[400px] border-solid border-[#0000001a] justify-start text-gray items-center gap-2 w-full">
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
            onChange={(e) => setSearchVal(e.target.value)}
            type="text"
            value={searchVal}
            placeholder="Search"
            className="border-none w-full outline-none text-gray font-normal text-base h-[20px]"
          />
        </div>
        <div className="w-full flex-col mt-[40px] flex justify-start items-start gap-1">
          <p className="text-base mb-2 font-medium text-gray  w-full pb-2 border-b-[1px] border-solid border-[#0000001a]">
            Yesterday
          </p>
          {dummyData
            .filter((elem) => {
              return elem.name.toLowerCase().includes(searchVal.toLowerCase());
            })
            .map((elem, idx) => {
              return <TransactionDetailsComp {...elem} key={"his" + idx} />;
            })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default History;

const TransactionDetailsComp = ({ name, status, amount, currency }) => {
  return (
    <Link className="w-full" href={"/transaction"}>
      <div className="flex justify-between hover:bg-[#86a7bd1a] px-0 lg:px-5  py-5 rounded-md transition-all items-center w-full">
        <div className="flex gap-3 justify-start  items-center">
          <div className="rounded-full w-[40px] text-gray h-[40px] bg-[#0000001a] overflow-hidden grid place-items-center">
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
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
          </div>
          <div className="flex justify-start items-start flex-col">
            <h4 className="text-dark-blue text-base font-medium">{name}</h4>
            <p className="text-gray font-normal text-sm ">{status}</p>
          </div>
        </div>
        <div className="flex justify-start items-end flex-col">
          <h4 className="text-gray text-base font-medium">{amount}</h4>
          <p className="text-gray font-normal text-sm ">To {currency}</p>
        </div>
      </div>
    </Link>
  );
};
