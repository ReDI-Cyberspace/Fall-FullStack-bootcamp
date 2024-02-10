import React from 'react'

const ExampleCarouselImage = ({text, imgUrl}) => {
  return (
    // <img className='d-block w-100 '  src ={imgUrl} alt={text}/>
  
    <div className="example-carousel-image-container">
    <img className="example-carousel-image" src={imgUrl} alt={text} />
  </div>
    )
}

export default ExampleCarouselImage