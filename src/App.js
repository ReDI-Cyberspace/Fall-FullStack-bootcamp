
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
import User from './pages/User'
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound'




function App() {
  
  return (

    <div className="App">
     
      <Navbar/>
        <Routes>
            <Route path="/fall-fullstack-bootcamp"  element = {<Home/>}/>
            <Route path="/my-account/signupform"  element = {<SignUpForm/>}/>
            <Route path="my-account"  element = {<SignIn/>}/>
            <Route path="product-details"  element = {<ProductDetails/>}/>
            <Route path="product-list"  element = {<AllProductsList/>}/>
            <Route path="wishlist"  element = {<WishList/>}/>
            <Route path="contact"  element = {<Contact/>}/>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            <Route path="my-account/user" element={<User/>}></Route>

        </Routes>
      <Footer/>
    </div>
   
  );
}

export default App;
