import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero";
import HowItworks from "./components/Home/HowItworks";

const App = () => {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";

  return (
    <div className=" bg-[#F7F6F4]">
      <Navbar />
      <Hero/>
      <HowItworks/>
      <Routes>
       <Route pa th="/collaborator" element={<Hero/>} />
      </Routes>
    </div>
  );
};

export default App;
