import React from "react";

type TableProps = {
  tableHeaders: string[];
  keyNames : string[];
  filteredData: Array<Record<string, string | number>>;
  editIcon: string;
  deleteIcon: string;
  onEdit?: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete?: (item: Record<string, string | number>) => void;
};

const Table: React.FC<TableProps> = ({
  tableHeaders,
  keyNames,
  filteredData,
  editIcon,
  deleteIcon,
  onEdit,
}) => {
  return (
    <div className="w-full xl:w-[1171px] border border-[#A8A8A852] rounded-tl-lg rounded-tr-lg ">
      <table className="w-full xl:w-[1171px] ">
        <thead className="bg-[#E9F1FF] ">
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold"
              >
                {header}
              </th>
            ))}
            {/* <th className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
              ID
            </th>
            <th className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
              LEAGUE NAME
            </th>
            <th className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
              COUNTRY
            </th>
            <th className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
              NO. OF COMPETITIONS
            </th>
            <th className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
              STATUS
            </th>
            <th className="border-b border-[#A8A8A852] text-left px-2 py-1 md:px-[29.48px] md:py-[9.21px] text-[8px] md:text-[14.74px] text-[#646464] font-bold">
              ACTIONS
            </th> */}
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr
                key={index}
                className="h-[83.84px] border-b border-[#A8A8A852] "
              >
                {
                  keyNames.map((key , index) =>(
                    <td key={index} className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px] ">
                  {item[key]}
                </td>
                  ))
                }
                {/* <td className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px] ">
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
                </td> */}
                <td className="px-[29.48px] py-[9.21px]">
                  <div className="flex items-center gap-2 md:gap-4">
                    <img
                      onClick={() => onEdit?.(true)}
                      className="md:w-[16.67px] md:h-[18.32px] cursor-pointer"
                      src={editIcon}
                      alt="Edit"
                    />
                    <img
                      className="md:w-[16.5px] md:h-[15.13px] cursor-pointer"
                      src={deleteIcon}
                      alt="Delete"
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center py-6 text-gray-500">
                No leagues found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
