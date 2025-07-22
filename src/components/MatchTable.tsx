import { useState } from "react";

type Team = {
  pos: number;
  name: string;
  w: number;
  o: number;
  l: number;
  pts: number;
};

const tableData: Team[] = [
  { pos: 1, name: "South Melbourne", w: 25, o: 32, l: 32, pts: 32 },
  { pos: 1, name: "Avandole FC", w: 25, o: 32, l: 32, pts: 32 },
  { pos: 1, name: "Oakleigh Cammons", w: 25, o: 32, l: 32, pts: 32 },
  { pos: 1, name: "Hume City", w: 25, o: 32, l: 32, pts: 32 },
  { pos: 1, name: "South Melbourne", w: 25, o: 32, l: 32, pts: 32 },
  { pos: 1, name: "South Melbourne", w: 25, o: 32, l: 32, pts: 32 },
  { pos: 1, name: "South Melbourne", w: 25, o: 32, l: 32, pts: 32 },
  { pos: 1, name: "South Melbourne", w: 25, o: 32, l: 32, pts: 32 },
  { pos: 1, name: "South Melbourne", w: 25, o: 32, l: 32, pts: 32 },
];

const MatchTable = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [active, setActive] = useState<string>("Basic");

  return (
    <div className="w-full h-auto md:h-[621px] md:w-[446px] md:mt-3">
      <div className="px-3 md:w-[446px] h-[40px] bg-[#13274B] border rounded-tl-xl rounded-tr-xl flex justify-between items-center">
        <div className="flex items-center gap-3">
          <p className="font-semibold text-[14px] text-white ">Table</p>
          {/* toggle btn */}
          <div
            onClick={() => setIsOn(!isOn)}
            className={`w-[37.68px] h-[18.84px] flex items-center px-[2px] rounded-full cursor-pointer transition-colors duration-300 ${
              isOn ? "bg-white" : "bg-white"
            }`}
          >
            <div
              className={`bg-[#13274B] h-[15.65px] w-[14.65px] rounded-full shadow-md transform transition-transform duration-300 ${
                isOn ? "translate-x-[18px]" : "translate-x-0"
              }`}
            ></div>
          </div>
        </div>

        {/* right buttons */}
        <div className="w-[124.32px] h-[25.63px] border border-[#E5E5E5] px-[2px] py-[2px] rounded-full font-medium text-[11px] flex justify-between items-center">
          <button
            className={`transition-all duration-300 ${
              active === "Basic"
                ? "bg-white text-[#383838] w-[60px] h-[21px] rounded-full"
                : "text-white w-[60px] h-[21px]"
            }`}
            onClick={() => setActive("Basic")}
          >
            Basic
          </button>
          <button
            className={`transition-all duration-300 ${
              active === "Advanced"
                ? "bg-white text-[#383838] w-[60px] h-[21px] rounded-full"
                : "text-white w-[60px] h-[21px]"
            }`}
            onClick={() => setActive("Advance")}
          >
            Advance
          </button>
        </div>
      </div>
      <table className="table-auto w-full border border-gray-300 text-center">
        <thead className="bg-[#E9F1FF] text-[#646464] font-bold text-[11.46px]  text-left">
          <tr>
            <th className="px-3 py-2 ">Pos</th>
            <th className="px-3 py-2 ">Competition Name</th>
            <th className="px-3 py-2 ">W</th>
            <th className="px-3 py-2 ">O</th>
            <th className="px-3 py-2 ">L</th>
            <th className="px-3 py-2 ">Pts</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((team, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border text-left`}
            >
              <td className="text-[#383838] font-semibold text-[12px] sm:text-[17.2px] px-3 py-2 ">
                {team.pos}
              </td>
              <td className="text-[#13274B] font-bold text-[10px] md:text-[16px] px-3 py-2 flex items-center gap-2 ">
                <div className="bg-[#D9D9D9] w-[5px] h-[5px] sm:w-[20px] sm:h-[20px] rounded-full"></div>
                {team.name}
              </td>
              <td className="font-medium text-[12px] sm:text-[14.33px] text-[#4D4D4D] px-3 py-2 ">{team.w}</td>
              <td className="font-medium text-[12px] sm:text-[14.33px] text-[#4D4D4D] px-3 py-2 ">{team.o}</td>
              <td className="font-medium text-[12px] sm:text-[14.33px] text-[#4D4D4D] px-3 py-2 ">{team.l}</td>
              <td className="font-medium text-[12px] sm:text-[14.33px] text-[#4D4D4D] px-3 py-2 ">{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchTable;
