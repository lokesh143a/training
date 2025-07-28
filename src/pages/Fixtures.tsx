import { useState } from "react";
import { data, teamsData } from "../assets/data";
import Button from "../components/Button/Button";
import Table from "../components/Table/Table";

type fixturesData = {
  roundNo: string | number;
  fixtures: string;
  dateTime: string ;
  matchVideo: string;
  assignAnalyst: string;
  status: string;
};

const originalFixturesData: fixturesData[] = [
  {
    roundNo: "001",
    fixtures: "Manchester United vs  XYZ",
    dateTime: "May 12, 2025 at 15:00",
    matchVideo: "Not Started",
    assignAnalyst: "Assign Analyst",
    status: "Under QA"
  },
  {
    roundNo: "001",
    fixtures: "Manchester United vs  XYZ",
    dateTime: "May 12, 2025 at 15:00",
    matchVideo: "Not Started",
    assignAnalyst: "Assign Analyst",
    status: "Under QA"
  },
];

const tableHeaders = [
  "ROUND NO.",
  "FIXTURES",
  "DATE & TIME",
  "MATCH VIDEO",
  "ASSIGN ANALYST",
  "STATUS",
  "ACTION"
];
 
const fixturesKeys = [
  "roundNo",
  "fixtures",
  "dateTime",
  "matchVideo",
  "assignAnalyst", 
  "status",
  "action"
];

const Fixtures = () => {
  const [search, setSearch] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");

  //   filterde data

  const filteredData = originalFixturesData.filter((item) => {
    const matchesSearch = item.fixtures
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch;
  });

  const transformedTableData: Array<Record<string, React.ReactNode>> =
    filteredData.map((item) => ({
      ...item,
      fixtures : (
        <p className="text-[#383838] font-semibold text-[15px] md:text-[21.39px] ">{item.fixtures}</p>
      )
      ,
      dateTime:(
        <p className="font-medium text-[10px] md:text-[17.82px] text-[#4D4D4D] ">{item.dateTime}</p>
      )
      ,
      matchVideo: (
        <div className=" text-[#646464] bg-[#F3F3F3] md:w-[88px] md:h-[28px] text-[8px] md:text-[10.69px] font-semibold rounded-full flex justify-center items-center">
          {item.matchVideo}
        </div>
      ),
      assignAnalyst : (
        <div className="bg-[#EF4B41] w-full h-full px-2 py-1 text-[6px] md:text-[10.69px]  md:w-[98.2px] md:h-[27.62px] font-semibold rounded-[3.56px] border-none text-[#FFFFFF] flex justify-center items-center ">
          {item.assignAnalyst}
        </div>
      ),
      status : (
        <div className="bg-[#FFC300] md:w-[76.63px] md:h-[27.62px] rounded-full text-[#383838] font-semibold text-[10.69px] flex justify-center items-center ">
          {item.status}
        </div>
      )
      ,
      action:
       (
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
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[#1C1C1C] text-lg md:text-[30px]">
              Alberta Australian Football Competition
            </h1>
            <p className="bg-[#13274B] text-[10px] md:text-[16px] w-[100px] py-2 md:w-[151px] md:h-[42px] text-[#FFFFFF] font-semibold flex justify-center items-center rounded-full ">SPORTS NAME</p>
          </div>
        </div>
      </div>
    );
  };

  const headButtonsSection = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between gap-3">
        <h1 className="text-[#1C1C1C] font-semibold text-xl md:text-[27.42px] ">
          Team Name
        </h1>

        <div className="flex flex-wrap gap-3">
          <Button
            color="#4D4D4D"
            borderColor="#4D4D4D"
            borderRadius="8.42px"
            className="md:w-[125.19px] md:h-[43.41px] font-medium md:text-[15.3px] "
          >
            Export
          </Button>

          <Button
            color="#282828"
            borderColor="#282828"
            borderRadius="7.65px"
            className="font-medium md:text-[15.3px] md:w-[116.39px] md:h-[43.4px] "
          >
            Import
          </Button>

          <Button
            color="#FFFFFF"
            bgColor="#EF4B41"
            borderColor="none"
            borderRadius="7.65px"
            className="font-medium md:text-[15.3px] md:w-[182.1px] md:h-[40.4px] "
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
            onChange={(e) => setSelectedGrade(e.target.value)}
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
    <div>
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
          keyNames={fixturesKeys}
          tableHeaders={tableHeaders}
         
        />
      </div>
    </div>
  );
};

export default Fixtures;
