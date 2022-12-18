import { useState } from "react";

const AddContactModal = ({ setModal }) => {
  const [step2, setStep2] = useState(false);
  const [method, setMethod] = useState("");
  const [openDrop, setOpenDrop] = useState(false);
  const [dropVal, setDropVal] = useState("Travel Payment");

  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed w-full h-full top-0 left-0 bg-black opacity-60"
      ></div>
      <div className="fixed top-1/2 flex-col -translate-x-1/2 -translate-y-1/2 flex justify-start items-center  left-1/2 w-[95%] max-w-[500px] px-5 py-10  bg-white rounded-lg gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          onClick={() => setModal(false)}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#00a2dd"
          className="w-6 h-6 absolute top-3 right-3 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        {step2 === false && (
          <>
            <h2 className="text-dark-blue text-2xl font-medium">
              Delivery Method
            </h2>
            <p className="text-gray items-center text-center  font-normal">
              How would you like the money delivered?
            </p>
            <div className="w-full mt-3 flex justify-start items-center gap-4 flex-col">
              <div
                onClick={() => setStep2("bank")}
                className="flex text-dark-blue border-solid border-[1px] border-gray py-3 hover:hover:bg-[#86a7bd12] px-3 transition-all rounded cursor-pointer  justify-between items-center gap-3 w-full"
              >
                <h3 className="text-lg font-medium">Bank Deposit</h3>
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
              <div
                onClick={() => setStep2("upi")}
                className="flex text-dark-blue border-solid border-[1px] border-gray py-3 hover:hover:bg-[#86a7bd12] px-3 transition-all rounded cursor-pointer  justify-between items-center gap-3 w-full"
              >
                <h3 className="text-lg font-medium">UPI</h3>
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
              <div
                onClick={() => setStep2("wallet")}
                className="flex text-dark-blue border-solid border-[1px] border-gray py-3 hover:hover:bg-[#86a7bd12] px-3 transition-all rounded cursor-pointer  justify-between items-center gap-3 w-full"
              >
                <h3 className="text-lg font-medium">Wallet</h3>
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
            </div>
          </>
        )}
        {step2 === "bank" && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#00a2dd"
              onClick={() => setStep2(false)}
              className="w-6 h-6 absolute top-4 left-4  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            <h2 className="text-dark-blue text-2xl font-medium">
              Bank Transfer
            </h2>
            <form className="flex justify-start items-center w-full flex-col gap-6 mt-4">
              <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
                <p className="text-sm font-medium">Bank Account Number</p>
                <input
                  type={"text"}
                  className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
                  placeholder="Bank Account Number"
                />
              </div>
              <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
                <p className="text-sm font-medium">Recipient Name</p>
                <input
                  type={"text"}
                  className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
                  placeholder="Recipient Name"
                />
              </div>
              <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
                <p className="text-sm font-medium">IFSC Code</p>
                <input
                  type={"text"}
                  className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
                  placeholder="IFSC Code"
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStep2("reason");
                  setMethod("bank");
                }}
                className="border-none text-base font-medium cursor-pointer bg-blue text-white rounded w-full max-w-[200px] h-[50px]"
              >
                Next
              </button>
            </form>
          </>
        )}
        {step2 === "upi" && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#00a2dd"
              onClick={() => setStep2(false)}
              className="w-6 h-6 absolute top-4 left-4  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            <h2 className="text-dark-blue text-2xl font-medium">
              Recipient UPI
            </h2>
            <form className="flex justify-start items-center w-full flex-col gap-6 mt-4">
              <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
                <p className="text-sm font-medium">
                  Virtual Payments Address (VPA)
                </p>
                <input
                  type={"text"}
                  className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
                  placeholder="Virtual Payments Address (VPA)"
                />
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStep2("reason");
                  setMethod("upi");
                }}
                className="border-none text-base font-medium cursor-pointer bg-blue text-white rounded w-full max-w-[200px] h-[50px]"
              >
                Next
              </button>
            </form>
          </>
        )}
        {step2 === "wallet" && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#00a2dd"
              onClick={() => setStep2(false)}
              className="w-6 h-6 absolute top-4 left-4  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            <h2 className="text-dark-blue text-2xl font-medium">Wallet</h2>
            <form className="flex justify-start items-center w-full flex-col gap-6 mt-4">
              <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
                <p className="text-sm font-medium">Email/Username</p>
                <input
                  type={"text"}
                  className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
                  placeholder="Email/Username"
                />
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setStep2("reason");
                  setMethod("wallet");
                }}
                className="border-none text-base font-medium cursor-pointer bg-blue text-white rounded w-full max-w-[200px] h-[50px]"
              >
                Next
              </button>
            </form>
          </>
        )}
        {step2 === "reason" && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#00a2dd"
              onClick={() => setStep2(method)}
              className="w-6 h-6 absolute top-4 left-4  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>

            <h2 className="text-dark-blue text-2xl font-medium">
              Reason for Transfer
            </h2>
            <div className="w-full mt-2 flex justify-start items-center relative gap-0">
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
                e.preventDefault();
                setModal(false);
              }}
              className="border-none mt-4 text-base font-medium cursor-pointer bg-blue text-white rounded w-full max-w-[200px] h-[50px]"
            >
              Confirm
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default AddContactModal;

// <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
//   <p className="text-sm font-medium">Name</p>
//   <input
//     type={"text"}
//     className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
//     placeholder="Name"
//   />
// </div>
// <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
//   <p className="text-sm font-medium">Email Address</p>
//   <input
//     type={"email"}
//     className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
//     placeholder="Email Address"
//   />
// </div>
// <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
//   <p className="text-sm font-medium">Phone Number</p>
//   <input
//     type={"text"}
//     className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
//     placeholder="Phone Number"
//   />
// </div>
