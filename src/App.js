
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import Navbar from './component/Navbar/Navbar';
import Casino from './pages/Casino/page'
import Sidebar from './component/Sidebar/Sidebar'
import Rightsidebar from "./component/Rightsidebar/Rightsidebar";
import Header from './component/Header/header'
import TradingGame from './component/TradingGame/TradingGame'
import Footer from './component/Footer/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handlemodeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Router>
      <Navbar handlemodeToggle={handlemodeToggle} darkMode={darkMode} />

      <div className="grid grid-cols-12  bg-[#C0C0C0]  px-4 pt-4 dark:bg-[#202020] gap-2">
        <div className="col-span-9 lg:col-span-9 ">
          <div className="flex space-x-4">
            <div className=" w-[19%]">
            <Sidebar />
            </div>
            <div className="w-[81%] overflow-y-scroll max-h-full  scrollbar-hide sm:h-[510px] 2xl:h-screen">
            <Header/>
          <TradingGame/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Casino" element={<Casino />} />
          </Routes>
          <Footer/>
            </div>
          </div>
        
         
        </div>
        <div className="col-span-3 lg:col-span-3">
          <Rightsidebar />
        </div>
      </div> 










      
    </Router>
  );
}

export default App;
