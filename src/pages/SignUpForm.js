import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import CustomModal from '../components/CustomModal';
import Navbar from '../components/Navbar';
import './SignUpFormStyle.css'

//SingIn Form Component
const SingUpForm = () =>{
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState([]);
    const [signInData, setSignInData] = useState([]);
    const navigate = useNavigate();
    
//----------------------------------------------------//    
// stores the data from the form in object array in the local storage
    useEffect(() => {
        const storedData = localStorage.getItem('signInData');
                if (storedData) {
                setSignInData(JSON.parse(storedData));
                }
            }, []);
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
        navigate('/my-account/user');

      };

//----------------------------------------------------//
    return (
        <>
   
    <div className='formContainer'>
        <form onSubmit = {handleSubmit}>  
            <div className="row">
                <div className="col-md-6">
                    <h4> I'm a new Customer</h4>
                    <hr/>
                        <div className="mb-3">
                            <label htmlFor="name"  className="form-label">You are a Private Customer or Company:</label>
                            <select  id="customer_type" name="customer_type" value = {formData.customer_type} onChange = {handleInputChange} required>
                                <option value="">Please choose</option>
                                <option value="customer">Private Customer</option>
                                <option value="company">Company</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name"  className="form-label">You are  Mr. or Ms.:</label>
                            <select id="salutation" name="salutation" value = {formData.salutation} onChange = {handleInputChange} required>
                                <option value="">Please choose</option>
                                <option value="herr">Herr</option>
                                <option value="frau">Frau</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name"  className="form-label">Your First Name:</label>
                            <input type="text"  className="form-control" id="firstName" name="first_name" value = {formData.first_name} onChange = {handleInputChange} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name"className="form-label">Your  Last Name:</label>
                            <input type="text"  className="form-control" id="lastName" name="last_name" value = {formData.last_name} onChange = {handleInputChange} required/>
                        </div>
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
                            <label htmlFor="password" className="form-label" required >Your  Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange} required
                                />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Your  Phone:</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date_of_birth" className="form-label">Your  Date of Birth:</label>
                            <input
                                type="date"
                                className="form-control"
                                id="date_of_birth"
                                name="date_of_birth"
                                value={formData.date_of_birth}
                                onChange={handleInputChange}
                                />
                        </div>
            
                </div>  
                <div className="col-md-6">
                    <h4> Your Address</h4>
                    <hr/>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label" >Your Country:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange} required
                            />
                    </div>
                    <div className="row g-2">
                        <div className="col-md-8 mb-3">
                            <label htmlFor="street" className="form-label" >Your  Street  Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="street"
                                name="street"
                                value={formData.street}
                                onChange={handleInputChange} required
                                />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="street_number" className="form-label">Str. No:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="street_number"
                                name="street_number"
                                value={formData.street_number}
                                onChange={handleInputChange} required
                                />
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col-md-8 mb-3">
                            <label htmlFor="city" className="form-label">Your City:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange} required
                                />  
                        </div>
                        <div className="col-md-4 mb-3">
                            <label htmlFor="zipcode" className="form-label">Zipcode:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="zipcode"
                                name="zipcode"
                                value={formData.zipcode}
                                onChange={handleInputChange}
                                />
                        </div>
                    </div>
                    <button type="submit" className='btn-form'>Submit</button>
                </div>
            </div>
        </form>
         {/* The notification is displayed here when the form has been submitted */}
        <CustomModal isOpen={showModal} handleClose={handleCloseModal} />
    </div>
    </> 
    ); 
    
};

export default SingUpForm;