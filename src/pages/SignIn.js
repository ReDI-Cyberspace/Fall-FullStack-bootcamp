import React,{useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';


import Advetreising from '../components/Advetreising';
import CustomModal from '../components/CustomModal';

const SingIn = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    //---------------------------------
    const [formData, setFormData] = useState([]);
    const [signInData, setSignInData] = useState([]);
   //----------------------------------------------------//
//Change event handler for imput
const handleInputChange = (e) =>{
    const {name, value} = e.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        }; 
//----------------------------------------------------//    

    //Submit Event Handler on Form Submit
    const handleSubmit = (e) =>{
        e.preventDefault();

// generate  ID for new Object
        const newEntry = {
           ...formData,
           id: signInData.length + 1, 
         };

//Update Form Array in local Storage
         const updatedSignInData = [...signInData, newEntry];
         setSignInData(updatedSignInData);
         localStorage.setItem('signInData', JSON.stringify(updatedSignInData));
     
         setFormData({
           customer_type:'',
           salutation: '',
           first_name: '',
           last_name: '',
           email: '',
           password: '',
           phone: '',
           date_of_birth:'',
           country:'',
           street:'',
           street_number: '',
           city: '',
           zipcode: ''

         });
// set Modal alert
       setShowModal(true);
   
   };
   //----------------------------------------------------//
//close the Modal
const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');

  };

//----------------------------------------------------//
const goToSingUpForm=()=>{
    navigate(`${location.pathname}/signupform`);
}

  return (

    <div>
        <Advetreising/> 
        <h4 className='contactTitle'> Sign in or Ragister now </h4>
    <div className='line1'>

    </div>
    <div className='singIn-site'>
    <div className='formContainer-contact'>
        
    <form onSubmit = {handleSubmit}>  
        
            <div className="contact">
            <h4>I'm already a Customer </h4>
                
               
                <hr/>
                    
                   <div>
                   <p className='singin-info'> Please sing in with your E-Mail and Password</p>
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" required >Your  E-Mail :</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" required >Your  E-Mail :</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.email}
                            onChange={handleInputChange}
                            />
                    </div>
                    
                    <button type="submit" className='btn-form'>Login</button>
            </div>  
        </div>  
       
    </form>
    
    </div>
    <div className='formContainer-contact'>
            <div className="contact">
                    <h4> Open an Account</h4>
                   
                    <hr/> 
                       <div>
                        <div className="mb-3">
                            <p>Save your data und delivery addresses</p>
                            <p>Overview of your orders and shipping information</p>
                            <p>Checking the order status</p>
                            <p>Discount and Spesial promotions</p>
                           
                        </div>
                        
                        <button type="button" onClick={goToSingUpForm}className='btn-form'>Next</button>
                    
                </div>  
            </div>  
           
        </div>
    <div className='line2'></div>
 
    </div>
    </div>
  )
}

export default SingIn