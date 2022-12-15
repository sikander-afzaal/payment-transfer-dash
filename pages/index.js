import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 xl:grid-cols-[0.3fr__0.7fr] w-full min-h-screen">
        <div className=" xl:flex hidden isolate overflow-hidden relative bg-dark-blue justify-start pt-[240px] items-center flex-col gap-5">
          <div className="flex flex-col justify-start items-center gap-4">
            <Image
              src={"/logo.svg"}
              width={200}
              height={50}
              style={{ objectFit: "contain" }}
            />
            <div className="flex justify-start items-start  mt-[40px] flex-col">
              <h3 className="text-white text-[26px] font-extrabold mb-4">
                New name, same login<span className="text-blue">.</span>
              </h3>
              <div className="flex text-white justify-start items-start mb-4 gap-4">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.257 14.014A5.922 5.922 0 0 0 18 9c0-3.3-2.7-6-6-6S6 5.7 6 9c0 2.1 1.071 3.943 2.743 5.014-2.614 1.243-4.457 3.9-4.457 6.986H6c0-3.3 2.7-6 6-6s6 2.7 6 6h1.714c0-3.086-1.842-5.743-4.457-6.986ZM7.714 9A4.298 4.298 0 0 1 12 4.714 4.298 4.298 0 0 1 16.286 9 4.298 4.298 0 0 1 12 13.286 4.298 4.298 0 0 1 7.714 9Z"></path>
                </svg>
                <p className="text-white">
                  Enter the same email and password <br /> you used for
                  TransferWise.
                </p>
              </div>
              <div className="flex  text-white justify-start mt-4 items-start gap-4">
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  focusable="false"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.143 1.719V5.19A10.26 10.26 0 0 0 12.43 1.72c-5.657 0-10.286 4.628-10.286 10.286 0 5.657 4.629 10.285 10.286 10.285 2.743 0 5.314-1.071 7.286-3l-1.2-1.2a8.74 8.74 0 0 1-6.086 2.486c-4.715 0-8.572-3.857-8.572-8.572 0-4.714 3.857-8.571 8.572-8.571 2.743 0 5.271 1.286 6.857 3.429H15v1.714h6a.86.86 0 0 0 .857-.857v-6h-1.714Z"></path>
                </svg>
                <p className="text-white">
                  If your login details were auto-saved, <br /> you{"'"}ll need
                  to save them again.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="self-start text-light-blue font-bold mt-3 underline cursor-pointer"
            >
              Need help? Read this article
            </a>
          </div>
          <div className="eclipse"></div>
        </div>
        <div className="flex px-5 justify-start flex-col gap-[16px] pt-[140px] items-center">
          <h4 className="text-dark-blue font-bold text-[26px]">Welcome back</h4>
          <p className="text-[16px] text-gray">
            New to Wise?{" "}
            <a href="#" className="text-light-blue underline">
              Sign up
            </a>
          </p>
          <form className="flex justify-center  max-w-[500px] items-center w-full gap-8 mt-4 flex-col">
            <div className="flex w-full focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
              <p className="text-sm font-medium">Your email address</p>
              <input
                type={"email"}
                className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
                placeholder="Your email address"
              />
            </div>
            <div className="flex w-full  focus-within:text-dark-blue text-gray flex-col justify-start items-start gap-2">
              <p className="text-sm font-medium">Your password</p>
              <input
                type={"password"}
                className="w-full h-[50px] rounded-md transition-all outline-none focus:border-dark-blue border-[1px] border-solid border-[#c9cbce] pl-2 text-base text-dark-blue"
                placeholder="Your password"
              />
            </div>
            <Link
              href={"/home"}
              className="bg-blue grid place-items-center hover:bg-cyan-600 w-full border-none h-[50px] text-white font-medium text-base rounded-md "
            >
              Log in
            </Link>
            <div className="flex justify-between items-center w-full max-w-full">
              <div className="flex justify-center items-center gap-2">
                <input type={"checkbox"} className="accent-blue" />
                <p className="text-gray font-normal text-sm leading-[1]">
                  Remember me
                </p>
              </div>{" "}
              <a href="#" className="text-light-blue underline font-medium">
                Trouble loggin in?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  z;
}
