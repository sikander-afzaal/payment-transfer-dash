const AddContactModal = ({ setModal }) => {
  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed w-full h-full top-0 left-0 bg-black opacity-60"
      ></div>
      <div className="fixed top-1/2 flex-col -translate-x-1/2 -translate-y-1/2 flex justify-start items-center  left-1/2 w-full max-w-[500px] px-5 py-10 bg-white rounded-lg gap-5">
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
        <h2 className="text-dark-blue text-2xl font-medium">Add New Contact</h2>
        <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
          <p className="text-sm font-medium">Name</p>
          <input
            type={"text"}
            className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
            placeholder="Name"
          />
        </div>
        <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
          <p className="text-sm font-medium">Email Address</p>
          <input
            type={"email"}
            className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
            placeholder="Email Address"
          />
        </div>
        <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
          <p className="text-sm font-medium">Phone Number</p>
          <input
            type={"text"}
            className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
            placeholder="Phone Number"
          />
        </div>
      </div>
    </>
  );
};

export default AddContactModal;
