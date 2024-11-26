// src/components/Navbar.js
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaCog } from 'react-icons/fa';
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
// import {buttons} from '../../data/data'
import { Link } from 'react-router-dom';
 const buttons = [
  { label: "Sport", url: "/sport" },
  { label: "Casino", url: "/Casino" },
  { label: "Promotion", url: "/promotion" },
  { label: "E-sports", url: "/esports" },
  { label: "Aviator", url: "/aviator" }
];
function Navbar({handlemodeToggle, darkMode}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeButton, setActiveButton] = useState(0); // Set the first button as active initially
    const [isOpen, setIsOpen] = useState(false);
    const [isLanguage, setIsLanguage] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [isChecked, setIsChecked] = useState(false);
    // const [activeButton, setActiveButton] = useState(null);
    const [hoverLastButton, setHoverLastButton] = useState(false); // State to track hover on last button
  
    const handleClick = (index) => {
      setActiveButton(index);
    };
  
    // Toggle state handler
    const handleactivestatusToggle = () => {
      
      setIsChecked(!isChecked);
    };
    // Toggle dropdown visibility
    const handleToggle = () => {
      setIsOpen(!isOpen);
      setIsLanguage(!isLanguage)
    };
  const  handleLanguagedownDown =()=>{
    setIsLanguage(!isLanguage)
  }
  
    // Handle language selection
    const handleLanguageSelect = (language) => {
      setSelectedLanguage(language);
      setIsOpen(false); // Close dropdown after selection
    };
  // const handleClick = (index) => {
  //   setActiveButton(index);
  // };
    const suggestions = [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Elderberry",
      "Fig",
      "Grape",
      "Honeydew",
    ];
  
    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
      if (e.target.value.length > 0) {
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    };
  
    const filteredSuggestions = suggestions.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <div className="grid grid-cols-12 bg-gray-200 dark:bg-black px-5 py-3">
    <div className="col-span-4   ">
    <div className="grid grid-cols-12  items-center justify-center">
          <div className="col-span-5 flex items-center justify-center">
            <img src="https://cdn.cloudd.site/khelo-bharat.com/ap/logo-light.png?v=9" alt="logo" className='h-[50px] w-[500px]'/>
          </div>
          <div className="col-span-1"><HiOutlineMenuAlt3 className='text-[34px] text-custom-yellow'/></div>
          <div className="col-span-6"> <div className="relative w-52">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
    {/* You can use any search icon from a library like FontAwesome or Heroicons */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
      />
    </svg>
  </div>
  <input
    type="text"
    value={searchTerm}
    onChange={handleInputChange}
    className="w-full pl-10 px-4 py-2 italic bg-gray-200 dark:bg-custom-background-color text-black dark:text-white   rounded-lg focus:outline-none"
    placeholder="Event, Markets and More"
  />



      {showDropdown && searchTerm && (
        <ul className="absolute z-10 w-full text-gray-900 dark:text-white mt-1 custom-background border border-gray-300 rounded-lg shadow-lg">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-custom-background"
                onClick={() => {
                  setSearchTerm(item);
                  setShowDropdown(false);
                }}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div></div>
        </div>
    </div>
    {/* <div className="col-span-6  flex space-x-6 justify-center items-center">
  {["Sport", "Casino", "Promotion", "E-sports", "Aviator"].map((button, index) => (
    <div className="relative" key={index}>
      <button
        className={`px-4 py-2 font-montserrat whitespace-nowrap font-semibold text-[13px] rounded-lg hover:bg-custom-yellow hover:text-black transition-all duration-300 
          ${activeButton === index ? "bg-custom-yellow text-black" : "text-black dark:text-gray-300"}
          ${index === 4 ? "!text-custom-text-color hover:w-32  !py-1 text-[25px] !font-lobster hover:px-4 hover:text-custom-text-color hover:bg-custom-yellow" : "hover:text-[14px]"}`}
        onClick={() => handleClick(index)}
        onMouseEnter={() => index === 4 && setHoverLastButton(true)}  // Detect hover for the last button
        onMouseLeave={() => index === 4 && setHoverLastButton(false)} // Detect hover end
      >
        {button}
        {index === 4 && (
          <span
            className={`absolute left-16 right-0 text-[12px] transition-transform duration-500 ease-in-out transform ${
              hoverLastButton ? " mt- opacity-100" : "opacity-0 -inset-14 -inset-y-56 translate-y-0"
            }`}
          >
            Demo Text
          </span>
        )}
      </button>
    </div>
  ))}
</div> */}


<div className="col-span-6 flex space-x-6 justify-center items-center">
      {buttons.map((button, index) => (
        <div className="relative" key={index}>
          <Link to={button.url}> {/* Link to the URL from the array */}
            <button
              className={`px-4 py-2 font-montserrat whitespace-nowrap font-semibold text-[13px] rounded-lg hover:bg-custom-yellow hover:text-black transition-all duration-300 
                ${activeButton === index ? "bg-custom-yellow text-black" : "text-black dark:text-gray-300"}
                ${index === 4 ? " !text-custom-text-color !py-1 text-[25px] !font-lobster hover:bg-custom-yellow" : "hover:text-[14px]"}`}
              onClick={() => handleClick(index)}
              onMouseEnter={() => index === 4 && setHoverLastButton(true)}  
              onMouseLeave={() => index === 4 && setHoverLastButton(false)} 
            >
              {button.label} {/* Ensure to display the label */}
              {index === 4 && hoverLastButton && (
                <span className="text-[12px] ease-in-out transform transition-transform -translate-y-3 duration-500 ">
                  Demo Text
                </span>
              )}
            </button>
          </Link>
        </div>
      ))}
    </div>






<div className="col-span-2   flex items-center justify-between">
      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-custom-yellow font-semibold text-black px-4 py-2 whitespace-nowrap rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800">
          Sign In
        </button>
        <button className="bg-custom-yellow font-semibold text-black px-4 whitespace-nowrap py-2 rounded-lg transition-all duration-300 hover:bg-yellow-400 hover:text-gray-800">
          Sign Up
        </button>
        <div className="relative">
      {/* Settings Icon */}
      
        <FaCog
          className={`text-custom-yellow dark:text-yellow-500 text-2xl mt-2 cursor-pointer transition-transform duration-500 ${
            isOpen
              ? "rotate-360 !text-custom-yellow " // Rotate 360 degrees and change color when open
              : "rotate-0 "
          }`}
          onClick={handleToggle} // Toggle the dropdown on click
        />
      

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-6 w-[350px] bg-white  dark:bg-gray-900 shadow-lg rounded-lg p-4 z-10">
          <ul className="text-gray-700 gap-3 flex items-center justify-center  ">
            <li className="cursor-pointer"> <div className="relative inline-block">
      {/* Dropdown Button */}
      <button
        className="px-3 py-2 flex  justify-between items-center bg-gray-800 text-white rounded-lg"
        onClick={handleLanguagedownDown}
      >
        {selectedLanguage} <span> <RiArrowDropDownLine className="text-[25px] ml-5 text-custom-yellow"/></span> 
      </button>

      {/* Dropdown Menu */}
      {isLanguage && (
        <div className="absolute  mt-2 w-40 bg-white shadow-lg rounded-lg  z-10">
          <ul className="text-gray-700  whitespace-nowrap">
            {["English", "English ", "English ", "English"].map(
              (language) => (
                <li
                  key={language}
                  className="py-1 px-2 whitespace-nowrap cursor-pointer hover:bg-gray-200"
                  onClick={() => handleLanguageSelect(language)}
                >
                  {language} 
                </li>
              )
            )}
          </ul>
        </div>
      )} </div></li>
            <li className=" cursor-pointer"><MdOutlineWbSunny className="text-[25px] text-custom-yellow dark:text-gray-300 "/></li>
            <li   className="  cursor-pointer">
            <label className="inline-flex items-center cursor-pointer">
      {/* Checkbox Input */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleactivestatusToggle}
        onClick={handlemodeToggle}
        className="sr-only peer"
      />
      
      {/* Toggle Switch */}
      <div className="relative w-14 h-7 bg-gray-200 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[6px] after:bg-black  after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-custom-yellow"></div>
      
      {/* Label */}
      
    </label></li>
            <li className=" cursor-pointer"><IoMoonOutline className="text-custom-yellow dark:text-gray-300 text-[25px]"/></li>
          </ul>
        </div>
      )}
    </div>
      </div>
      
     
      
    </div>
  </div>

  );
}

export default Navbar;
