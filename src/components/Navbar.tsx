import React, { useState } from "react";
import { data } from "../assets/data";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [showProfile, setShowProfile] = useState<boolean>(false);

  const hideNavbarIcons: string[] = [
    "/login",
    "/sign-up",
    "/forget-password",
    "/forget-password/otp-verification",
    "/forget-password/reset-password",
  ];

  const shouldShowIcons: boolean = !hideNavbarIcons.includes(location.pathname);

  const profileSection = (): React.ReactNode => {
    return (
      <div className="absolute right-0  bg-white text-black shadow-lg rounded-lg w-40 p-3 z-50 flex flex-col justify-center items-center gap-2">
        <p className="cursor-pointer text-[darkBlue] hover:text-red-500 font-semibold">
          Profile
        </p>
        <p
          onClick={() => {
            Cookies.remove("token");
            window.location.href = "/login";
          }}
          className="cursor-pointer text-[darkBlue] hover:text-red-500 font-semibold"
        >
          Logout
        </p>
      </div>
    );
  };

  return (
    <div className="w-full h-[80px] bg-darkBlue flex justify-between items-center pl-2 md:pl-[57px] fixed top-0 z-30">
      <img className="w-15 h-10 md:w-28 md:h-14" src={data.logo} alt="logo" />

      {/* icons container */}
      {shouldShowIcons && (
        <div className="w-[100%] xl:w-[35%] flex justify-end items-center gap-3 md:gap-8 pr-2 md:pr-6">
          <div className="relative">
            <select
              className="appearance-none bg-[#EF4B41] focus:ring-2 focus:ring-white outline-none text-white px-1 py-1 pr-3 text-[10px] md:text-[16px] md:px-4 md:py-2 md:pr-12 rounded cursor-pointer"
              name=""
              id=""
            >
              <option value="Team">Soccer</option>
            </select>
            {/* Custom dropdown arrow */}
            <img
              src={data.dropDownIcon}
              alt="arrow"
              className="absolute right-0.5 md:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none w-2 md:w-4"
            />
          </div>

          <img
            className="w-5 h-5 md:w-[24px] md:h-[23px]"
            src={data.notificationIcon}
            alt="notification"
          />
          <img
            className="w-5 h-5 md:w-[27px] md:h-[27px]"
            src={data.messageIcon}
            alt="message"
          />
          {/* <div
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
            className="rounded-full border sm:border-[3px] md:border-[7px] border-[#C1E0FF47] "
          >
            <img
              className="w-6 h-6 sm:w-[20px] sm:h-[20px] md:w-[40px] md:h-[40px] rounded-full"
              src={data.profileImg}
              alt="profile"
            />
          </div> */}

          {/* Profile Hover */}
          <div
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
            className="relative"
          >
            <div className="rounded-full border sm:border-[3px] md:border-[7px] border-[#C1E0FF47]">
              <img
                className="w-6 h-6 sm:w-[20px] sm:h-[20px] md:w-[40px] md:h-[40px] rounded-full"
                src={data.profileImg}
                alt="profile"
              />
            </div>

            {/* Profile Popup */}
            {showProfile && profileSection()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
