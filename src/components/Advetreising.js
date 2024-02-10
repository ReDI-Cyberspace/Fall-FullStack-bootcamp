import React from 'react'


const Advetreising = () => {
    const bildStyle = {
        height:'auto',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
      }
  return (
   
    <div style = {bildStyle}>
        <img   style = {{ width: '100%', height: 'auto', display: 'block'}} src='./fall-fullstack-bootcamp/images/brooke-lark-kXQ3J7_2fpc-unsplash.jpg' alt='Adverteising'/>
    </div>
  )
}

export default Advetreising