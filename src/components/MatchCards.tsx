import { data } from "../assets/data";

const MatchCards = () => {
  const middileCard = () => {
    return (
      <div className="w-full h-full lg:w-[703px] lg:h-[216px] flex flex-col relative">
        <div className="flex flex-col items-center gap-4 border px-3 pt-3 pb-12 md:pb-8 border-[#E5E5E5] rounded-lg shadow-md">
          {/* top line */}
          <div className="w-full relative flex justify-between">
            <p className="text-[14px] font-semibold bg-[#13274B] text-white rounded-full px-3 py-1">
              Last Played
            </p>
            <p className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-[#13274B] text-[16px] font-bold">
              Round No 15
            </p>
          </div>

          {/* middle images */}
          <div className="w-full flex justify-between items-center gap-3 md:flex-row  px-6">
            {/* Left team and score */}
            <div className="flex items-center gap-4 md:gap-12">
              <div className=" w-7 h-9 md:w-[98px] md:h-[120px] flex flex-col justify-between items-center">
                <img
                  className="h-[64px] w-[64px]"
                  src={data.adelaideImg}
                  alt=""
                />
                <h1 className=" text-sm md:text-[20px] text-[#13274B] font-bold text-center">
                  South Melbourne
                </h1>
              </div>
              <h1 className="font-semibold text-[30px] md:text-[46px] text-[#4E5D78] flex justify-center items-center">
                1<span className="text-[20px] md:text-[46px]">st</span>
              </h1>
            </div>

            {/* Center image */}
            <div className="w-7 h-9 md:w-[98px] md:h-[120px] flex flex-col pt-3 items-center">
              <img
                className="md:w-[44.83px] md:h-[62.42px]"
                src={data.footballVictoriaImg}
                alt=""
              />
            </div>

            {/* Right score and team */}
            <div className="flex items-center gap-4 md:gap-12">
              <h1 className="font-semibold text-[30px] md:text-[46px] text-[#4E5D78] flex justify-center items-center">
                7<span className="text-[20px] md:text-[46px]">th</span>{" "}
              </h1>
              <div className="w-7 h-9 md:w-[98px] md:h-[120px] flex flex-col justify-between items-center">
                <img
                  className="h-[64px] w-[64px]"
                  src={data.stingraysImg}
                  alt=""
                />
                <h1 className=" text-sm md:text-[20px] text-[#13274B] font-bold text-center">
                  South Melbourne
                </h1>
              </div>
            </div>
          </div>

          {/* bottom line */}
          <div className="flex gap-3 absolute bottom-1 md:bottom-3">
            <p className="px-2 py-1 text-[10px] md:w-[110px] md:h-[31px] bg-[#EE3243] rounded md:rounded-md font-semibold md:text-[16px] text-white flex justify-center items-center cursor-pointer">
              Preview
            </p>
          </div>
        </div>
      </div>
    );
  };

  const bottomCard = () => {
    return (
      <div className="w-full h-full md:w-[703px] md:h-[220px] border rounded-lg shadow-md">
        <p className="px-[13px] py-[16px] bg-[#13274B] rounded-tl-lg rounded-tr-lg text-white font-semibold text-[15px] md:text-[20px]">
          Stat Summary
        </p>
        <div className="flex justify-center items-center">
          {/* box 1 */}
          <div className="w-full mt-4">
            <div className="flex flex-col justify-center items-center ">
            <h1 className="flex font-semibold text-[#13274B] leading-none">
              <span className="text-[28px] md:text-[58px]">3</span>
              <span className="text-[15px] md:text-[22px] mt-[2px] md:mt-[6px]">
                rd
              </span>
            </h1>

            <h3 className="text-[13px] md:text-[18px] font-semibold text-[#13274B]">
              GOALS
            </h3>
            <p className="md:w-[83px] md:h-[23px] rounded-lg md:rounded-xl font-semibold text-[8px] md:text-[10px] bg-green-100 text-[#05A45F] flex justify-center items-center gap-0.5 sm:gap-2 px-1">
              Above Avg 
              <img className="w-[4px] sm:w-[6px]"  src={data.greenArrow} alt="" />
            </p>
          </div>
          </div>

          {/* box 2 */}
          <div className="w-full mt-4">
            <div className="flex flex-col justify-center items-center ">
            <h1 className="flex font-semibold text-[#13274B] leading-none">
              <span className="text-[28px] md:text-[58px]">10</span>
              <span className="text-[15px] md:text-[22px] mt-[2px] md:mt-[6px]">
                th
              </span>
            </h1>

            <h3 className="text-[13px] md:text-[18px] font-semibold text-[#13274B]">
              ASSISTS
            </h3>
            <p className="md:w-[83px] md:h-[23px] rounded-lg md:rounded-xl font-semibold text-[8px] md:text-[10px] bg-red-100 text-[#D20000] flex justify-center items-center gap-0.5 sm:gap-2 px-1">
              Below Avg
              <img className="w-[4px] sm:w-[6px]"  src={data.redArrow} alt="" />
            </p>
          </div>
          </div>

          {/* box 3 */}
          <div className="w-full mt-4">
            <div className="flex flex-col justify-center items-center ">
            <h1 className="flex font-semibold text-[#13274B] leading-none">
              <span className="text-[28px] md:text-[58px]">4</span>
              <span className="text-[15px] md:text-[22px] mt-[2px] md:mt-[6px]">
                th
              </span>
            </h1>

            <h3 className="text-[13px] md:text-[18px] font-semibold text-[#13274B]">
              TACKLES
            </h3>
            <p className="md:w-[83px] md:h-[23px] rounded-lg md:rounded-xl font-semibold text-[8px] md:text-[10px] bg-green-100 text-[#05A45F] flex justify-center items-center gap-0.5 sm:gap-2 px-1">
              Above Avg
              <img className="w-[4px] sm:w-[6px]"  src={data.greenArrow} alt="" />
            </p>
          </div>
          </div>

          {/* box 4 */}
          <div className="w-full mt-4">
            <div className="flex flex-col justify-center items-center ">
            <h1 className="flex font-semibold text-[#13274B] leading-none">
              <span className="text-[28px] md:text-[58px]">7</span>
              <span className="text-[15px] md:text-[22px] mt-[2px] md:mt-[6px]">
                th
              </span>
            </h1>

            <h3 className="text-[13px] md:text-[18px] font-semibold text-[#13274B]">
              PASSES
            </h3>
            <p className="md:w-[83px] md:h-[23px] rounded-lg md:rounded-xl font-semibold text-[8px] md:text-[10px] bg-green-100 text-[#05A45F] flex justify-center items-center gap-0.5 sm:gap-2 px-1">
              Above Avg
              <img className="w-[4px] sm:w-[6px]"  src={data.greenArrow} alt="" />
            </p>
          </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full lg:w-[703px] flex flex-col gap-3 md:gap-6 relative pb-12">
      {/* top card */}
      <div className="w-full h-full lg:w-[703px] lg:h-[216px] flex flex-col items-center gap-4 border px-3 pt-3 pb-12 md:pb-8 border-[#E5E5E5] rounded-lg shadow-md relative">
        {/* top line */}
        <div className="w-full relative flex justify-between">
          <p className="text-[14px] font-semibold bg-[#13274B] text-white rounded-full px-3 py-1">
            Last Played
          </p>
          <p className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-[#13274B] text-[16px] font-bold">
            Round No 15
          </p>
        </div>

        {/* middle images */}
        <div className="w-full flex justify-between items-center flex-wrap gap-3 md:flex-row  px-6">
          {/* Left team and score */}
          <div className="flex items-center gap-6 md:gap-12">
            <div className=" w-7 h-9 md:w-[98px] md:h-[120px] flex flex-col justify-between items-center">
              <img
                className="h-[64px] w-[64px]"
                src={data.adelaideImg}
                alt=""
              />
              <h1 className=" text-sm md:text-[20px] text-[#13274B] font-bold text-center">
                South Melbourne
              </h1>
            </div>
            <h1 className="font-semibold text-[30px] md:text-[46px] text-[#4E5D78]">
              1
            </h1>
          </div>

          {/* Center image */}
          <div className="w-7 h-9 md:w-[98px] md:h-[120px] flex flex-col pt-3 items-center">
            <img
              className="md:w-[44.83px] md:h-[62.42px]"
              src={data.footballVictoriaImg}
              alt=""
            />
          </div>

          {/* Right score and team */}
          <div className="flex items-center gap-6 md:gap-12">
            <h1 className="font-semibold text-[30px] md:text-[46px] text-[#4E5D78]">
              7
            </h1>
            <div className="w-7 h-9 md:w-[98px] md:h-[120px] flex flex-col justify-between items-center">
              <img
                className="h-[64px] w-[64px]"
                src={data.stingraysImg}
                alt=""
              />
              <h1 className=" text-sm md:text-[20px] text-[#13274B] font-bold text-center">
                South Melbourne
              </h1>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="flex gap-3 absolute bottom-1 md:bottom-3">
          <div className="w-6 h-6 md:w-[37.65px] md:h-[33.17px] bg-[#EE3243] rounded md:rounded-md flex justify-center items-center">
            <img
              className="w-3 h-3 md:w-[14.34px] md:h-[19.55px] "
              src={data.group}
              alt=""
            />
          </div>

          <div className="w-6 h-6 md:w-[37.65px] md:h-[33.17px] bg-[#EE3243] rounded md:rounded-md  flex justify-center items-center">
            <img
              className="w-4 h-3 md:w-[21.51px] md:h-[21.51px]"
              src={data.videoIcon}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* middel card */}
      {middileCard()}
      {/* bottom card */}
      {bottomCard()}
    </div>
  );
};

export default MatchCards;
