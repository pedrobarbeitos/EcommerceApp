import React from 'react';
import {Link} from "react-router-dom";

//Mui Imports
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

//Style Imports
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="wrapper">
         <div className="left">
          <div className="item">
            <img src="/images/en.png" alt=""/>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>GBP</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/women">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/men">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/children">Children</Link>
          </div>
          </div>
         <div className="center">
          <Link to="/">PEDROSTORE</Link>
         </div>
         <div className="right">
         <div className="item">
          <Link to="/">Homepage</Link>
         </div>
         <div className="item">
          <Link to="/">About</Link>
         </div>
         <div className="item">
          <Link to="/">Contact</Link>
         </div>
         <div className="item">
          <Link to="/">Stores</Link>
         </div>
         <div className="icons">
          <SearchIcon/>
          <PersonOutlineOutlinedIcon/>
          <FavoriteBorderOutlinedIcon/>
          <div className="cartIcon">
            <ShoppingCartRoundedIcon/>
            <span>0</span>
          </div>

         </div>
         </div>
        </div>
    </div>
  );
};

export default Navbar;