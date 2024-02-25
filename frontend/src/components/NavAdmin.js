import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import './HeaderStyle.css'

// import { isAuthenticated } from '../services/authService';



const NavAdmin = ({handleLogout}) => {
  // const isLoggedIn = isAuthenticated();


  const navLinkStyles = ({isActive})=>{
    return{
        color : isActive ? ' #ff8205' : 'rgba(79, 53, 48, 1)',
         
    }
}
  return (
   <>
 
        <nav className="header">
            
            < p className={"link-styles"} id="companyName"><span className="orange">Spices </span> & <span className="green"> Herbs</span></p>
       
            <ul  className="navbar1">
            
              <li>
                <NavLink   style = {navLinkStyles} to="/all-users-admin">All Users</NavLink>
              </li>
              <li >
                <NavLink   style = {navLinkStyles} to="/all-products-admin">All Products</NavLink>
              </li>
              
             
              <li >
                <NavLink   style = {navLinkStyles} to='/fall-fullstack-bootcamp' onClick={handleLogout} ><i className="fa-solid fa-user"></i>Logout</NavLink>
              </li>
             
            </ul>
      </nav>
      
       
      {/* {showForm && (<SingInForm/> )} */}
   
  
    </>
 );
};

export default NavAdmin