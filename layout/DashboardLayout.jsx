import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AccountDetailsHeader from "../components/AccountDetailsHeader";

const DashboardLayout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(false);
  useEffect(() => {
    const resizeFunc = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px__1fr] min-h-screen">
      <div className="flex bg-white border-solid border-t-[#0000001a] border-t-[1px] lg:bg-[#f2f5f7] justify-end lg:justify-start w-full h-[50px] lg:h-screen fixed lg:sticky bottom-0 lg:top-0 left-0 items-center flex-col p-0 lg:pt-[60px] gap-12">
        <Link href={"/home"} className="lg:block hidden">
          <Image alt="" src={"/logo.png"} width={150} height={100} />
        </Link>

        <Link
          href={"/payment"}
          className="bg-green lg:grid hidden  place-items-center  rounded-sm mt-3 font-medium w-[115px] leading-[1] h-[40px] border-none text-white text-sm hover:bg-emerald-700 cursor-pointer"
        >
          Send Money
        </Link>
        <div className="flex px-5 lg:p-0 lg:flex-col flex-row justify-center lg:justify-start items-start lg:items-start  w-full gap-[40px] lg:gap-8">
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
            url={"/home"}
          />
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
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            }
            url="/history"
            text={windowWidth < 1024 ? "History" : "Transaction History"}
          />
          <Link
            href={"/payment"}
            className="lg:hidden relative w-[40px] h-[42px]  flex-col flex  justify-end items-center "
          >
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
          </Link>
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
            url="/recipients"
          />
          {/* <NavIcon
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
            url="/"
          />{" "} */}
        </div>
      </div>
      <div className="flex px-5 lg:px-[40px]  w-full pt-[30px] flex-col justify-start items-end">
        <AccountDetailsHeader />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

const NavIcon = ({ text, ico, hide, url }) => {
  const { pathname } = useRouter();
  const active = pathname === url;
  return (
    <Link
      href={`${url}`}
      className={`w-max lg:w-full  ${hide ? "lg:block hidden" : "block"}`}
    >
      <div
        className={` lg:flex-row flex
        } flex-col justify-start cursor-pointer items-center gap-2 lg:gap-4 lg:px-8 p-0 lg:py-2 w-[42px] lg:h-auto h-[42px] lg:w-full rounded-sm  lg:border-solid border-none lg:border-r-[3px] ${
          active ? "border-blue text-blue" : "border-transparent text-dark-blue"
        }`}
      >
        {ico}
        <p
          href="#"
          className="font-semibold text-[10px] lg:text-sm leading-[1] "
        >
          {text}
        </p>
      </div>
    </Link>
  );
};
