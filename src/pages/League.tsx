import { useState } from "react";
import { data } from "../assets/data";
import Button from "../components/Button/Button";
import Table from "../components/Table/Table";

type LeagueData = {
  id: string | number;
  leagueName: string;
  country: string;
  numberOfCompetitions: number;
  status: string;
};

const originalLeagueData: LeagueData[] = [
  {
    id: "01",
    leagueName: "Alberta Australian Football 2024",
    country: "England",
    numberOfCompetitions: 20,
    status: "Active",
  },
  {
    id: "02",
    leagueName: "Alberta Australian Football 2024",
    country: "England",
    numberOfCompetitions: 20,
    status: "Active",
  },
];

const League = () => {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditLeaguePopUp, setIsEditLeaguePopUp] = useState(false);

  // headers data
  const tableHeaders = [
    "ID",
    "LEAGUE NAME",
    "COUNTRY",
    "NO. OF COMPETITIONS",
    "STATUS",
    "ACTIONS",
  ];

  // tablekeys
  const leagueKeys = [
    "id",
    "leagueName",
    "country",
    "numberOfCompetitions",
    "status",
  ];

  // filtered data
  const filteredData = originalLeagueData.filter((item) => {
    const matchesSearch = item.leagueName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCountry = selectedCountry
      ? item.country.toLowerCase() === selectedCountry.toLowerCase()
      : true;

    return matchesSearch && matchesCountry;
  });

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
        {/* select country */}
        <div className="relative flex w-full max-w-[180px] md:w-[153px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full appearance-none bg-transparent text-[12px] md:text-[16px] focus:outline-none"
            name=""
            id=""
          >
            <option>Select Country</option>
            <option value="india">India</option>
            <option value="england">England</option>
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

  // const leagueTable = () => {
  //   return (
  //     <div className="w-full xl:w-[1171px] border border-[#A8A8A852] rounded-tl-lg rounded-tr-lg ">
  //       <table className="w-full xl:w-[1171px] ">
  //         <thead className="bg-[#E9F1FF] ">
  //           <tr>
  //             <th className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
  //               ID
  //             </th>
  //             <th className="border-b border-[#A8A8A852] text-left  px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
  //               LEAGUE NAME
  //             </th>
  //             <th className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
  //               COUNTRY
  //             </th>
  //             <th className=" border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
  //               NO. OF COMPETITIONS
  //             </th>
  //             <th className="border-b border-[#A8A8A852]text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
  //               STATUS
  //             </th>
  //             <th className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
  //               ACTIONS
  //             </th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {filteredData.length > 0 ? (
  //             filteredData.map((item, index) => (
  //               <tr
  //                 key={index}
  //                 className="h-[83.84px] border-b border-[#A8A8A852] "
  //               >
  //                 <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px] ">
  //                   {item.id}
  //                 </td>
  //                 <td className="px-[29.48px] py-[9.21px] text-[13px] xl:text-[20px] font-bold">
  //                   {item.leagueName}
  //                 </td>
  //                 <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px] ">
  //                   {item.country}
  //                 </td>
  //                 <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px]">
  //                   {item.numberOfCompetitions}
  //                 </td>
  //                 <td className="px-[29.48px] py-[9.21px]">
  //                   <span className="inline-block text-[8px] md:text-[14px] rounded-full text-[#22C55E] bg-[#21FF041A] w-[73.3px] h-[25px] leading-[25px] text-center font-semibold">
  //                     {item.status}
  //                   </span>
  //                 </td>
  //                 <td className="px-[29.48px] py-[9.21px]">
  //                   <div className="flex items-center gap-2 md:gap-4">
  //                     <img
  //                       onClick={() => setIsEditLeaguePopUp(true)}
  //                       className="md:w-[16.67px] md:h-[18.32px] cursor-pointer"
  //                       src={data.editIcon}
  //                       alt=""
  //                     />
  //                     <img
  //                       className="md:w-[16.5px] md:h-[15.13px] cursor-pointer"
  //                       src={data.deleteIcon}
  //                       alt=""
  //                     />
  //                   </div>
  //                 </td>
  //               </tr>
  //             ))
  //           ) : (
  //             <tr>
  //               <td colSpan={6} className="text-center py-6 text-gray-500">
  //                 No leagues found
  //               </td>
  //             </tr>
  //           )}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // };

  const modalPopUp = () => {
    return (
      <div className="inset-0 fixed flex items-center justify-center">
        <form className="max-h-[423px] md:h-[423px] w-[250px] md:w-[526px] px-[10px] md:px-[20px] py-[16px] md:py-[32px] border shadow-md bg-white rounded-[9.96px] flex flex-col gap-2 md:gap-4">
          <h1 className="text-[#313131] font-bold w-full text-center text-[10px] md:text-[19.93px] ">
            Create New League
          </h1>

          {/* id */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              ID
            </label>
            <input
              disabled
              className="border border-[#E5E5E5] h-[42px] px-2 md:px-4  outline-none rounded-[4px] placeholder:opacity-[60%] "
              type="text"
              placeholder={`00${originalLeagueData.length + 1}`}
            />
          </div>
          {/* league name */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              League Name
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
              Select Country
            </label>
            <div className="relative border border-[#E5E5E5] h-[42px] px-2 md:px-4 rounded-[4px] flex ">
              <select
                className=" w-full outline-none bg-transparent appearance-none text-[#646464] text-[11px] md:text-[16px]"
                name=""
                id=""
              >
                <option>Select</option>
                <option value="india">India</option>
                <option value="england">England</option>
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
            onClick={() => alert("clicked add leage btn")}
            bgColor="#EE3243"
            width="163px"
            height="44px"
            padding="11px 34px"
            color="#F5F5F5"
            borderRadius="5.59px"
            className="self-end text-[#F5F5F5] bg-[#EE3243] w-full md:w-[163px] h-[30px] md:h-[44px] text-[12px] md:text-[18px] md:px-[34px] md:py-[11px] rounded-[5.59px] "
          >
            Add League
          </Button>
          {/* <button
            type="submit"
            className="self-end text-[#F5F5F5] bg-[#EE3243] w-full md:w-[163px] h-[30px] md:h-[44px] text-[12px] md:text-[18px] md:px-[34px] md:py-[11px] rounded-[5.59px] "
          >
            Add League
          </button> */}
        </form>
      </div>
    );
  };

  const editLeaguePopUp = () => {
    return (
      <div className="inset-0 fixed flex items-center justify-center">
        <form className="max-h-[334px] md:h-[334px] w-[250px] md:w-[526px] px-[10px] md:px-[20px] py-[16px] md:py-[32px] border shadow-md bg-white rounded-[9.96px] flex flex-col gap-2 md:gap-4">
          <h1 className="text-[#313131] font-bold w-full text-center text-[10px] md:text-[19.93px] ">
            Edit League
          </h1>
          {/* league name */}
          <div className="flex flex-col gap-2">
            <label
              className="text-[#646464] text-[10px] md:text-[14px]"
              htmlFor=""
            >
              League Name
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
              Select Country
            </label>
            <div className="relative border border-[#E5E5E5] h-[42px] px-2 md:px-4 rounded-[4px] flex ">
              <select
                className=" w-full outline-none bg-transparent appearance-none text-[#646464] text-[11px] md:text-[16px]"
                name=""
                id=""
              >
                <option>Select</option>
                <option value="india">India</option>
                <option value="england">England</option>
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
            onClick={() => alert("clicked edit league button")}
            color="#F5F5F5"
            bgColor="#EE3243"
            borderRadius="5.59px"
            className="self-end w-full md:w-[189px] h-[30px] md:h-[44px] text-[12px] md:text-[18px] px-[12px] md:px-[34px] py-[6px] md:py-[11px]"
          >
            Update League
          </Button>

          {/* <button
            type="submit"
            className="self-end text-[#F5F5F5] bg-[#EE3243] w-full md:w-[189px] h-[30px] md:h-[44px] text-[12px] md:text-[18px] md:px-[34px] md:py-[11px] rounded-[5.59px] "
          >
            Update League
          </button> */}
        </form>
      </div>
    );
  };

  return (
    <div className={"w-full min-h-screen p-3 md:p-5"}>
      <div
        className={`${
          isModalOpen && "pointer-events-none opacity-50 bg-gray-50"
        } flex flex-col gap-4`}
      >
        {/* top section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <h1 className="text-[#1C1C1C] font-semibold text-lg md:text-[30px]">
            League Management
          </h1>
          <div className="flex gap-2">
            {/* <button className="font-medium text-[#A8A8A8] text-sm md:text-[16.28px] border border-[#A8A8A8] w-20 md:w-[124px] h-10 md:h-[43px] p-2 md:p-[10.18px] rounded-md md:rounded-[8.14px]">
              Export
            </button> */}
            {/* reuasable export button */}
            <Button
              className="font-medium text-[#A8A8A8] text-sm md:text-[16.28px] border border-[#A8A8A8] w-20 md:w-[124px] h-10 md:h-[43px] p-2 md:p-[10.18px] rounded-md md:rounded-[8.14px]"
              borderColor="#A8A8A8"
              color="#A8A8A8"
              padding="10.18px 10.18px"
              height="43px"
              width="124px"
            >
              Export
            </Button>
            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="font-medium text-[#FFFFFF] text-[16.28px] bg-[#EF4B41] w-25 md:w-[194px] h-10 md:h-[43px] p-2 md:p-[10.18px] rounded-md md:rounded-[8.14px] "
            >
              Create New League
            </button> */}
            {/* reuable create new league button */}
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
              Create New League
            </Button>
          </div>
        </div>

        {/* filter section */}
        {filterSection()}

        {/* league table */}
        {/* {leagueTable()} */}

        <Table
          filteredData={filteredData}
          keyNames={leagueKeys}
          tableHeaders={tableHeaders}
          editIcon={data.editIcon}
          deleteIcon={data.deleteIcon}
          onEdit={setIsEditLeaguePopUp}
        />
      </div>
      {isModalOpen && modalPopUp()}
      {isEditLeaguePopUp && editLeaguePopUp()}
    </div>
  );
};

export default League;
