import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px__1fr] min-h-screen">
      <div className="flex bg-white border-solid border-t-[#0000001a] border-t-[1px] lg:bg-[#f2f5f7] justify-center lg:justify-start w-full h-[50px] lg:h-screen fixed lg:sticky bottom-0 lg:top-0 left-0 items-center flex-col p-0 lg:pt-[60px] gap-12">
        <Image
          src={"/wise-ico.svg"}
          className="lg:block hidden"
          width={24}
          height={24}
        />
        <button className="bg-green lg:block hidden  rounded-sm mt-3 font-medium w-[115px] leading-[1] h-[40px] border-none text-white text-sm hover:bg-emerald-700 cursor-pointer">
          Send Money
        </button>
        <div className="flex px-5 lg:p-0 lg:flex-col flex-row justify-center lg:justify-start items-center lg:items-start  w-full gap-[40px] lg:gap-8">
          <NavIcon
            ico={
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            }
            text="Home"
            active
          />
          <NavIcon
            text="Cards"
            ico={
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
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
            }
          />
          <button className="lg:hidden relative w-[40px] h-[42px]  flex-col flex  justify-end items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-10 p-[6px] h-10 absolute bottom-[100%] z-1- translate-y-1/2 rounded-full bg-green"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
            {/* <span className="absolute bg-transparent rounded-full border-b-0 -top-[63%] -z-10 border-solid border-[1px] border-[#0000001a] w-12 h-12 "></span> */}
            <p className="font-semibold text-dark-blue text-[10px] lg:text-sm leading-[1] ">
              Send
            </p>
          </button>
          <NavIcon
            text="Recipients"
            ico={
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
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            }
          />
          <NavIcon
            text="Manage"
            ico={
              <svg
                className="w-6 h-6"
                fill="currentColor"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.286 11.144h6a.86.86 0 0 0 .857-.857v-6a.86.86 0 0 0-.857-.857h-6a.86.86 0 0 0-.857.857v6a.86.86 0 0 0 .857.857ZM9.429 9.43H5.143V5.144h4.286V9.43Zm4.285 1.714h6a.86.86 0 0 0 .858-.857v-6a.86.86 0 0 0-.857-.857h-6a.86.86 0 0 0-.858.857v6a.86.86 0 0 0 .857.857Zm5.143-1.714h-4.285V5.144h4.285V9.43Zm-8.571 11.142h-6a.86.86 0 0 1-.857-.857v-6a.86.86 0 0 1 .857-.858h6a.86.86 0 0 1 .857.858v6a.86.86 0 0 1-.857.857Zm-5.143-1.715h4.286v-4.285H5.143v4.285Zm8.572 1.715h6a.86.86 0 0 0 .857-.857v-6a.86.86 0 0 0-.857-.858h-6a.86.86 0 0 0-.858.858v6a.86.86 0 0 0 .858.857Zm5.142-1.715h-4.285v-4.285h4.285v4.285Z"
                ></path>
              </svg>
            }
          />
          {window.innerWidth > 1024 && (
            <NavIcon
              text="Earn $50"
              ico={
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
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const NavIcon = ({ active, text, ico }) => {
  return (
    <div
      className={`flex lg:flex-row flex-col justify-start cursor-pointer items-center gap-2 lg:gap-4 lg:px-8 p-0 lg:py-2 w-[40px] lg:h-auto h-[42px] lg:w-full rounded-sm  lg:border-solid border-none lg:border-r-[3px] ${
        active ? "border-blue text-blue" : "border-transparent text-dark-blue"
      }`}
    >
      {ico}
      <a href="#" className="font-semibold text-[10px] lg:text-sm leading-[1] ">
        {text}
      </a>
    </div>
  );
};
