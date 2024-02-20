import React,{useState} from 'react';
import SearchBar from '../details/SearchBar';
import { NavLink} from 'react-router-dom';
import Header from './Header'
import './NavbarStyle.css'




const Navbar = ({ handleLogout }) => {

  const navLinkStyles = ({isActive})=>{
    return{
        color : isActive ? ' #44ae5d' : 'rgba(79, 53, 48, 1)',
         
    }
}
  
  return (
    <div className='navigations'>
   <Header  handleLogout={handleLogout} />
    <nav className="nav-links">
      
     <input type="checkbox" id="toggle_button1" />
     <label htmlFor="toggle_button1" className="toggle_button1">
       <span className="bar1"></span>
       <span className="bar1"></span>
       <span className="bar1"></span>
     </label>
 
     <ul >     
       <li >
         <NavLink  style = {navLinkStyles} exact to="/fall-fullstack-bootcamp"  >Home</NavLink>
       </li>
       <li >
         <NavLink style = {navLinkStyles} to="/aboutUs">About Us</NavLink>
       </li>
       <li >
         <NavLink  style = {navLinkStyles} to="/product-list" >All Products</NavLink>
       </li>
       <li >
         <NavLink style = {navLinkStyles} to="/contact">Contact</NavLink>
       </li>
       <li >
         <NavLink  style = {navLinkStyles} to="/blog">Blog</NavLink>
       </li>
       <li>
         <NavLink  style = {navLinkStyles} to="/faq">FAQ</NavLink>
       </li>
     </ul>
     
      <SearchBar/>  
     
</nav> 
</div>


  );
};

export default Navbar