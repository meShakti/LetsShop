import React, { useState } from "react";
import * as layout from "./index.module.css";


const toggleResponsiveMenu=()=> {
  var x = document.getElementById("topnav_element");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
  document.getElementById("topnav_togglemenu").classList.toggle("change");
}


const Layout = ({ children }) => {
 const [isExpanded, toggleExpansion] = useState(false);

  return (

		<div className={layout.layout}>

<nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl tracking-tight">New Abhishek</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow  flex justify-end text-base" >
         
          <a href="#" className="block text-sm px-4 py-2 block mt-4 lg:inline-block lg:mt-0  text-teal-200 hover:text-white mr-4"> Examples </a>
          <a href="#" className="block text-sm px-4 py-2 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> Examples </a>
          <a href="#" className="block text-sm px-4 py-2 block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> Examples </a>

          
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
        </div>
      </div>
    </nav>
    <nav className="topnav" id="topnav_element">
            <a href="#home"  className="active topnav_banner"><img src="/images/logo/logo.jpg" className="topnav_logo" alt="AdWorksCom"/>AdWorksCom</a>
            <a href="#createad">Create Ad</a>
            <a href="#contactus">Contact Us</a>
            <a href="#login">Log In</a>
            <a href="javascript:void(0);" className="topnav_icon" onClick={toggleResponsiveMenu}>
                <div className="topnav_togglemenu" id="topnav_togglemenu">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </a>
        </nav>
     
			{/* <div className={layout.header}>New Abhishek
			</div> */}

 		 <div className={layout.body}>{children}</div>
			<div className={layout.footer}>
        ©2020 by New Abhishek. Proudly Created by meShakti
			</div>
			</div>
     
  

	);
};
export default Layout;
