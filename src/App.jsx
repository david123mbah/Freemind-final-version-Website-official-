import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero";
import HowItworks from "./components/Home/HowItworks";
import Services from "./components/Home/Services";
import Testimonials from "./components/Home/Testimonials";
import Resources from "./components/Home/Resources";
import FrequentlyAsked from "./components/Home/FrequentlyAsked";
import Contact from "./components/Home/Contact";
import Contactes from "./components/Home/Cotacte";

const App = () => {
  const location = useLocation();
  const showSidebar = location.pathname !== "/";

  return (
    <div className=" bg-[#F7F6F4]">
      <Navbar />
      <Hero/>
      <HowItworks/>
      <Services/>
      <Testimonials/>
      <Resources/>
      <FrequentlyAsked/>
      <Contactes/>
      <Contact/>
      
      <Routes>
       <Route pa th="/collaborator" element={<Hero/>} />
      </Routes>
    </div>
  );
};

export default App;
