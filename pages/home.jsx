import Image from "next/image";
import DashboardLayout from "../layout/DashboardLayout";

const Home = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-start h-full items-center sm:items-start flex-col pt-[40px] sm:pt-5 w-full">
        <h2 className="text-dark-blue text-2xl font-medium">Home</h2>
        <div className="flex mt-[20px] flex-wrap justify-center sm:justify-start items-center gap-4">
          <CurrencyCard flag={"/flag.webp"} name="UK GBP" amount="0.00" />
          <CurrencyCard flag={"/flag.webp"} name="UK GBP" amount="0.00" />
        </div>
        {/* <div className="flex flex-col h-full justify-center items-center gap-4 self-center">
            <p className="text-gray max-w-[400px] text-center">
              This is where you will see your transactions and activity. Choose
              how you would like to started.
            </p>{" "}
            <Link href={"/payment"}>
              <button className="bg-green block  rounded-sm mt-3 font-medium w-[115px] leading-[1] h-[40px] border-none text-white text-sm hover:bg-emerald-700 cursor-pointer">
                Send Money
              </button>
            </Link>
          </div> */}
      </div>
    </DashboardLayout>
  );
};

export default Home;

const CurrencyCard = ({ flag, amount, name }) => {
  return (
    <div className="cursor-pointer hover:bg-[#38c8ff1a] flex justify-between items-start flex-col p-5 bg-[#86a7bd1a] w-[208px] h-[208px] rounded-lg">
      <div className="relative overflow-hidden w-[48px] h-[48px] rounded-full">
        <Image src={flag} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="flex justify-start items-start flex-col gap-2">
        <h5 className="text-dark-blue text-xl font-normal leading-[1]">
          {amount}
        </h5>
        <p className="text-gray text-base leading-[1]">{name}</p>
      </div>
    </div>
  );
};
