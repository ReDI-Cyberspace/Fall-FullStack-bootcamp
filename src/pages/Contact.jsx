import  { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);



  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('sendet data:', formData);

    setFormSubmitted(true);

    
    
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h4>Contact Us</h4>
      {!formSubmitted ? (
        <form className="w-50" onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              rows="2"
              placeholder="Enter your message"
              required
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="contactbutton d-flex justify-content-center">
            <button type="submit" className="btn btn-primary mt-1 align-self-end">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="submitted-message">
          <p className='fs-3 text'>Thank you! We will be in touch soon.</p>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Message: {formData.message}</p>
        </div>
      )}
    </div>
  );
}
