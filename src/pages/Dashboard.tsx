import { useState } from "react";
import { data } from "../assets/data";
import Table from "../components/Table/Table";

type SummaryItem = {
  title: string;
  icon: string;
  value: number;
};

const summaryTableData: SummaryItem[] = [
  { title: "Total Leagues", icon: data.totalLeagsIcon, value: 2221 },
  {
    title: "Total Competitions",
    icon: data.totalCompetationsIcon,
    value: 2221,
  },
  { title: "Registered Clubs", icon: data.rgisteredClubsIcon, value: 2221 },
  { title: "Total Players", icon: data.totalPlayersIcon, value: 2221 },
  { title: "Games Analyzed", icon: data.gamesAnalyzedIcon, value: 2221 },
];

type SummeryType = {
  icon: string;
  title: string;
  subtext: string;
  value: number | string;
};

const summaryData: SummeryType[] = [
  {
    icon: data.gamesAnalyzedIcon,
    title: "Games Analyzed",
    value: 42,
    subtext: "+5.8 from previous week",
  },
  {
    icon: "",
    title: "Average errors per game",
    value: 42,
    subtext: "+5.8 from previous week",
  },
  {
    icon: "",
    title: "Average Turnaround Time",
    value: "3.5 hrs",
    subtext: "+5.8 from previous week",
  },
];

const tableHeaders: string[] = [
  "ID",
  "COMPETITION NAME",
  "TEAM",
  "GRADE",
  "STATUS",
  "MANAGE",
];

const tableData = [
  {
    id: "1",
    competitionName: "Alberta Australian Football League",
    team: 20,
    grade: "Under 18",
    status: "Active"
  },
  {
    id: "2",
    competitionName: "Alberta Australian Football League",
    team: 30,
    grade: "Under 18",
    status: "Active"
  },
];

const competitionKeys = ["id", "competitionName", "team", "grade", "status"];

