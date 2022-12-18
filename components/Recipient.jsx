import { useState } from "react";
import AddContactModal from "./AddContactModal";

const Recipient = ({ setSteps }) => {
  const [newContactModal, setNewContactModal] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const dummyData = [
    {
      name: "John Snow",
    },
    {
      name: "John Snow",
    },
    {
      name: "John Snow",
    },
    {
      name: "John Snow",
    },
  ];

  return (
    <div className="flex px-2 mt-[30px] lg:mt-[80px] justify-center flex-col gap-5 items-center w-full max-w-[562px]">
      {newContactModal && <AddContactModal setModal={setNewContactModal} />}
      <h2 className="text-dark-blue font-semibold text-xl text-center sm:text-[24px]">
        Who are you sending money to?
      </h2>
      <div className="flex text-[#0000001a] focus-within:text-dark-blue focus-within:border-dark-blue justify-start items-center border-solid px-2 gap-4 border-[#0000001a] border-[1px] w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 transition-colors"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          onChange={(e) => setSearchVal(e.target.value)}
          value={searchVal}
          placeholder="Name, email, phone"
          type="text"
          className=" w-full h-[50px] transition-colors outline-none text-dark-blue"
        />
      </div>
      <div
        onClick={() => setNewContactModal(true)}
        className="flex py-4 rounded-md hover:bg-[#86a7bd12] px-2 cursor-pointer   transition-all justify-between text-dark-blue w-full items-center"
      >
        <div className="flex text-dark-blue justify-center items-center gap-5">
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
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
          <p className="font-medium">New Contact</p>
        </div>
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="flex justify-start items-start gap-5 flex-col w-full">
        <p className="w-full text-gray px-2 font-normal text-base border-b-[1px] pb-2   border-solid border-b-[#0000001a]">
          All
        </p>
        {dummyData
          .filter((elem) => {
            return elem.name.toLowerCase().includes(searchVal.toLowerCase());
          })
          .map((elem, idx) => {
            return (
              <Contact setSteps={setSteps} {...elem} key={"contact" + idx} />
            );
          })}
      </div>
    </div>
  );
};

export default Recipient;

const Contact = ({ name, setSteps }) => {
  return (
    <div
      onClick={() => setSteps(2)}
      className="flex rounded-md hover:bg-[#86a7bd12] px-2 cursor-pointer py-4  transition-all justify-between text-dark-blue w-full items-center"
    >
      <div className="flex text-dark-blue justify-center items-center gap-5">
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
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
        <p className="font-medium">{name}</p>
      </div>
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
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};
