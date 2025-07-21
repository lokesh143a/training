import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import OtpVerification from "./pages/OtpVerification";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import CoachManagement from "./pages/CoachManagement";
import TeamManagement from "./pages/TeamManagement";
import PlayerManagement from "./pages/PlayerManagement";

const App: React.FC = () => {
  const location = useLocation();

  const hideSidebarRoutes: string[] = [
    "/login",
    "/sign-up",
    "/forget-password",
    "/forget-password/otp-verification",
    "/forget-password/reset-password",
  ];

  const shouldShowSidebar: boolean = !hideSidebarRoutes.includes(
    location.pathname
  );

  return (
    <div className="">
      <Navbar />

      <div className="flex mt-[80px] ">
        {shouldShowSidebar && <Sidebar />}

        <div className={shouldShowSidebar ? "ml-[221px] flex-1" : "flex-1"}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/coach-management" element={<CoachManagement />} />
            <Route path="/team-management" element={<TeamManagement />} />
            <Route path="/player-management" element={<PlayerManagement />} />

            {/* signup and login routes */}
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* forget password section */}
            <Route path="/forget-password">
              <Route index element={<ForgetPassword />} />
              <Route path="otp-verification" element={<OtpVerification />} />
              <Route path="reset-password" element={<ResetPassword />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
