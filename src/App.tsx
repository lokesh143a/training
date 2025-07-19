import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
