import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";
import Cart from '../../components/Cart/Cart';

//Mui Imports
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

//Style Imports
import "./Navbar.scss"

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
        <div className="wrapper">
         <div className="left">
          <div className="item">
            <Link className="link" to="/products/women">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/men">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/children">Children</Link>
          </div>
          </div>
         <div className="center">
          <Link className="link" to="/">PEDROSTORE</Link>
         </div>
         <div className="right">
         <div className="item">
          <Link className="link" to="/">About</Link>
         </div>
         <div className="item">
          <Link className="link" to="/">Contact</Link>
         </div>
         <div className="item">
          <Link className="link" to="/">Stores</Link>
         </div>
         <div className="icons">
          <SearchIcon/>
          <PersonOutlineOutlinedIcon/>
          <FavoriteBorderOutlinedIcon/>
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingCartRoundedIcon/>
            <span>0</span>
          </div>

         </div>
         </div>
        </div>
        {open && <Cart/>}
    </div>
  );
};

export default Navbar;