const Dashboard = () => {
  const [isActive, setIsActive] = useState<string>("summary");

  const topCards = () => {
    return (
      <div className="flex flex-wrap  xl:w-[1163px] xl:h-[78.35px] gap-[27.38px]">
        {summaryTableData.map((item, index) => (
          <div
            key={index}
            className="w-[210px] h-[78.35px] flex justify-between items-center border border-[#E5E5E5] rounded-lg shadow-md px-4"
          >
            <div className="flex flex-col">
              <p className="font-semibold text-[16px] text-[#383838] ">
                {item.title}
              </p>
              <p className="font-bold text-[22.93px] ">{item.value}</p>
            </div>
            <img className="w-[47.78px] h-[47.78px] " src={item.icon} alt="" />
          </div>
        ))}
      </div>
    );
  };

  const summary = () => {
    return (
      <div className="w-full h-full md:w-[573px] md:h-[409.44px] border border-[#E5E5E5] rounded-[7.35px]">
        <div className="bg-[#E9F1FF] p-3  h-[80.39px] ">
          <h1 className="font-semibold text-lg md:text-[22.69px] text-[#383838] ">
            Weekly Summary
          </h1>
          <p className="font-semibold text-sm md:text-[13.98px] text-[#383838]">
            Performace metrics from the past week{" "}
          </p>
        </div>

        <div className="p-2 md:p-3 flex flex-col  h-full gap-2 md:gap-3">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className=" md:w-[542.27px] md:h-[87.9px] flex justify-between items-center bg-[#F8F8F8] p-1 md:p-4 rounded-lg"
            >
              <div className="flex items-center gap-1 md:gap-3 ">
                <img
                  className=" h-[42px] w-[42px] md:h-[56px] md:w-[56px]"
                  src={data.gamesAnalyzedIcon}
                  alt=""
                />
                <div>
                  <h2 className="font-semibold text-[13px] md:text-[20.8px] text-[#000000]">
                    {item.title}
                  </h2>
                  <p className="font-semibold text-[9px] md:text-[15.13px] text-[#029661]">
                    {item.subtext}
                  </p>
                </div>
              </div>
              <h1 className="text-[15px] md:text-[22.69px] font-semibold  ">
                {item.value}
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // const list = () => {
  //   return (
  //     <div className="w-full xl:w-[1171px] border border-[#A8A8A852] rounded-tl-lg rounded-tr-lg ">
  //       <table className="w-full xl:w-[1171px] ">
  //         <thead className="bg-[#E9F1FF] ">
  //           <tr>
  //             <th className="border-b border-[#A8A8A852] text-left px-[29.48px] py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
  //               COMPETITION NAME
  //             </th>
  //             <th className="border-b border-[#A8A8A852] text-left md:px-[29.48px] md:py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
  //               TEAM
  //             </th>
  //             <th className=" border-b border-[#A8A8A852] text-left md:px-[29.48px] md:py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
  //               GRADE
  //             </th>
  //             <th className="border-b border-[#A8A8A852]text-left md:px-[29.48px] md:py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
  //               STATUS
  //             </th>
  //             <th className="border-b border-[#A8A8A852] text-left md:px-[29.48px] md:py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
  //               MANAGE
  //             </th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr className="h-[83.84px] border-b border-[#A8A8A852] ">
  //             <td className="px-[29.48px] py-[9.21px] text-[13px] xl:text-[20px] font-bold">
  //               Alberta Australian Football League
  //             </td>
  //             <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px] ">
  //               20
  //             </td>
  //             <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px]">
  //               Under 18
  //             </td>
  //             <td className="px-[29.48px] py-[9.21px]">
  //               <span className="inline-block text-[8px] md:text-[14px] rounded-full text-[#22C55E] bg-[#21FF041A] w-[73.3px] h-[25px] leading-[25px] text-center font-semibold">
  //                 Active
  //               </span>
  //             </td>
  //             <td className="px-[29.48px] py-[9.21px]">
  //               <div className="flex items-center gap-2 md:gap-4">
  //                 <img
  //                   className="md:w-[16.67px] md:h-[18.32px] cursor-pointer"
  //                   src={data.editIcon}
  //                   alt=""
  //                 />
  //                 <img
  //                   className="md:w-[16.5px] md:h-[15.13px] cursor-pointer"
  //                   src={data.deleteIcon}
  //                   alt=""
  //                 />
  //               </div>
  //             </td>
  //           </tr>

  //           <tr className="h-[83.84px] border-b border-[#A8A8A852] ">
  //             <td className="px-[29.48px] py-[9.21px] text-[13px] xl:text-[20px] font-bold">
  //               Alberta Australian Football League
  //             </td>
  //             <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px] ">
  //               20
  //             </td>
  //             <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px]">
  //               Under 18
  //             </td>
  //             <td className="px-[29.48px] py-[9.21px]">
  //               <span className="inline-block text-[8px] md:text-[14px] rounded-full text-[#22C55E] bg-[#21FF041A] w-[73.3px] h-[25px] leading-[25px] text-center font-semibold">
  //                 Active
  //               </span>
  //             </td>
  //             <td className="px-[29.48px] py-[9.21px]">
  //               <div className="flex items-center gap-2 md:gap-4">
  //                 <img
  //                   className="md:w-[16.67px] md:h-[18.32px] cursor-pointer"
  //                   src={data.editIcon}
  //                   alt=""
  //                 />
  //                 <img
  //                   className="md:w-[16.5px] md:h-[15.13px] cursor-pointer"
  //                   src={data.deleteIcon}
  //                   alt=""
  //                 />
  //               </div>
  //             </td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // };

  return (
    <div className="w-auto h-screen flex flex-col px-3 pb-6 pt-2 sm:px-6 sm:py-4 gap-4 md:gap-8 ">
      {/* top cards */}
      {topCards()}

      {/* summary and list toggle section */}

      <div className="w-full  border-b border-b-[#E5E5E5]">
        <div className="w-full md:w-[536px] h-[42px] flex flex-col sm:flex-row ">
          <p
            onClick={() => setIsActive("summary")}
            className={`${
              isActive === "summary"
                ? "text-white bg-[#13274B] rounded-tl-[8px] rounded-tr-[8px] "
                : "text-[#777777]"
            } xl:w-[308px] xl:h-[41px] px-2 py-1 font-semibold text-[12px] md:text-[16px] flex justify-center items-center cursor-pointer`}
          >
            Weekly Summary & Games Completed
          </p>
          <p
            onClick={() => setIsActive("list")}
            className={`${
              isActive === "list"
                ? "text-white bg-[#13274B] rounded-tl-[8px] rounded-tr-[8px] "
                : "text-[#777777]"
            } xl:w-[228px] xl:h-[41px] px-2 py-1 font-semibold text-[12px] md:text-[16px] flex justify-center items-center cursor-pointer`}
          >
            List of Active Competition
          </p>
        </div>
      </div>

      {/* bottom table and list section */}
      {isActive === "summary" ? (
        summary()
      ) : (
        //  list()
        <Table
          tableHeaders={tableHeaders}
          keyNames={competitionKeys}
          filteredData={tableData}
          editIcon={data.editIcon}
          deleteIcon={data.deleteIcon}
        />
      )}
    </div>
  );
};

export default Dashboard;
