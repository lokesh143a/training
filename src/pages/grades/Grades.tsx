import React from "react";
import { useState } from "react";
import { data } from "../../assets/data";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";

type GardesData = {
  id: string | number;
  name: string;
  description: string;
};

const originalData: GardesData[] = [
  {
    id: "01",
    name: "Under 18 Premier League North",
    description: "Manchester United FC",
  },
  {
    id: "02",
    name: "Under 18 Premier League North",
    description: "Manchester United FC",
  },
  {
    id: "03",
    name: "Under 18 Premier League North",
    description: "write some description",
  },
];

const tableHeaders = ["NAME", "DESCRIPTION", "ACTION"];

const gradeKeys = ["name", "description", "action"];

const Grades: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const [isModalOpen, _setIsModalOpen] = useState<boolean>(false);
  const [_isEditPopUp, setisEditPopUp] = useState<boolean>(false);

  // filtered data
  const filteredData = originalData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDesc = item.description
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesSearch || matchesDesc;
  });

  const transformedTableData: Array<Record<string, React.ReactNode>> =
    filteredData.map((item) => ({
      ...item,
      name: (
        <p className="text-[#383838] font-bold text-12px md:text-[20px] cursor-pointer hover:text-gray-600 ">
          {item.name}
        </p>
      ),

      action: (
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
    <div className="w-full min-h-screen p-3 md:p-5">
      <div
        className={`${
          isModalOpen && "pointer-events-none opacity-50 bg-gray-50"
        } flex flex-col gap-4`}
      >
        {/* top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <h1 className="text-[#1C1C1C] font-semibold text-lg md:text-[30px]">
            Grades
          </h1>
          <div className="flex gap-2">
            <Button
              className="font-medium text-[#FFFFFF] text-[16.28px] bg-[#EF4B41] w-25 md:w-[194px] h-10 md:h-[43px] p-2 md:p-[10.18px] rounded-md md:rounded-[8.14px] "
              color="#ffffff"
              bgColor="#EF4B41"
              width="194px"
              height="43px"
              borderRadius="8.14px"
              borderColor="none"
            >
              Create Grade
            </Button>
          </div>
        </div>

        {/* filter section */}
        {filterSection()}

        {/* competation table */}
        <Table
          filteredData={transformedTableData}
          keyNames={gradeKeys}
          tableHeaders={tableHeaders}
        />
      </div>
    </div>
  );
};

export default Grades;
