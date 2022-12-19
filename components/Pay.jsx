import { useState } from "react";
import TransactionModal from "./TransactionModal";

const Pay = () => {
  const DUMMY__DATA = {
    sending: "20 GBP",
    fee: "0.57 GBP",
    convert: "19.6 GBP",
    rate: "278.054 GBP",
    recieve: "5,402.59 INR",
    arrivalTime: "30 min",
    name: "Shaheer Ahmad",
    email: "XYZ@gmail.com",
    IBAN: "XXX XXX XXX XXX XXX",
    bankCode: "XXXXXXXXX",
  };
  const [radioBtnToggle, setRadioBtnToggle] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [modal, setModal] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  return (
    <div className="lg:flex-row flex-col flex px-5 justify-start w-full max-w-[1000px] items-start gap-[50px] mt-[30px] lg:mt-[80px]">
      {modal && <TransactionModal failed={modalStatus} setModal={setModal} />}
      {/* //payment option ----------------- */}
      <div className="flex justify-start w-full items-start gap-5 flex-col">
        <h2 className="text-dark-blue text-2xl font-medium mb-6">
          How would you like to pay?
        </h2>
        <PaymentOption
          head="Low cost transfer"
          ico={
            <svg
              width="24"
              height="24"
              fill="currentColor"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.539 2.832a1.286 1.286 0 0 1 1.353.014l8.567 5.43A.857.857 0 0 1 21 9.856h-1.286v3H18v-3h-5.143V21.429H2.571v-1.714h1.715V9.857H3a.857.857 0 0 1-.444-1.59l8.983-5.435Zm.66 1.604 5.848 3.707H6.072L12.2 4.436ZM6 19.714V9.857h5.143v9.857H6Zm10.286-3.43h2.645l-4.109 4.109 1.213 1.212 4.108-4.108v2.645h1.714v-4.286c0-.71-.575-1.286-1.286-1.286h-4.285v1.714Z"
              ></path>
            </svg>
          }
          name="Transfer the money from your bank account"
          desc="Transfer the money to Wise using your bank account. Should arrive in 31 minutes."
          setRadio={setRadioBtnToggle}
          radio={radioBtnToggle}
          num={0}
        />
        <PaymentOption
          head="Low cost transfer"
          ico={
            <svg
              width="24"
              height="24"
              fill="currentColor"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.539 2.832a1.286 1.286 0 0 1 1.353.014l8.567 5.43A.857.857 0 0 1 21 9.856h-1.286v3H18v-3h-5.143V21.429H2.571v-1.714h1.715V9.857H3a.857.857 0 0 1-.444-1.59l8.983-5.435Zm.66 1.604 5.848 3.707H6.072L12.2 4.436ZM6 19.714V9.857h5.143v9.857H6Zm10.286-3.43h2.645l-4.109 4.109 1.213 1.212 4.108-4.108v2.645h1.714v-4.286c0-.71-.575-1.286-1.286-1.286h-4.285v1.714Z"
              ></path>
            </svg>
          }
          name="Transfer the money from your bank account"
          desc="Transfer the money to Wise using your bank account. Should arrive in 31 minutes."
          setRadio={setRadioBtnToggle}
          radio={radioBtnToggle}
          num={2}
        />
        <PaymentOption
          head="Low cost transfer"
          ico={
            <svg
              width="24"
              height="24"
              fill="currentColor"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.539 2.832a1.286 1.286 0 0 1 1.353.014l8.567 5.43A.857.857 0 0 1 21 9.856h-1.286v3H18v-3h-5.143V21.429H2.571v-1.714h1.715V9.857H3a.857.857 0 0 1-.444-1.59l8.983-5.435Zm.66 1.604 5.848 3.707H6.072L12.2 4.436ZM6 19.714V9.857h5.143v9.857H6Zm10.286-3.43h2.645l-4.109 4.109 1.213 1.212 4.108-4.108v2.645h1.714v-4.286c0-.71-.575-1.286-1.286-1.286h-4.285v1.714Z"
              ></path>
            </svg>
          }
          name="Transfer the money from your bank account"
          desc="Transfer the money to Wise using your bank account. Should arrive in 31 minutes."
          setRadio={setRadioBtnToggle}
          radio={radioBtnToggle}
          num={1}
        />
        <PaymentOption
          head="Low cost transfer"
          ico={
            <svg
              width="24"
              height="24"
              fill="currentColor"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.539 2.832a1.286 1.286 0 0 1 1.353.014l8.567 5.43A.857.857 0 0 1 21 9.856h-1.286v3H18v-3h-5.143V21.429H2.571v-1.714h1.715V9.857H3a.857.857 0 0 1-.444-1.59l8.983-5.435Zm.66 1.604 5.848 3.707H6.072L12.2 4.436ZM6 19.714V9.857h5.143v9.857H6Zm10.286-3.43h2.645l-4.109 4.109 1.213 1.212 4.108-4.108v2.645h1.714v-4.286c0-.71-.575-1.286-1.286-1.286h-4.285v1.714Z"
              ></path>
            </svg>
          }
          name="Transfer the money from your bank account"
          desc="Transfer the money to Wise using your bank account. Should arrive in 31 minutes."
          setRadio={setRadioBtnToggle}
          radio={radioBtnToggle}
          num={3}
        />
      </div>
      {/* //payment details ------------------ */}
      <div className="flex justify-start items-start flex-col gap-4 w-full max-w-full lg:max-w-[340px]">
        <div className="flex justify-start items-start flex-col px-3 w-full gap-3  py-5 border-solid border-[1px] border-[#0000001a]">
          <p className="text-gray text-sm font-medium">Transfer details</p>
          <p className="text-dark-blue w-full flex justify-between items-center font-normal text-sm">
            You send exactly{" "}
            <span className="font-medium text-xl">{DUMMY__DATA.sending}</span>
          </p>
          <p className="text-green w-full flex justify-between items-center font-normal text-sm">
            Total fees (included){" "}
            <span className="font-medium text-base">{DUMMY__DATA.fee}</span>
          </p>
          <p className="text-dark-blue w-full flex justify-between items-center font-normal text-sm">
            Total amount we{"'"}ll convert{" "}
            <span className="font-normal text-base">{DUMMY__DATA.convert}</span>
          </p>
          <p className="text-dark-blue w-full flex justify-between items-center font-normal text-sm">
            Guaranteed rate (3 hours)
            <span className="font-normal text-base">{DUMMY__DATA.rate}</span>
          </p>
          <p className="text-dark-blue w-full flex justify-between items-center font-normal text-sm">
            You get{" "}
            <span className="font-medium text-xl">{DUMMY__DATA.recieve}</span>
          </p>{" "}
          <p className="text-dark-blue w-full flex justify-between items-center font-normal text-sm">
            Should arrive
            <span className="font-normal text-base">
              in {DUMMY__DATA.arrivalTime}
            </span>
          </p>
          <div className="w-full pt-3 mt-4 border-solid border-t-[1px] border-[#0000001a] flex justify-start items-start flex-col gap-3">
            <p className="text-gray w-full flex justify-between items-center font-normal text-sm">
              Name
              <span className="font-normal text-dark-blue text-base">
                {DUMMY__DATA.name}
              </span>
            </p>
            <p className="text-gray w-full flex justify-between items-center font-normal text-sm">
              Email
              <span className="font-normal text-dark-blue text-base">
                {DUMMY__DATA.email}
              </span>
            </p>
            <p className="text-gray w-full flex justify-between items-center font-normal text-sm">
              IBAN
              <span className="font-normal text-dark-blue text-base">
                {DUMMY__DATA.IBAN}
              </span>
            </p>
            <p className="text-gray w-full flex justify-between items-center font-normal text-sm">
              Bank code (BIC/SWIFT)
              <span className="font-normal text-dark-blue text-base">
                {DUMMY__DATA.bankCode}
              </span>
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            setModal(true);
            setModalStatus(false);
          }}
          className="w-full border-none h-[50px] font-medium text-[17px] rounded-md text-white bg-blue cursor-pointer hover:bg-cyan-600"
        >
          Continue to payment
        </button>
        <button
          onClick={() => {
            setModal(true);
            setModalStatus(true);
          }}
          className="w-full border-[1px] border-solid border-red text-red h-[50px] text-[17px] rounded-md hover:text-white bg-transparent transition-colors font-medium cursor-pointer hover:bg-red"
        >
          Cancel Payment
        </button>
        <a href="#" className="text-blue underline font-semibold text-base">
          Looking for a different way to pay?
        </a>
      </div>
    </div>
  );
};

