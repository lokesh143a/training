import React from "react";
import { useState } from "react";
import { data } from "../../assets/data";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";

type ClubsData = {
  id: string | number;
  clubName: string;
  country: string;
  competitions: string;
  team: string | number;
};

const originalClubData: ClubsData[] = [
  {
    id: "01",
    clubName: "Manchester United FC",
    country: "North West England",
    competitions: "Premier League",
    team: 20,
  },
  {
    id: "02",
    clubName: "Manchester United FC",
    country: "North West England",
    competitions: "Premier League",
    team: 20,
  },
];

const tableHeaders = ["CLUB NAME", "COUNTRY", "COMPETITIONS", "TEAM", "MANAGE"];

const clubKeys = [
  "clubName",
  "country",
  "competitions",
  "team",
  "manage",
];

const Club: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [selectedClub, setSelectedClub] = useState<string>("");

  //   image upload path
  const [fileName, setFileName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditClubPopUp, setisEditClubPopUp] =
    useState<boolean>(false);

  // handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name); // or file.path for desktop apps like Electron
    }
  };

  // filtered data
  const filteredData = originalClubData.filter((item) => {
    const matchesSearch = item.clubName
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch
  });

  const transformedTableData: Array<Record<string, React.ReactNode>> =
    filteredData.map((item) => ({
      ...item,
      clubName: (
        <p
          onClick={() => navigate("/club-team-management")}
          className="text-[#383838] font-bold text-12px md:text-[20px] cursor-pointer hover:text-gray-600 "
        >
          {item.clubName}
        </p>
      ),
      
      manage: (
        <div className="flex items-center gap-2 md:gap-4">
          <img
            onClick={() => setisEditClubPopUp(true)}
            className="md:w-[16.67px] md:h-[18.32px] cursor-pointer"
            src={data.editIcon}
            alt="Edit"
          />
          <img
            className="md:w-[16.5px] md:h-[15.13px] cursor-pointer"
            src={data.deleteIcon}
            alt="Delete"
          />
        </div>
      ),
    }));

  const filterSection = () => {
    return (
      <div className="flex flex-wrap gap-3">
        <div className="flex justify-between items-center border border-[#C7C7C7] rounded-[7.32px] px-3 py-2 md:w-[396px] md:h-[45px] ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="placeholder:text-[16px] w-full focus:outline-none"
          />
          <img
            className="h-[25.3px] w-[25.31px]"
            src={data.searchIcon}
            alt=""
          />
        </div>
        {/* select grade */}
        <div className="relative flex w-full max-w-[180px] md:w-[153px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
            className="w-full appearance-none bg-transparent text-[12px] md:text-[16px] focus:outline-none"
            name=""
            id=""
          >
            <option>Select Club</option>
          </select>

          {/* Custom dropdown icon */}
          <img
            className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
            src={data.downArrow}
            alt="Dropdown Arrow"
          />
        </div>

        {/* select competition */}
        <div className="relative flex w-full max-w-[180px] md:w-[180px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            className="w-full appearance-none bg-transparent text-[12px] md:text-[16px] focus:outline-none"
            name=""
            id=""
          >
            <option>Select Competition</option>
          </select>

          {/* Custom dropdown icon */}
          <img
            className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
            src={data.downArrow}
            alt="Dropdown Arrow"
          />
        </div>

        {/* select country */}
        <div className="relative flex w-full max-w-[180px] md:w-[153px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            className="w-full appearance-none bg-transparent text-[12px] md:text-[16px] focus:outline-none"
            name=""
            id=""
          >
            <option>Select Country</option>
          </select>

          {/* Custom dropdown icon */}
          <img
            className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
            src={data.downArrow}
            alt="Dropdown Arrow"
          />
        </div>

        {/* select season */}
        <div className="relative flex w-full max-w-[170px] md:w-[147px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            className="w-full appearance-none bg-transparent text-[12px] md:text-[16px] focus:outline-none"
            name=""
            id=""
          >
            <option>Select Season</option>
          </select>

          {/* Custom dropdown icon */}
          <img
            className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
            src={data.downArrow}
            alt="Dropdown Arrow"
          />
        </div>

        {/* sort by */}
        <div className="relative flex w-full max-w-[160px] md:w-[104px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            className="w-full appearance-none bg-transparent text-[12px] md:text-[16px] focus:outline-none"
            name=""
            id=""
          >
            <option>Sort By</option>
          </select>

          {/* Custom dropdown icon */}
          <img
            className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
            src={data.downArrow}
            alt="Dropdown Arrow"
          />
        </div>
      </div>
    );
  };

  const modalPopUp = () => {
    return (
      <div className="inset-0 fixed flex items-center justify-center">
        <form className="max-h-[489.3px] md:h-[489.3px] w-[250px] md:w-[526px] px-[10px] md:px-[20px] py-[16px] md:py-[32px] border shadow-md bg-white rounded-[9.96px] flex flex-col gap-2 md:gap-4">
          <h1 className="text-[#313131] font-bold w-full text-center text-[12px] md:text-[24px] ">
            Create New Club
          </h1>

          {/* id */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Club ID
            </label>
            <input
              disabled
              className="border border-[#E5E5E5] h-[42px] px-2 md:px-4  outline-none rounded-[4px] placeholder:opacity-[60%] "
              type="text"
              placeholder={`00${originalClubData.length + 1}`}
            />
          </div>
          {/* club name */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Club Name
            </label>
            <input
              className="border border-[#E5E5E5] h-[42px] px-2 md:px-4  outline-none rounded-[4px]  "
              type="text"
            />
          </div>

          {/* select country */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Country Name
            </label>
            <div className="relative border border-[#E5E5E5] h-[42px] px-2 md:px-4 rounded-[4px] flex ">
              <select
                className=" w-full outline-none bg-transparent appearance-none text-[#646464] text-[11px] md:text-[16px]"
                name=""
                id=""
              >
                <option>Select</option>
              </select>

              {/* Custom dropdown icon */}
              <img
                className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
                src={data.downArrow}
                alt="Dropdown Arrow"
              />
            </div>
          </div>

          {/* upload logo */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Logo
            </label>
            <div className="relative border border-[#E5E5E5] h-[42px] px-2 md:px-4 rounded-[4px] flex justify-between items-center">
              {/* Show file name or default text on the left */}
              <p className="text-left text-sm text-[#646464] font-normal text-[11px] md:text-[16px] ">
                {fileName ? fileName : "Upload Logo"}
              </p>

              {/* Upload Button on the right */}
              <label
                htmlFor="upload-logo"
                className="border border-[#C7C7C7] text-[#777777] text-[8px] py-[5.98px] px-[11.21px]  md:text-[12px] bg-[#E5E5E5] w-auto md:w-[100px] h-[29px] rounded-[5.96px] cursor-pointer flex justify-center items-center"
              >
                Upload Logo
              </label>

              {/* Hidden file input */}
              <input
                type="file"
                id="upload-logo"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* add club button */}
          <Button
            onClick={() => alert("clicked add club btn")}
            bgColor="#EE3243"
            width="140px"
            height="44px"
            padding="11px 34px"
            color="#F5F5F5"
            borderRadius="5.59px"
            className="self-end text-[#F5F5F5] bg-[#EE3243] w-full md:w-[140px] h-[30px] md:h-[44px] text-[12px] md:text-[18px] md:px-[34px] md:py-[11px] rounded-[5.59px] "
          >
            Add Club
          </Button>
        </form>
      </div>
    );
  };

  const editClubPopUp = () => {
    return (
      <div className="inset-0 fixed flex items-center justify-center">
        <form className="max-h-[409.3px] md:h-[409.3px] w-[250px] md:w-[526px] px-[10px] md:px-[20px] py-[16px] md:py-[32px] border shadow-md bg-white rounded-[9.96px] flex flex-col gap-2 md:gap-4">
          <h1 className="text-[#313131] font-bold w-full text-center text-[12px] md:text-[24px] ">
            Edit Club
          </h1>

          {/* club name */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Club Name
            </label>
            <input
              className="border border-[#E5E5E5] h-[42px] px-2 md:px-4  outline-none rounded-[4px]  "
              type="text"
            />
          </div>

          {/* select country */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Country Name
            </label>
            <div className="relative border border-[#E5E5E5] h-[42px] px-2 md:px-4 rounded-[4px] flex ">
              <select
                className=" w-full outline-none bg-transparent appearance-none text-[#646464] text-[11px] md:text-[16px]"
                name=""
                id=""
              >
                <option>Select</option>
              </select>

              {/* Custom dropdown icon */}
              <img
                className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
                src={data.downArrow}
                alt="Dropdown Arrow"
              />
            </div>
          </div>

          {/* upload logo */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Logo
            </label>
            <div className="relative border border-[#E5E5E5] h-[42px] px-2 md:px-4 rounded-[4px] flex justify-between items-center">
              {/* Show file name or default text on the left */}
              <p className="text-left text-sm text-[#646464] font-normal text-[11px] md:text-[16px] ">
                {fileName ? fileName : "Upload Logo"}
              </p>

              {/* Upload Button on the right */}
              <label
                htmlFor="upload-logo"
                className="border border-[#C7C7C7] text-[#777777] text-[8px] py-[5.98px] px-[11.21px]  md:text-[12px] bg-[#E5E5E5] w-auto md:w-[100px] h-[29px] rounded-[5.96px] cursor-pointer flex justify-center items-center"
              >
                Upload Logo
              </label>

              {/* Hidden file input */}
              <input
                type="file"
                id="upload-logo"
                accept="image/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* add club button */}
          <Button
            onClick={() => alert("clicked add club btn")}
            bgColor="#EE3243"
            width="140px"
            height="44px"
            padding="11px 34px"
            color="#F5F5F5"
            borderRadius="5.59px"
            className="self-end text-[#F5F5F5] bg-[#EE3243] w-full md:w-[140px] h-[30px] md:h-[44px] text-[12px] md:text-[18px] md:px-[34px] md:py-[11px] rounded-[5.59px] "
          >
            Add Club
          </Button>
        </form>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen p-3 md:p-5">
      <div
        className={`${
          isModalOpen && "pointer-events-none opacity-50 bg-gray-50"
        } flex flex-col gap-4`}
      >
        {/* top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <h1 className="text-[#1C1C1C] font-semibold text-lg md:text-[30px]">
            Club Management
          </h1>
          <div className="flex gap-2">
            <Button
              className="font-medium text-[#A8A8A8] text-sm md:text-[16.28px] border border-[#A8A8A8] w-20 md:w-[124px] h-10 md:h-[43px] p-2 md:p-[10.18px] rounded-md md:rounded-[8.14px]"
              borderColor="#4D4D4D"
              color="#4D4D4D"
              padding="10.18px 10.18px"
              height="43px"
              width="124px"
            >
              Export
            </Button>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="font-medium text-[#FFFFFF] text-[16.28px] bg-[#EF4B41] w-25 md:w-[194px] h-10 md:h-[43px] p-2 md:p-[10.18px] rounded-md md:rounded-[8.14px] "
              color="#ffffff"
              bgColor="#EF4B41"
              width="194px"
              height="43px"
              borderRadius="8.14px"
              borderColor="none"
            >
              Create Club
            </Button>
          </div>
        </div>

        {/* filter section */}
        {filterSection()}

        {/* competation table */}
        <Table
          filteredData={transformedTableData}
          keyNames={clubKeys}
          tableHeaders={tableHeaders}
        />
      </div>
      {isModalOpen && modalPopUp()}
      {isEditClubPopUp && editClubPopUp()}
    </div>
  );
};

export default Club;
