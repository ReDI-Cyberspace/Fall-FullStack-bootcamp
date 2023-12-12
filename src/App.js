
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route,Link,Navigate, Switch  } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import FilterFunc from './FilterFunc';
import SingInForm from './SingInForm';
import Navbar from './Navbar';
import Home from './Home';




function App() {
  
  return (
  
  
    <Router className="App">
      <Header/>
    
        <Routes>
            <Route  index path='/'  element = {<Home/>}/>
    
             <Route path='singinform'  element = {<SingInForm/>}/>
            <Route path='products'  element = {<Products/>}/> 
        </Routes>
      <Footer/>
    </Router>
     
  );
}

export default App;
