import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import OtpVerification from "./pages/OtpVerification";
import ResetPassword from "./pages/ResetPassword";

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* forget password section */}
        <Route path="forget-password">
          <Route index element={<ForgetPassword />} />
          <Route path="otp-verification" element={<OtpVerification/>} />
          <Route path="reset-password" element={<ResetPassword/>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
