import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import CustomModal from '../components/CustomModal';
import './ContactStyle.css'
import Advetreising from '../components/Advetreising';

const Contact = () => {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    //---------------------------------
    const [formData, setFormData] = useState([]);
    const [signInData, setSignInData] = useState([]);
    
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
        navigate('/');

      };

//----------------------------------------------------//
    
  return (
    <>
    <Advetreising/>
    <h4 className='contactTitle'> C o n t a c t</h4>
    <div className='line1'>

    </div>
    <div className='formContainer-contact'>
        
    <form onSubmit = {handleSubmit}>  
        
            <div className="contact">
                <h4> Spices & Herbs GmbH</h4>
                <p>Radosveta Galani</p>
                <hr/>
                    <div className="mb-3">
                        <p>Goldene Wiege 14<br/>
                            22159 Hamburg
                        </p>
                        <p>Tel: +49 40 123456789<br/>
                            Fax: +49 40 987654321
                        </p>
                        <p>E-Mail: customerservice@spices-and-herbs.com</p>
                        
                    </div>
                   <div>
                    <h4>Send a Message</h4>
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
                        <label htmlFor="message" className="form-label" required >Your  Message:</label>
                        <textarea id="message" name="message"  className="form-control" rows="7" cols="50"></textarea>

                    
                    </div>
                    <button type="submit" className='btn-form'>Send</button>
            </div>  
        </div>  
       
    </form>
    
     {/* The notification is displayed here when the form has been submitted */}
    <CustomModal isOpen={showModal} handleClose={handleCloseModal} />
    </div>
    <div className='line2'></div>
 
</>
); 
}

export default Contact

  
