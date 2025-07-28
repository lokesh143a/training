import { useState } from "react";
import { data } from "../assets/data";
import Button from "../components/Button/Button";
import Table from "../components/Table/Table";
import { useNavigate } from "react-router-dom";

type CompetitionsData = {
  id: string | number;
  competitionName: string;
  team: number;
  grade: string;
  status: string;
};

const originalCompetitionsData: CompetitionsData[] = [
  {
    id: "01",
    competitionName: "Alberta Australian Football League",
    team: 20,
    grade: "Under 18",
    status: "Complete",
  },
  {
    id: "02",
    competitionName: "Alberta Australian Football League",
    team: 20,
    grade: "Under 18",
    status: "Ongoing",
  },
];

const tableHeaders = ["COMPETITION NAME", "TEAM", "GRADE", "STATUS", "MANAGE"];

const CompetitionsKeys = [
  "competitionName",
  "team",
  "grade",
  "status",
  "manage",
];

const Competitions = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditCompitionPopUp, setisEditCompitionPopUp] = useState(false);

  // filtered data
  const filteredData = originalCompetitionsData.filter((item) => {
    const matchesSearch = item.competitionName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGrade = selectedGrade
      ? item.grade.toLowerCase() === selectedGrade.toLowerCase()
      : true;

    return matchesSearch && matchesGrade;
  });

  const transformedTableData: Array<Record<string, React.ReactNode>> =
    filteredData.map((item) => ({
      ...item,
      competitionName: (
        <p
          onClick={() => navigate("/teams")}
          className="text-[#383838] font-bold text-12px md:text-[20px] cursor-pointer hover:text-gray-600 "
        >
          {item.competitionName}
        </p>
      ),
      status:
        item.status === "Complete" ? (
          <span className="inline-block  text-[8px] md:text-[14px] rounded-full text-[#22C55E] bg-green-50 w-full md:w-[97px] h-[25px] font-semibold">
            {item.status}
          </span>
        ) : (
          <div className="relative inline-block w-full md:w-[97px] h-[25px]">
            <select
              defaultValue={item.status}
              className="appearance-none inline-flex items-center justify-center text-[8px] md:text-[14px] outline-none rounded-full text-[#A8A8A8] bg-[#E5E5E5] w-full h-full font-medium pl-2 pr-6 text-center"
            >
              <option value="Ongoing">Ongoing</option>
              <option value="Complete">Complete</option>
            </select>
            <img
              src={data.downArrow}
              alt="Arrow"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none w-3 h-3"
            />
          </div>
        ),

      manage: (
        <div className="flex items-center gap-2 md:gap-4">
          <img
            onClick={() => setisEditCompitionPopUp(true)}
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
          <h1 className="text-[#313131] font-bold w-full text-center text-[10px] md:text-[19.93px] ">
            Create New Competition
          </h1>

          {/* id */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Competition ID
            </label>
            <input
              disabled
              className="border border-[#E5E5E5] h-[42px] px-2 md:px-4  outline-none rounded-[4px] placeholder:opacity-[60%] "
              type="text"
              placeholder={`00${originalCompetitionsData.length + 1}`}
            />
          </div>
          {/* competation name */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Competition Name
            </label>
            <input
              className="border border-[#E5E5E5] h-[42px] px-2 md:px-4  outline-none rounded-[4px]  "
              type="text"
            />
          </div>

          {/* select league */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Select League
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

          {/* select grade */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Select Grade
            </label>
            <div className="relative border border-[#E5E5E5] h-[42px] px-2 md:px-4 rounded-[4px] flex ">
              <select
                className=" w-full outline-none bg-transparent appearance-none text-[#646464] text-[11px] md:text-[16px]"
                name=""
                id=""
              >
                <option>Select</option>
                <option value="Under 18">Under 18</option>
              </select>

              {/* Custom dropdown icon */}
              <img
                className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
                src={data.downArrow}
                alt="Dropdown Arrow"
              />
            </div>
          </div>

          {/* add league button */}
          <Button
            onClick={() => alert("clicked add competation btn")}
            bgColor="#EE3243"
            width="203px"
            height="44px"
            padding="11px 34px"
            color="#F5F5F5"
            borderRadius="5.59px"
            className="self-end text-[#F5F5F5] bg-[#EE3243] w-full md:w-[163px] h-[30px] md:h-[44px] text-[12px] md:text-[18px] md:px-[34px] md:py-[11px] rounded-[5.59px] "
          >
            Add Competition
          </Button>
        </form>
      </div>
    );
  };

  const editLeaguePopUp = () => {
    return (
      <div className="inset-0 fixed flex items-center justify-center">
        <form className=" h-auto w-[250px] md:w-[526px] px-[10px] md:px-[20px] py-[16px] md:py-[32px] border shadow-md bg-white rounded-[9.96px] flex flex-col gap-2 md:gap-4">
          <h1 className="text-[#313131] font-bold w-full text-center text-[10px] md:text-[19.93px] ">
            Edit Competition
          </h1>
          {/* league name */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              League Competition
            </label>
            <input
              className="border border-[#E5E5E5] h-[42px] px-2 md:px-4  outline-none rounded-[4px]  "
              type="text"
            />
          </div>

          {/* select league */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Select League
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

          {/* select grade */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              Select Grade
            </label>
            <div className="relative border border-[#E5E5E5] h-[42px] px-2 md:px-4 rounded-[4px] flex ">
              <select
                className=" w-full outline-none bg-transparent appearance-none text-[#646464] text-[11px] md:text-[16px]"
                name=""
                id=""
              >
                <option>Select</option>
                <option value="Under 18">Under 18</option>
              </select>

              {/* Custom dropdown icon */}
              <img
                className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 w-[16.41px] h-[16.41px]"
                src={data.downArrow}
                alt="Dropdown Arrow"
              />
            </div>
          </div>

          {/* add league button */}
          <Button
            onClick={() => alert("clicked update compititon button")}
            color="#F5F5F5"
            width="203px"
            height="44px"
            bgColor="#EE3243"
            borderRadius="5.59px"
            className="self-end w-full md:w-[189px] h-[30px] md:h-[44px] text-[12px] md:text-[18px] px-[12px] md:px-[34px] py-[6px] md:py-[11px]"
          >
            Update Competition
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
            Competitions
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
              Create Competition
            </Button>
          </div>
        </div>

        {/* filter section */}
        {filterSection()}

        {/* competation table */}
        <Table
          filteredData={transformedTableData}
          keyNames={CompetitionsKeys}
          tableHeaders={tableHeaders}
        />
      </div>
      {isModalOpen && modalPopUp()}
      {isEditCompitionPopUp && editLeaguePopUp()}
    </div>
  );
};

export default Competitions;
