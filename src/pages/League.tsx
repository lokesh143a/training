import { data } from "../assets/data";

type LeagueData = {
  id: string | number;
  leagueName: string;
  country: string;
  numberOfCompetitions: number;
  status: string;
};

const leagueData: LeagueData[] = [
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
  const filterSection = () => {
    return (
      <div className="flex flex-wrap gap-3">
        <div className="flex justify-between items-center border border-[#C7C7C7] rounded-[7.32px] px-3 py-2 md:w-[396px] md:h-[45px] ">
          <input
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

        <div className="relative flex w-full max-w-[180px] md:w-[153px] md:h-[48px] text-[#7F7D7D] border border-[#C7C7C7] rounded-[5.47px] px-3 py-2">
          <select
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
      </div>
    );
  };

  const leagueTable = () => {
    return (
      <div className="w-full xl:w-[1171px] border border-[#A8A8A852] rounded-tl-lg rounded-tr-lg ">
        <table className="w-full xl:w-[1171px] ">
          <thead className="bg-[#E9F1FF] ">
            <tr>
              <th className="border-b border-[#A8A8A852] text-left px-[29.48px] py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
                ID
              </th>
              <th className="border-b border-[#A8A8A852] text-left px-[29.48px] py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
                LEAGUE NAME
              </th>
              <th className="border-b border-[#A8A8A852] text-left md:px-[29.48px] md:py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
                COUNTRY
              </th>
              <th className=" border-b border-[#A8A8A852] text-left md:px-[29.48px] md:py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
                NO. OF COMPETITIONS
              </th>
              <th className="border-b border-[#A8A8A852]text-left md:px-[29.48px] md:py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
                STATUS
              </th>
              <th className="border-b border-[#A8A8A852] text-left md:px-[29.48px] md:py-[9.21px] text-[14px] md:text-[14.74px] text-[#646464] font-bold">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {leagueData.map((item, index) => (
              <tr
                key={index}
                className="h-[83.84px] border-b border-[#A8A8A852] "
              >
                <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px] ">
                  {item.id}
                </td>
                <td className="px-[29.48px] py-[9.21px] text-[13px] xl:text-[20px] font-bold">
                  {item.leagueName}
                </td>
                <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px] ">
                  {item.country}
                </td>
                <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px]">
                  {item.numberOfCompetitions}
                </td>
                <td className="px-[29.48px] py-[9.21px]">
                  <span className="inline-block text-[8px] md:text-[14px] rounded-full text-[#22C55E] bg-[#21FF041A] w-[73.3px] h-[25px] leading-[25px] text-center font-semibold">
                    {item.status}
                  </span>
                </td>
                <td className="px-[29.48px] py-[9.21px]">
                  <div className="flex items-center gap-2 md:gap-4">
                    <img
                      className="md:w-[16.67px] md:h-[18.32px] cursor-pointer"
                      src={data.editIcon}
                      alt=""
                    />
                    <img
                      className="md:w-[16.5px] md:h-[15.13px] cursor-pointer"
                      src={data.deleteIcon}
                      alt=""
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen p-3 md:p-5 flex flex-col gap-4">
      {/* top section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="text-[#1C1C1C] font-semibold text-lg md:text-[30px]">
          League Management
        </h1>
        <div className="flex gap-2">
          <button className="font-medium text-[#A8A8A8] text-sm md:text-[16.28px] border border-[#A8A8A8] w-20 md:w-[124px] h-10 md:h-[43px] p-2 md:p-[10.18px] rounded-md md:rounded-[8.14px]">
            Export
          </button>
          <button className="font-medium text-[#FFFFFF] text-[16.28px] bg-[#EF4B41] w-25 md:w-[194px] h-10 md:h-[43px] p-2 md:p-[10.18px] rounded-md md:rounded-[8.14px] ">
            Create New League
          </button>
        </div>
      </div>

      {/* filter section */}
      {filterSection()}

      {/* league table */}
      {leagueTable()}
    </div>
  );
};

export default League;
