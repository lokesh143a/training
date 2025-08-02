import React from "react";
import { useState } from "react";
import { data, teamsData } from "../..//assets/data";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";

type TeamData = {
  id: string | number;
  playerName: string;
  club: string;
  grade: string | number;
  jerseyNo: number | string;
};

const originalClubTeamData: TeamData[] = [
  {
    id: "001",
    playerName: "John Smith",
    club: "Manchester United FC",
    grade: "Under 18",
    jerseyNo: 18,
  },
  {
    id: "002",
    playerName: "John Smith",
    club: "Manchester United FC",
    grade: "Under 18",
    jerseyNo: 18,
  },
];

const tableHeaders = [
  "ID",
  "PLAYER NAME",
  "CLUB",
  "GRADE",
  "JERSEY NO",
  "MANAGE",
];

const teamKeys = ["id", "playerName", "club", "grade", "jerseyNo", "manage"];

const PlayerTeamDetails: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditPopUp, setisEditPopUp] = useState<boolean>(false);

  const navigate = useNavigate();

  //   filterde data

  const filteredData = originalClubTeamData.filter((item) => {
    const matchesSearch = item.playerName
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch;
  });

  const transformedTableData: Array<Record<string, React.ReactNode>> =
    filteredData.map((item) => ({
      ...item,
      teamName: (
        <p
          onClick={() => navigate("/club-player-management")}
          className="text-[#383838] font-bold text-12px md:text-[20px] cursor-pointer hover:text-gray-600 "
        >
          {item.playerName}
        </p>
      ),
      manage: (
        <div className="flex items-center gap-2 md:gap-4">
          <img
            onClick={() => setisEditPopUp(true)}
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

  const headingSection = () => {
    return (
      <div className="bg-gradient-to-b from-[#E9F1FF] to-[#F28B84] w-full h-[80px] md:h-[154px] px-5 md:px-10 flex items-center">
        <div className="flex  items-center gap-3 md:gap-6">
          <img
            className=" w-12 md:w-[100.39px] md:h-[100px] "
            src={teamsData.teamsCrossIcon}
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[#1C1C1C] text-lg md:text-[30px]">
              Alberta Australian Football Competition
            </h1>
            <p className="bg-[#13274B] text-[10px] md:text-[16px] w-[100px] py-2 md:w-[151px] md:h-[42px] text-[#FFFFFF] font-semibold flex justify-center items-center rounded-full ">
              SPORTS NAME
            </p>
          </div>
        </div>
      </div>
    );
  };

  const headButtonsSection = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <h1 className="text-[#1C1C1C] font-semibold text-xl md:text-[27.42px] ">
          Team Details
        </h1>

        <div className="flex flex-wrap gap-3">
          <Button
            color="#4D4D4D"
            borderColor="#4D4D4D"
            borderRadius="7.65px"
            className="md:w-[116.39px] md:h-[40.4px] font-medium md:text-[16.44px] "
          >
            Export
          </Button>

          <Button
            onClick={() => setIsModalOpen(true)}
            color="#FFFFFF"
            bgColor="#EF4B41"
            borderColor="none"
            borderRadius="7.65px"
            className="font-medium md:text-[14.88px] md:w-[182.26px] md:h-[40px] "
          >
            Add New Player
          </Button>
        </div>
      </div>
    );
  };

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

        {/* select club */}
        <div className="relative flex w-full max-w-[180px] md:w-[153px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            value={selectedGrade}
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

        {/* select team */}
        <div className="relative flex w-full max-w-[180px] md:w-[153px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="w-full appearance-none bg-transparent text-[12px] md:text-[16px] focus:outline-none"
            name=""
            id=""
          >
            <option>Select Team</option>
          </select>

          {/* Custom dropdown icon */}
          <img
            className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
            src={data.downArrow}
            alt="Dropdown Arrow"
          />
        </div>
        {/* select grade */}
        <div className="relative flex w-full max-w-[180px] md:w-[153px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="w-full appearance-none bg-transparent text-[12px] md:text-[16px] focus:outline-none"
            name=""
            id=""
          >
            <option>Select Grade</option>
            <option value="under 18">Under 18</option>
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 ">
        <form className="bg-white shadow-md rounded-[10px] w-full max-w-md md:max-w-xl p-4 md:p-8 flex flex-col gap-4 max-h-full overflow-y-auto hide-scrollbar">
          <h1 className="text-[#313131] font-bold text-center text-[16px] md:text-[24px]">
            Create New Player
          </h1>

          {/* Player ID */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="playerId"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Player ID
            </label>
            <input
              id="playerId"
              disabled
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
              placeholder={`00${originalClubTeamData.length + 1}`}
            />
          </div>

          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              First Name
            </label>
            <input
              id="firstName"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Last Name
            </label>
            <input
              id="lastName"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
            />
          </div>

          {/* Playing Number */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="playingNumber"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Playing Number
            </label>
            <input
              id="playingNumber"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
            />
          </div>

          {/* Position Select */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="position"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Position
            </label>
            <div className="relative">
              <select
                id="position"
                className="w-full border border-[#E5E5E5] h-[42px] px-4 pr-10 rounded text-[#646464] bg-transparent appearance-none outline-none"
              >
                <option>Select</option>
              </select>
              <img
                src={data.downArrow}
                alt="Dropdown"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
          </div>

          {/* Select Club */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="club"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Select Club
            </label>
            <div className="relative">
              <select
                id="club"
                className="w-full border border-[#E5E5E5] h-[42px] px-4 pr-10 rounded text-[#646464] bg-transparent appearance-none outline-none"
              >
                <option>Select</option>
              </select>
              <img
                src={data.downArrow}
                alt="Dropdown"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
          </div>

          {/* Select League */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="league"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Select League
            </label>
            <div className="relative">
              <select
                id="league"
                className="w-full border border-[#E5E5E5] h-[42px] px-4 pr-10 rounded text-[#646464] bg-transparent appearance-none outline-none"
              >
                <option>Select</option>
              </select>
              <img
                src={data.downArrow}
                alt="Dropdown"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
          </div>

          {/* Email ID */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Email ID
            </label>
            <input
              id="email"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="email"
            />
          </div>

          {/* Add Club Button */}
          <div className="flex justify-end">
            <Button
              onClick={() => alert("clicked add club btn")}
              bgColor="#EE3243"
              width="140px"
              height="44px"
              padding="11px 34px"
              color="#F5F5F5"
              borderRadius="5.59px"
              className="text-[#F5F5F5] bg-[#EE3243] w-full md:w-[140px] h-[44px] text-[14px] md:text-[16px] rounded"
            >
              Add Club
            </Button>
          </div>
        </form>
      </div>
    );
  };

  const editPopUp = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 ">
        <form className="bg-white shadow-md rounded-[10px] w-full max-w-md md:max-w-xl p-4 md:p-8 flex flex-col gap-4 max-h-full overflow-y-auto hide-scrollbar">
          <h1 className="text-[#313131] font-bold text-center text-[16px] md:text-[24px]">
            Edit Player
          </h1>

          {/* Player ID */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="playerId"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Player ID
            </label>
            <input
              id="playerId"
              disabled
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
              placeholder={`00${originalClubTeamData.length + 1}`}
            />
          </div>

          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="firstName"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              First Name
            </label>
            <input
              id="firstName"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Last Name
            </label>
            <input
              id="lastName"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
            />
          </div>

          {/* Playing Number */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="playingNumber"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Playing Number
            </label>
            <input
              id="playingNumber"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
            />
          </div>

          {/* Position Select */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="position"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Position
            </label>
            <div className="relative">
              <select
                id="position"
                className="w-full border border-[#E5E5E5] h-[42px] px-4 pr-10 rounded text-[#646464] bg-transparent appearance-none outline-none"
              >
                <option>Select</option>
              </select>
              <img
                src={data.downArrow}
                alt="Dropdown"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
          </div>

          {/* Select Club */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="club"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Select Club
            </label>
            <div className="relative">
              <select
                id="club"
                className="w-full border border-[#E5E5E5] h-[42px] px-4 pr-10 rounded text-[#646464] bg-transparent appearance-none outline-none"
              >
                <option>Select</option>
              </select>
              <img
                src={data.downArrow}
                alt="Dropdown"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
          </div>

          {/* Select League */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="league"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Select League
            </label>
            <div className="relative">
              <select
                id="league"
                className="w-full border border-[#E5E5E5] h-[42px] px-4 pr-10 rounded text-[#646464] bg-transparent appearance-none outline-none"
              >
                <option>Select</option>
              </select>
              <img
                src={data.downArrow}
                alt="Dropdown"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
              />
            </div>
          </div>

          {/* Email ID */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Email ID
            </label>
            <input
              id="email"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="email"
            />
          </div>

          {/* Add Club Button */}
          <div className="flex justify-end">
            <Button
              onClick={() => alert("clicked update club btn")}
              bgColor="#EE3243"
              width="203px"
              height="44px"
              padding="11px 34px"
              color="#F5F5F5"
              borderRadius="5.59px"
              className="text-[#F5F5F5] bg-[#EE3243] w-full md:w-[140px] h-[44px] text-[14px] md:text-[16px] rounded"
            >
              Update Club
            </Button>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="h-screen w-full">
      {/* top heading section */}
      {headingSection()}

      <div className="w-full min-h-screen p-3 md:p-5 flex flex-col md:gap-8">
        {/* middle heading and buttons section */}
        {headButtonsSection()}

        {/* filter section */}
        <div className="border border-[#E5E5E5] rounded-[3.7px] px-3 py-2 ">
          {filterSection()}
        </div>

        <Table
          filteredData={transformedTableData}
          keyNames={teamKeys}
          tableHeaders={tableHeaders}
        />
      </div>
      {isModalOpen && modalPopUp()}
      {isEditPopUp && editPopUp()}
    </div>
  );
};

export default PlayerTeamDetails;
