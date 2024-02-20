import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import './HeaderStyle.css'
import { isAuthenticated } from '../services/authService';



const Header = ({handleLogout}) => {
  const isLoggedIn = isAuthenticated();

  const navLinkStyles = ({isActive})=>{
    return{
        color : isActive ? ' #ff8205' : 'rgba(79, 53, 48, 1)',
         
    }
}
  return (
   <>
    <header>
        <nav className="header">
            
            < p className={"link-styles"} id="companyName"><span className="orange">Spices </span> & <span className="green"> Herbs</span></p>
       
            <ul  className="navbar1">
            
              <li>
                <NavLink   style = {navLinkStyles} to="/wishlist"><i class="fa-solid fa-heart"></i>Wish List</NavLink>
              </li>
              <li >
                <NavLink   style = {navLinkStyles} to="/changelanguage"><i className="fa-solid fa-globe"></i>EN</NavLink>
              </li>
              <li >
                <NavLink   style = {navLinkStyles} to="/shoppingchart"><i className="fa-solid fa-cart-shopping"></i>Shopping Cart</NavLink>
              </li>
              {isLoggedIn ? (
              <li >
                <NavLink   style = {navLinkStyles} to='/fall-fullstack-bootcamp' onClick={handleLogout} ><i className="fa-solid fa-user"></i>Logout</NavLink>
              </li>
              ) : (
              <li >
                <NavLink   style = {navLinkStyles}  to='/my-account' ><i className="fa-solid fa-user"></i>My Account</NavLink>
              </li> )}
            </ul>
      </nav>
      
       
      {/* {showForm && (<SingInForm/> )} */}
   
    </header>
    </>
 );
};

export default Header