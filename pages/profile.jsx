import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";

const Profile = () => {
  const [editDetails, setEditDetails] = useState(false);
  const [cancelled, setCancelled] = useState(true);
  const [savePrompt, setSavePrompt] = useState(false);
  const DUMMY__DETAILS = {
    firstName: "Shaheer",
    LastName: "Ahamd",
    dob: "18 August 2004",
    phone: "+92 000000000",
    country: "India",
    city: "Delhi",
    address: "XYZ",
    postalCode: "XYZ",
  };
  return (
    <DashboardLayout>
      {savePrompt && (
        <>
          <div
            onClick={() => setSavePrompt(false)}
            className="fixed w-full h-full top-0 left-0 bg-black opacity-60"
          ></div>
          <div
            className="flex fixed top-1/2 left-1/2 w-[95%] max-w-[400px]
          h-[250px] rounded-lg gap-6 -translate-y-1/2 z-20 -translate-x-1/2 justify-center items-center bg-white shadow-lg flex-col"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              onClick={() => setSavePrompt(false)}
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
            <h2 className="text-dark-blue font-semibold text-xl text-center sm:text-[34px]">
              Confirm
            </h2>
            <button
              onClick={() => {
                setEditDetails(false);
                setCancelled(false);
                setSavePrompt(false);
              }}
              className="bg-transparent text-gray font-medium border-[1px] border-solid border-gray rounded h-[42px] w-[130px] text-base leading-[1] hover:bg-blue hover:border-blue transition-all hover:text-white"
            >
              Confirm
            </button>
          </div>
        </>
      )}
      <div className="flex mb-[90px] px-2 mt-[30px] lg:mt-[80px] justify-center flex-col gap-5 items-start self-start w-full max-w-[1100px]">
        <h2 className="text-dark-blue font-semibold text-xl text-center sm:text-[24px]">
          Your Details
        </h2>
        <div className="flex justify-center items-center gap-4 mt-2">
          <h5 className="rounded-full text-dark-blue text-2xl font-bold w-[72px] h-[72px] bg-[#86a7bd1a] grid place-items-center">
            SA
          </h5>
          <div>
            <label
              htmlFor="profile-pic"
              className="text-blue cursor-pointer font-medium underline text-sm"
            >
              Add account photo
            </label>
            <input
              type="file"
              className="appearance-none hidden"
              id="profile-pic"
            />
          </div>
        </div>
        <div className="w-full flex justify-start items-start flex-col mt-[30px]">
          <div className="w-full flex justify-between items-center">
            <p className="text-dark-blue font-medium text-sm">
              Personal Information
            </p>
            {editDetails ? (
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={() => {
                    setSavePrompt(true);
                  }}
                  className="bg-transparent text-gray font-medium border-[1px] border-solid border-gray rounded h-[32px] w-[60px] text-sm leading-[1] hover:bg-blue hover:border-blue transition-all hover:text-white"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditDetails(false);
                    setCancelled(true);
                  }}
                  className="bg-transparent text-gray font-medium border-[1px] border-solid border-gray rounded h-[32px] w-[80px] text-sm leading-[1] hover:bg-red hover:border-red transition-all hover:text-white"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setEditDetails(true);
                }}
                className="bg-transparent text-gray font-medium border-[1px] border-solid border-gray rounded h-[32px] w-[106px] text-sm leading-[1] hover:bg-blue hover:border-blue transition-all hover:text-white"
              >
                Edit Details
              </button>
            )}
          </div>
          <div className="flex justify-start items-start mt-[30px] flex-col w-full gap-[40px]">
            <div className="gap-[40px] lg:flex-row flex-col flex justify-between items-center w-full">
              <DetailsComp
                cancelled={cancelled}
                label="Full legal first and middle names"
                editable={editDetails}
                text={DUMMY__DETAILS.firstName}
                type="text"
              />

              <DetailsComp
                cancelled={cancelled}
                editable={editDetails}
                label="Full legal last name(s)"
                text={DUMMY__DETAILS.LastName}
                type="text"
              />
            </div>
            <div className="gap-[40px] lg:flex-row flex-col flex justify-between items-center w-full">
              <DetailsComp
                cancelled={cancelled}
                label="Date of birth"
                editable={editDetails}
                text={DUMMY__DETAILS.dob}
                type="dob"
              />

              <DetailsComp
                cancelled={cancelled}
                editable={editDetails}
                label="Phone"
                text={DUMMY__DETAILS.phone}
                type="text"
              />
            </div>
          </div>
          <p className="text-dark-blue font-medium text-sm mt-[40px]">
            Personal Information
          </p>
          <div className="flex justify-start items-start mt-[30px] flex-col w-full gap-[40px]">
            <div className="gap-[40px] lg:flex-row flex-col flex justify-between items-center w-full">
              <DetailsComp
                cancelled={cancelled}
                label="Country"
                editable={editDetails}
                text={DUMMY__DETAILS.country}
                type="text"
              />

              <DetailsComp
                cancelled={cancelled}
                editable={editDetails}
                label="City"
                text={DUMMY__DETAILS.city}
                type="text"
              />
            </div>
            <div className="gap-[40px] lg:flex-row flex-col flex justify-between items-center w-full">
              <DetailsComp
                cancelled={cancelled}
                label={DUMMY__DETAILS.address}
                editable={editDetails}
                text="XYZ"
                type="text"
              />

              <DetailsComp
                cancelled={cancelled}
                editable={editDetails}
                label="Postal Code"
                text={DUMMY__DETAILS.postalCode}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;

