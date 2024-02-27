import React from 'react'
import Advetreising from '../components/Advetreising'
import FilterFunc from '../components/FilterFunc'
import UncontrolledCarousel from '../components/UncontrolledCarousel'
import Categories from '../components/Categories'
/* import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer'; */

const  Home  = () => {
  
  
  return (
    <div> 
     <Advetreising/>
    
      <h2 className='headline'> Harmony with Herbs & Spices</h2>
      {/* <h4 className='contactTitle'> C a t e g o r i e s</h4> */}
      <FilterFunc/> 
          {/* <Categories /> */}
      
          <UncontrolledCarousel/>  
          <p> Most sold products</p>   
    
    </div>
   
  )
}

export default  Home 