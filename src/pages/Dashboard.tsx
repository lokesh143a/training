import MatchCards from "../components/MatchCards";
import MatchTable from "../components/MatchTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen p-3 md:p-5 ">
      <h1 className="text-[30px] md:text-[42px] font-semibold tracking-[0.25px] text-black">
        Welcome Cale,
      </h1>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-lg md:text-[24px] tracking-[0.25px] text-black">
          Latest Matches
        </h2>

        <div className="flex flex-col lg:flex-row flex-wrap gap-4 ">
          {/* left cards section */}
          <MatchCards />

          {/* right table section */}
          <MatchTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