const DetailsComp = ({ label, text, editable, type, cancelled }) => {
  const [inputValue, setInputValue] = useState(text);
  const [dob, setDob] = useState({ date: "", month: "", year: "" });
  const [displayedVal, setDisplayedVal] = useState(text);
  const [displayDob, setDisplayDob] = useState({
    date: "",
    month: "",
    year: "",
  });
  useEffect(() => {
    if (type === "dob") {
      const splitDate = text.split(" ");
      const date = splitDate[0];
      const month = splitDate[1];
      const year = splitDate[2];
      setDob({ date, month, year });
      setDisplayDob({ date, month, year });
    }
  }, []);
  useEffect(() => {
    if (cancelled) {
      setInputValue(displayedVal);
      if (type === "dob") {
        setDob(displayDob);
      }
    } else {
      if (type === "dob") {
        setDisplayDob(dob);
      }
      setDisplayedVal(inputValue);
    }
  }, [cancelled]);

  return (
    <div className="flex w-full justify-start group  items-start gap-1 flex-col">
      <p className="text-gray text-base group-focus-within:text-dark-blue font-normal transition-all">
        {label}
      </p>
      {editable ? (
        type === "text" ? (
          <input
            type={"text"}
            className="w-full border-solid border-[#0000001a] border-[1px] outline-none focus:border-dark-blue transition-all h-[40px] rounded-lg pl-2 text-gray"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : type === "dob" ? (
          <div className="flex w-full justify-between items-center gap-2">
            <input
              type={"text"}
              className="w-full border-solid border-[#0000001a] border-[1px] outline-none focus:border-dark-blue transition-all h-[40px] rounded-lg pl-2 text-gray"
              value={dob.date}
              onChange={(e) =>
                setDob((prev) => {
                  return { ...prev, date: e.target.value };
                })
              }
            />
            <input
              type={"text"}
              className="w-full border-solid border-[#0000001a] border-[1px] outline-none focus:border-dark-blue transition-all h-[40px] rounded-lg pl-2 text-gray"
              value={dob.month}
              onChange={(e) =>
                setDob((prev) => {
                  return { ...prev, month: e.target.value };
                })
              }
            />
            <input
              type={"text"}
              className="w-full border-solid border-[#0000001a] border-[1px] outline-none focus:border-dark-blue transition-all h-[40px] rounded-lg pl-2 text-gray"
              value={dob.year}
              onChange={(e) =>
                setDob((prev) => {
                  return { ...prev, year: e.target.value };
                })
              }
            />
          </div>
        ) : (
          <input
            type={"text"}
            className="w-full border-solid border-[#0000001a] border-[1px] outline-none focus:border-dark-blue transition-all h-[40px] rounded-lg pl-2 text-gray"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )
      ) : (
        <h3 className="text-dark-blue font-normal text-lg">
          {type === "dob"
            ? `${displayDob.date} ${displayDob.month} ${displayDob.year}`
            : displayedVal}
        </h3>
      )}
    </div>
  );
};
