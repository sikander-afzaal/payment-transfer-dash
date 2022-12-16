import Link from "next/link";

const TransactionModal = ({ setModal, failed }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed w-full h-full top-0 left-0 bg-black opacity-60"
      ></div>
      <div className="fixed top-1/2 flex-col -translate-x-1/2 -translate-y-1/2 flex justify-center items-center  left-1/2 w-[95%] max-w-[500px] px-5 py-20 bg-white rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          onClick={() => setModal(false)}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#00a2dd"
          className="w-8 h-8 absolute top-3 right-3 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        {failed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#d03238"
            className="w-[100px] h-[100px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#2ead4b"
            className="w-[100px] h-[100px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}

        <h2 className="font-medium mt-3  text-2xl text-dark-blue">
          {failed ? " Transaction Failed" : " Transaction Completed"}
        </h2>
        <p className="font-normal mb-3 mt-1 text-base text-gray">
          Transaction ID:{" "}
          <span className="font-medium text-blue">00000000000</span>
        </p>
        <Link href={"/transaction"}>
          <button className="w-[250px] mt-2 border-none h-[50px] font-medium text-[17px] rounded-md text-white bg-blue cursor-pointer hover:bg-cyan-600">
            View Details
          </button>
        </Link>
      </div>
    </>
  );
};

export default TransactionModal;
