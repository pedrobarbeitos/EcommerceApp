import React from 'react';
import {Link} from "react-router-dom";

//Mui Imports
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';



const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
         <div className="left"></div>
          <div className="item">
            <img src="images/en.png" alt=""/>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>GBP</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/women">Women</Link>
          </div>
         <div className="center"></div>
         <div className="right"></div>
        </div>
    </div>
  )
}

export default Navbar