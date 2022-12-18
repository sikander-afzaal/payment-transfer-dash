import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AccountDetailsHeader from "../components/AccountDetailsHeader";
import Amount from "../components/Amount";
import Pay from "../components/Pay";
import Recipient from "../components/Recipient";
import Review from "../components/Review";

const Payment = () => {
  const [steps, setSteps] = useState(0);

  return (
    <div className="flex flex-col pb-5  justify-center items-center w-full gap-3">
      <div className="border-b-[1px] px-5 lg:pb-0 sm:pb-6 pb-0  border-solid border-b-[#0000001a] flex justify-center items-center w-full">
        <div className="grid grid-cols-2 grid-rows-[auto__auto] lg:flex min-h-[96px] py-[24px] justify-between  items-center gap-4 w-full max-w-[1320px]">
          <div className="row-span-1 col-start-1 col-end-2">
            <Link href={"/home"}>
              <Image alt="" src={"/logo.png"} width={125} height={24} />
            </Link>
          </div>
          <div className="w-full max-w-[90%] justify-self-center lg:max-w-[562px] col-start-1 col-end-3 row-start-2 row-end-3   relative ">
            {/* progress bar --------------------- */}
            <div className="w-[100%] h-[2px] bg-[#86a7bd1a] relative">
              <div
                className={`absolute h-full bg-progress top-1/2 -translate-y-1/2 left-0 ${
                  steps === 0 ? "w-0" : ""
                } ${steps === 1 ? "w-[36.333%]" : ""} ${
                  steps === 2 ? "w-[69.667%]" : ""
                } ${steps === 3 ? "w-full" : ""}`}
              >
                <span className="bg-dark-blue rounded-full w-[7px] h-[7px] absolute left-full top-1/2 -translate-y-1/2"></span>
              </div>
            </div>
            {/* progress bar end ----------------------- */}
            <p
              onClick={() => setSteps(0)}
              className={`${
                steps === 0 ? " text-dark-blue" : "text-blue"
              }  cursor-pointer sm:block hidden absolute top-2  -left-[2%] lg:-left-[4%] font-medium text-sm`}
            >
              Amount
            </p>
            <p
              onClick={() => setSteps(1)}
              className={`${
                steps === 1 ? " text-dark-blue pointer-events-auto" : ""
              } ${steps > 1 ? "text-blue pointer-events-auto" : ""} ${
                steps < 1 ? "text-gray pointer-events-none" : ""
              }  cursor-pointer sm:block hidden absolute top-2  left-[33.3333%]  font-medium text-sm`}
            >
              Recipient
            </p>
            <p
              onClick={() => setSteps(2)}
              className={`${
                steps === 2 ? " text-dark-blue pointer-events-auto" : ""
              } ${steps > 2 ? "text-blue pointer-events-auto" : ""} ${
                steps < 2 ? "text-gray  pointer-events-none" : ""
              }   cursor-pointer sm:block hidden absolute top-2   left-[66.6667%] font-medium text-sm`}
            >
              Review
            </p>
            <p
              onClick={() => setSteps(3)}
              className={`${
                steps === 3 ? " text-dark-blue pointer-events-auto" : ""
              } ${steps > 3 ? "text-blue pointer-events-auto" : ""} ${
                steps < 3 ? "text-gray pointer-events-none" : ""
              }   cursor-pointer sm:block hidden absolute top-2  left-[98%]  font-medium text-sm`}
            >
              Pay
            </p>
          </div>
          <div className="row-span-1 col-start-2 col-end-3 justify-self-end">
            <AccountDetailsHeader />
          </div>
        </div>
      </div>
      {steps === 0 && <Amount setSteps={setSteps} />}
      {steps === 1 && <Recipient setSteps={setSteps} />}
      {steps === 2 && <Review setSteps={setSteps} />}
      {steps === 3 && <Pay setSteps={setSteps} />}
    </div>
  );
};

export default Payment;
