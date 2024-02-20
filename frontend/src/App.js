import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route,Link,Navigate, Switch  } from 'react-router-dom';
import Footer from './components/Footer';
import SignUpForm from './pages/SignUpForm';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AllProductsList from './pages/AllProductsList';
import ProductDetails from './pages/ProductDetails';
import WishList from './pages/WishList';
import Admin from './pages/Admin'
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import { isAuthenticated } from './services/authService';




function App() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  
  const handleLogin = (token) => {
    // Setzen Sie den Anmeldestatus auf true
    setLoggedIn(true);
    // Hier können Sie weitere Logik für den Login hinzufügen, z. B. Token speichern
  };
  const handleLogout = () => {
    // Fügen Sie hier den Code zum Ausloggen hinzu, z.B. Token entfernen, State aktualisieren, etc.
    localStorage.removeItem('token');
    setLoggedIn(false);
  };
  return (

    <div className="App">
     
      <Navbar handleLogout={handleLogout} />
        <Routes>
            <Route path="/fall-fullstack-bootcamp"  element = {<Home/>}/>
            <Route path="/my-account/signupform"  element = {<SignUpForm/>}/>
            <Route path="/my-account"  element = {<SignIn handleLogin={handleLogin}/>}/>
            <Route path="/product-details"  element = {<ProductDetails/>}/>
            <Route path="/product-list"  element = {<AllProductsList/>}/>
            <Route path="/wishlist"  element = {<WishList/>}/>
            <Route path="/contact"  element = {<Contact/>}/>
            <Route path="/*" element={<NotFound></NotFound>}></Route>
            <Route path="/my-account/admin" element={<Admin/>}></Route>

        </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
