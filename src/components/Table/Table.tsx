import React from "react";

type TableProps = {
  tableHeaders: string[];
  keyNames: string[];
  filteredData: Array<Record<string, React.ReactNode>>;
};

const Table: React.FC<TableProps> = ({
  tableHeaders,
  keyNames,
  filteredData,
}) => {
  return (
    <div className="w-full xl:w-[1171px] border border-[#A8A8A852] rounded-tl-lg rounded-tr-lg overflow-hidden ">
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
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr
                key={index}
                className="h-[83.84px] border-b border-[#A8A8A852] "
              >
                {keyNames.map((key, index) => (
                  <td
                    key={index}
                    className="px-[29.48px] py-[9.21px] font-medium text-[#4D4D4D] text-[12px] xl:text-[18px] "
                  >
                    {item[key]}
                  </td>
                ))}
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
