import React from "react";
import { useState } from "react";
import { data } from "../../assets/data";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";

type ClubsData = {
  id: string | number;
  team: string;
  club: string;
  competition:  string;
  player: number;
};

const originalClubData: ClubsData[] = [
  {
    id: "01",
    team: "Manchester United FC",
    club: "Manchester United FC",
    competition: "Premier League",
    player: 28,
  },
  {
    id: "02",
     team: "Manchester United FC",
    club: "Manchester United FC",
    competition: "Premier League",
    player: 28,
  },
];

const tableHeaders = [
  "TEAM ID",
  "TEAM",
  "CLUB",
  "COMPETITION",
  "PLAYER",
  "MANAGE",
];

const clubKeys = [
  "id",
  "team",
  "club",
  "competition",
  "player",
  "manage",
];

const Teams: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditPopUp, setisEditPopUp] = useState<boolean>(false);

  // filtered data
  const filteredData = originalClubData.filter((item) => {
    const matchesSearch = item.club
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTeam = item.team
      .toLowerCase()
      .includes(search.toLowerCase());

       const matchesCompetition = item.competition
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch || matchesTeam || matchesCompetition;
  });

  const transformedTableData: Array<Record<string, React.ReactNode>> =
    filteredData.map((item) => ({
      ...item,
      team: (
        <p
        onClick={()=> navigate("/club-player-management")}
          className="text-[#383838] font-bold text-12px md:text-[20px] cursor-pointer hover:text-gray-600 "
        >
          {item.team}
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
        <div className="relative flex w-full max-w-[180px] md:w-[180px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            className="w-full appearance-none bg-transparent text-[12px] md:text-[16px] focus:outline-none"
            name=""
            id=""
          >
            <option>Select Grade</option>
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 ">
        <form className="bg-white shadow-md rounded-[10px] w-full max-w-md md:max-w-xl p-4 md:p-8 flex flex-col gap-4 max-h-full overflow-y-auto hide-scrollbar">
          <h1 className="text-[#313131] font-bold text-center text-[16px] md:text-[24px]">
            Create Team
          </h1>

          {/* team ID */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="playerId"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Team ID
            </label>
            <input
              id="playerId"
              disabled
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
              placeholder={`00${originalClubData.length + 1}`}
            />
          </div>

          {/* team Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Team Name
            </label>
            <input
              id="lastName"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
            />
          </div>

          

          {/*  Select league */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="position"
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

          {/* Select competiton */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="league"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Select Competition
            </label>
            <div className="relative">
              <select
                id="competition"
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

          {/* Select grade */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="league"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Select Grade
            </label>
            <div className="relative">
              <select
                id="grade"
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
            Create Team
          </h1>

          {/* team ID */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="playerId"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Team ID
            </label>
            <input
              id="playerId"
              disabled
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
              placeholder={`00${originalClubData.length + 1}`}
            />
          </div>

          {/* team Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="lastName"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Team Name
            </label>
            <input
              id="lastName"
              className="border border-[#E5E5E5] h-[42px] px-4 outline-none rounded"
              type="text"
            />
          </div>

          

          {/*  Select league */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="position"
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

          {/* Select competiton */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="league"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Select Competition
            </label>
            <div className="relative">
              <select
                id="competition"
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

          {/* Select grade */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="league"
              className="text-[#646464] text-[12px] md:text-[14px]"
            >
              Select Grade
            </label>
            <div className="relative">
              <select
                id="grade"
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

          {/* update Club Button */}
          <div className="flex justify-end">
            <Button
              onClick={() => alert("clicked add club btn")}
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
    <div className="w-full min-h-screen p-3 md:p-5">
      <div
        className={`${
          isModalOpen && "pointer-events-none opacity-50 bg-gray-50"
        } flex flex-col gap-4`}
      >
        {/* top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <h1 className="text-[#1C1C1C] font-semibold text-lg md:text-[30px]">
            Teams
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
              Import
            </Button>

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
              Create Team
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
      {isEditPopUp && editPopUp()}
    </div>
  );
};

export default Teams;
