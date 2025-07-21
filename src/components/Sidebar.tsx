import { NavLink } from "react-router-dom";
import { data } from "../assets/data";

const sidebarItems = [
  { label: "Dashboard", icon: data.sidebarDashboardIcon, path: "/" },
  { label: "Coach Management", icon: data.sidebarCoachIcon, path: "/coach-management" },
  { label: "Team Management", icon: data.sidebarTeamIcon, path: "/team-management" },
  { label: "Player Management", icon: data.sidebarPlayerIcon, path: "/player-management" },
];
const Sidebar = () => {
  return (
    <div className="w-[80px] md:w-[221px] min-h-screen fixed bg-darkBlue border-t border-[#D3D3D33D] shadow-[10.35px_11.5px_72.43px_0px_#D3D3D33D] z-10 flex flex-col items-center gap-3 px-2 pt-10">
      {sidebarItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `flex items-center md:gap-2 justify-center md:justify-start w-full h-[46px] rounded-lg px-2 cursor-pointer transition-all ${
              isActive ? "border-[0.77px] border-white bg-blue-900" : "text-white hover:border-[0.77px] hover:border-white"
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
