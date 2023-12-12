import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import SingInForm from "./SingInForm";
import Navbar from './Navbar';


const Header = () => {

  const navLinkStyles = ({isActive})=>{
    return{
        color : isActive ? ' #ff8205' : 'rgba(79, 53, 48, 1)',
         
    }
}
  return (
   <>
    <header>
        <nav className="header">
            
            < NavLink className={"link-styles"} id="companyName"><span className="orange">Spices </span> & <span className="green"> Herbs</span></NavLink>
       
            <ul  className="navbar1">
            
              <li>
                <NavLink   style = {navLinkStyles} to="/wishlist"><i className="fa-regular fa-heart"></i>Wish List</NavLink>
              </li>
              <li >
                <NavLink   style = {navLinkStyles} to="/changelanguage"><i className="fa-solid fa-globe"></i>EN</NavLink>
              </li>
              <li >
                <NavLink   style = {navLinkStyles} to="/shoppingchart"><i className="fa-solid fa-cart-shopping"></i>Shopping Cart</NavLink>
              </li>
              <li >
                <NavLink   style = {navLinkStyles}  to='/singinform' ><i className="fa-solid fa-user"></i>My Account</NavLink>
              </li> 
            </ul>
      </nav>
      
      <Navbar/>
       
      {/* {showForm && (<SingInForm/> )} */}
   
    </header>
    </>
 );
};

export default Header