export default Pay;

const PaymentOption = ({ head, name, desc, ico, setRadio, radio, num }) => {
  return (
    <div
      onClick={() =>
        setRadio((prev) => {
          const copy = Array(prev.lenth).fill(false);
          copy[num] = true;
          return copy;
        })
      }
      className="flex justify-start gap-2 text-dark-blue  w-full items-start flex-col"
    >
      <h6 className="border-b-[1px] pb-[5px] w-full  text-dark-blue text-sm border-solid border-b-[#0000001a]">
        {head}
      </h6>
      <div className="flex group rounded-md  hover:bg-[#86a7bd12] px-2 cursor-pointer py-4  transition-all justify-between items-center gap-4 w-full">
        <div className="flex justify-start items-center gap-5">
          <div className="bg-[#0000001a] group-hover:bg-white transition-all  rounded-full min-w-[40px] min-h-[40px] grid place-items-center cursor-pointer">
            {ico}
          </div>
          <div className="flex justify-start items-start gap-1 flex-col">
            <h6 className="text-dark-blue font-medium text-base">{name}</h6>
            <p className="text-gray text-sm max-w-[500px]">{desc}</p>
          </div>
        </div>
        <div
          className={`border-solid ${
            radio[num] ? "border-blue" : "border-gray"
          } border-[1px] rounded-full min-w-[24px] min-h-[24px] flex justify-center items-center`}
        >
          {radio[num] && <div className="rounded-full bg-blue w-3 h-3"></div>}
        </div>
      </div>
    </div>
  );
};
