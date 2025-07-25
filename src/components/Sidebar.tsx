import { NavLink } from "react-router-dom";
import { data } from "../assets/data";



const sidebarItems = [
  { label: "Dashboard",icon: data.sidebarDashboardIcon, path: "/" },
  { label: "League", icon:data.sidebarLeagueIcon,path: "/league" },
  { label: "Competitions",icon:data.sidebarCompetationIcon, path: "/competitions" },
  { label: "Teams",icon:data.sidebarTeamIcon, path: "/teams" },
  { label: "Players",icon:data.sidebarPlayersIcon, path: "/players" },
  { label: "Clubs",icon:data.sidebarClubsIcon, path: "/clubs" },
  { label: "Grades",icon:data.sidebarGradeIcon, path: "/grades" },
  { label: "Fixtures",icon:data.sidebarFixturesIcon, path: "/fixtures" },
  { label: "Cost Analysis",icon:data.sidebarCostAnalysisIcon, path: "/cost-analysis" },
  { label: "Sports Management",icon:data.sidebarSportsManagementIcon, path: "/sports-management" },
  { label: "Message",icon:data.sidebarMessagesIcon, path: "/message" },
  { label: "Setting",icon:data.sidebarSettingsIcon, path: "/setting" },
];

const Sidebar = () => {
  return (
    <div className="w-[80px] md:w-[221px] min-h-screen h-[1900px] fixed bg-darkBlue border-t border-[#D3D3D33D] shadow-[10.35px_11.5px_72.43px_0px_#D3D3D33D] z-10 flex flex-col items-center gap-3 px-2 pt-10">
      {sidebarItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `flex items-center md:gap-2 justify-center md:justify-start w-full h-[46px] rounded-lg px-2 cursor-pointer transition-all ${
              isActive ? "border-[0.77px] border-white bg-[#FFFFFF1A]" : "text-white hover:border-[0.77px] hover:border-white"
            }`
          }
          // className="flex items-center md:gap-2 justify-center md:justify-start hover:border-[0.77px] hover:border-white w-full h-[46px] rounded-lg px-2 cursor-pointer transition-none"
        >
          <img className="w-[20px] h-[20px]" src={item.icon} alt={`${item.label} Icon`} />
          <p className="hidden md:block text-white text-[16px]">{item.label}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
