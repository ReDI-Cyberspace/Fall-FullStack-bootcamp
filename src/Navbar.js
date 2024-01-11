import React,{useState} from 'react';
import SearchBar from './SearchBar';
import { NavLink} from 'react-router-dom';



const Navbar = () => {

  const navLinkStyles = ({isActive})=>{
    return{
        color : isActive ? ' #44ae5d' : 'rgba(79, 53, 48, 1)',
         
    }
}
  
  return (
    <>
   
    <nav className="nav-links">
      
     <input type="checkbox" id="toggle_button1" />
     <label htmlFor="toggle_button1" className="toggle_button1">
       <span className="bar1"></span>
       <span className="bar1"></span>
       <span className="bar1"></span>
     </label>
 
     <ul >     
       <li >
         <NavLink  style = {navLinkStyles} exact to="/"  >Home</NavLink>
       </li>
       <li >
         <NavLink style = {navLinkStyles} to="/aboutUs">About Us</NavLink>
       </li>
       <li >
         <NavLink  style = {navLinkStyles} to="/products" >Products</NavLink>
       </li>
       <li >
         <NavLink style = {navLinkStyles} to="/contact">Contact</NavLink>
       </li>
       <li >
         <NavLink  style = {navLinkStyles} to="/blog">Blog</NavLink>
       </li>
       <li>
         <NavLink  style = {navLinkStyles} to="/fqa">FAQ</NavLink>
       </li>
     </ul>
     
      <SearchBar/>  
     
</nav> 
</>
  );
};

export default Navbar