import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import OtpVerification from "./pages/OtpVerification";
import ResetPassword from "./pages/ResetPassword";
// import HiFiClubDashboard from "./pages/HiFiClubDashboard";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";

import Notfound from "./components/Notfound";
import League from "./pages/League";
import Competitions from "./pages/Competitions";
import Teams from "./pages/Teams";
import Fixtures from "./pages/Fixtures";

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

        <div
          className={
            shouldShowSidebar ? "ml-[80px] md:ml-[221px] flex-1 " : "flex-1"
          }
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/league" element={<League />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/fixtures" element={<Fixtures />} />

            {/* signup and login routes */}
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* forget password section */}
            <Route path="/forget-password">
              <Route index element={<ForgetPassword />} />
              <Route path="otp-verification" element={<OtpVerification />} />
              <Route path="reset-password" element={<ResetPassword />} />
            </Route>

            {/* not found route */}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
