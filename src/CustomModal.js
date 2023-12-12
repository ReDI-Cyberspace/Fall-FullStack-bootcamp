import React from 'react';

const CustomModal = ({ isOpen, handleClose}) => {
    if(!isOpen){
        return null;
    }


  return (
    
        <div className="modal-overlay">
             <div className="mmodal">
                <h3>Congratulations!</h3>
                <p>You have successfully registered.</p>
                <button className = "btn-form" onClick={handleClose}>Close</button>
            </div>
        </div>

  );
};

export default CustomModal