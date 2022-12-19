import Link from "next/link";
import DashboardLayout from "../layout/DashboardLayout";

const RecipientDetails = () => {
  const DUMMY__DETAILS = {
    name: "John Snow",
    type: "Wallet",
    bankAccNum: "1234567",
    IFSC: "HDFC00001234",
    UPI: "jonsnow@icicibank",
    wallet: "jamesbond@nexgpay",
  };
  return (
    <DashboardLayout>
      <div className="flex justify-start min-h-full mb-5 items-center sm:items-start flex-col pt-[40px] sm:pt-5 w-full">
        <h2 className="text-dark-blue font-medium text-2xl flex justify-start items-center gap-5">
          <Link href={"/recipients"}>
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          Recipient Details
        </h2>
        <div className="border-[1px]  border-solid max-w-[1065px] pb-5 border-[#0000001a] w-full   mt-6">
          <div className="flex justify-between border-b-[1px] p-5 border-solid border-[#0000001a] items-center w-full">
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-start flex-col">
                <h4 className="text-dark-blue text-base font-medium">
                  {" "}
                  {DUMMY__DETAILS.name}
                </h4>
                <p className="text-gray font-normal text-sm ">
                  {DUMMY__DETAILS.type}
                </p>
              </div>
            </div>
          </div>
          <div className="flex  px-5 justify-between items-center w-full border-b-[1px] pb-4  py-0 pt-5 border-solid border-[#0000001a]">
            <p className="relative text-blue font-medium text-base">
              Details
              <span className="absolute left-1/2 -translate-x-1/2 top-[157%] bg-blue w-[150%] h-[3px]"></span>
            </p>
            <div className="flex justify-center text-blue items-center gap-3">
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
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
          <div className="w-full md:flex-row flex-col  px-5  md:pr-5 flex center items-start gap-10 mt-[30px]">
            <div className="flex justify-start items-start flex-col gap-2 w-full">
              <p className="text-dark-blue font-medium text-sm">
                Your account details
              </p>
              <p className="flex justify-between items-center w-full text-sm text-gray">
                Bank Account Number
                <span className="text-dark-blue">
                  {DUMMY__DETAILS.bankAccNum}
                </span>
              </p>
              <p className="flex justify-between items-center w-full text-sm text-gray">
                IFSC Code
                <span className="text-dark-blue">{DUMMY__DETAILS.IFSC}</span>
              </p>
              <p className="flex justify-between items-center w-full text-sm text-gray">
                UPI ID
                <span className="text-dark-blue">{DUMMY__DETAILS.UPI}</span>
              </p>
              <p className="flex justify-between items-center w-full text-sm text-gray">
                Wallet
                <span className="text-dark-blue">{DUMMY__DETAILS.wallet}</span>
              </p>
              <div className="flex mt-2 justify-start flex-col items-start w-full gap-2">
                <p className="text-dark-blue font-medium text-base">Note</p>
                <textarea
                  className="border-[1px] border-solid pt-2 pl-2 rounded-md border-[#0000001a] resize-none w-full h-[100px] text-gray font-sm"
                  placeholder="Add a few notes to help you later"
                ></textarea>
              </div>
              <div className="flex mt-2 justify-start flex-col items-start w-full gap-2">
                <p className="text-dark-blue font-medium text-base">
                  Attachment
                </p>
                <div className="flex justify-start items-center relative gap-2 h-[100px] w-full">
                  <input
                    id="file"
                    type="file"
                    className="appearance-none opacity-0 -z-10 absolute pointer-events-none"
                  />
                  <label
                    htmlFor="file"
                    className="w-full text-blue h-full border-[1px] border-solid p-3 cursor-pointer rounded-md border-[#0000001a] flex justify-start items-center gap-4 hover:bg-[#86a7bd1a]"
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
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                      />
                    </svg>
                    <div className="flex justify-start items-start flex-col gap-1">
                      <h4 className="text-blue font-medium text-base">
                        Upload file
                      </h4>
                      <p className="text-dark-blue text-sm font-normal">
                        PDF,JPG,JPEG,PNG,less than 10MB
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecipientDetails;
