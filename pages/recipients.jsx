import Link from "next/link";
import { useState } from "react";
import AddContactModal from "../components/AddContactModal";
import DashboardLayout from "../layout/DashboardLayout";

const Recipients = () => {
  const [addContactModal, setAddContactModal] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const dummyData = [
    {
      name: "John Snow",
      status: "Wallet",
      amount: "20 GBP",
      currency: "INR",
    },
    {
      name: "John Snow",
      status: "Wallet",
      amount: "20 GBP",
      currency: "INR",
    },
    {
      name: "John Snow",
      status: "Wallet",
      amount: "20 GBP",
      currency: "INR",
    },
    {
      name: "John Snow",
      status: "Wallet",
      amount: "20 GBP",
      currency: "INR",
    },
  ];
  return (
    <DashboardLayout>
      <div className="flex  max-w-[1200px] justify-start h-full items-center sm:items-start self-start flex-col pt-[40px] sm:pt-5 w-full">
        {addContactModal && <AddContactModal setModal={setAddContactModal} />}
        <h2 className="text-dark-blue text-2xl font-medium">Recipients</h2>
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
          <div className="flex justify-between mb-2 items-center  w-full pb-2 border-b-[1px] border-solid border-[#0000001a]">
            <p className="text-base  font-medium text-gray">Your recipients</p>
            <button
              onClick={() => setAddContactModal((prev) => !prev)}
              className="text-sm font-medium cursor-pointer px-4 h-[40px] bg-blue text-white rounded"
            >
              Add Recipient
            </button>
          </div>
          {dummyData
            .filter((elem) => {
              return elem.name.toLowerCase().includes(searchVal.toLowerCase());
            })
            .map((elem, idx) => {
              return <RecipientTab {...elem} key={"resc" + idx} />;
            })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Recipients;

const RecipientTab = ({ name, status, country, currency }) => {
  return (
    <Link className="w-full" href={"/recipient__details"}>
      <div className="flex justify-between hover:bg-[#86a7bd1a] px-0 lg:px-5  py-5 rounded-md transition-all items-center w-full">
        <div className="flex gap-3 justify-start  items-center">
          <div className="rounded-full w-[40px] text-gray h-[40px] bg-[#0000001a] overflow-hidden grid place-items-center">
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
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className="flex justify-start items-start flex-col">
            <h4 className="text-dark-blue text-base font-medium">{name}</h4>
            <p className="text-gray font-normal text-sm ">{status}</p>
          </div>
        </div>
        {/* <div className="flex justify-start items-end flex-col">
          <h4 className="text-gray text-base font-medium">{country}</h4>
          <p className="text-gray font-normal text-sm ">To {currency}</p>
        </div> */}
      </div>
    </Link>
  );
};
