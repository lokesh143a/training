import React from 'react'
import { useState } from "react";
import { data, teamsData } from "../..//assets/data";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";


type TeamData = {
  id: string | number;
  teamName: string;
  club: string;
  grade:string | number;
  jerseyNo : number | string;
};

const originalClubTeamData: TeamData[] = [
  {
    id: "001",
    teamName: "John Smith",
    club: "Manchester United FC",
    grade: "Under 18",
    jerseyNo : 18
  },
  {
    id: "002",
    teamName: "John Smith",
    club: "Manchester United FC",
    grade: "Under 18",
    jerseyNo : 18
  },
];

const tableHeaders = [
  "ID",
  "TEAM NAME",
  "CLUB",
  "GRADE",
  "JERSEY NO",
  "MANAGE",
];

const teamKeys = [
  "id",
  "teamName",
  "club",
  "grade",
  "jerseyNo",
  "manage",
];

const ClubTeamManagement:React.FC = () => {

    const [search, setSearch] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const navigate = useNavigate()

  //   filterde data

  const filteredData = originalClubTeamData.filter((item) => {
    const matchesSearch = item.teamName
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch;
  });

  const transformedTableData: Array<Record<string, React.ReactNode>> =
    filteredData.map((item) => ({
      ...item,
      teamName : (<p
          onClick={() => navigate("/club-player-management")}
          className="text-[#383838] font-bold text-12px md:text-[20px] cursor-pointer hover:text-gray-600 "
        >
          {item.teamName}
        </p>),
      manage: (
        <div className="flex items-center gap-2 md:gap-4">
          <img
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
          <h1 className="font-semibold text-[#1C1C1C] text-lg md:text-[30px]">
           Club Name
          </h1>
        </div>
      </div>
    );
  };

  const headButtonsSection = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <h1 className="text-[#1C1C1C] font-semibold text-xl md:text-[27.42px] ">
         Team Management
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
            color="#4D4D4D"
            borderColor="#4D4D4D"
            borderRadius="7.65px"
            className="font-medium md:text-[14.88px] md:w-[116.39px] md:h-[40.4px] "
          >
           Import
          </Button>

          <Button
            color="#FFFFFF"
            bgColor="#EF4B41"
            borderColor="none"
            borderRadius="7.65px"
            className="font-medium md:text-[14.88px] md:w-[136px] md:h-[40px] "
          >
            Add Team
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
    </div>
  )
}

export default ClubTeamManagement