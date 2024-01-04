import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoChevronDownSharp } from "react-icons/io5";
import Getstarted from "./Getstarted";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left_section">
        <div className="logo">
          <AiOutlineGlobal />
        </div>
        <div className="nova">
          <p>nova</p>
        </div>
      </div>
      <div className="center_section">
           
                <a href="#">Business Checking <IoChevronDownSharp/> </a>     
                <a href="#">Solution <IoChevronDownSharp/></a>
                <a href="#">Resources <IoChevronDownSharp/></a>
                <a href="#">Results </a>
                <a href="#">Contact <IoChevronDownSharp/></a>

        <div className="right_section">
            <button className="login_btn">Log In</button>
          <Getstarted/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
