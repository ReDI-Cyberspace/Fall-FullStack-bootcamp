// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../components/ExampleCarouselImage';
import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstImg from '../images/stilleben-mit-verschiedenen-krautern-gewurzen-und-olivenol-dyd8gr.jpg'
import SecondImg from '../images/verschiedene-gewuerze-und-kraeuter.jpg'
import ThirdImg from '../images/Kräuter und Gewürze kaufen.jpg'
import './UncontrolledCarouselStyle.css'
const UncontrolledCarousel = () => {
  
    return (
   
      <div >
        <MDBCarousel showControls>
           <MDBCarouselItem itemId={1}>
            <img src={FirstImg} className='d-block w-100' alt='...' />
           </MDBCarouselItem>
             <MDBCarouselItem itemId={2}>
              <img src={SecondImg} className='d-block w-100' alt='...' />
           </MDBCarouselItem>
             <MDBCarouselItem itemId={3}>
              <img src={ThirdImg}className='d-block w-100' alt='...' />
          </MDBCarouselItem>
        </MDBCarousel>
     {/*  <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage imgUrl={FirstImg} text="First slide" />
          <Carousel.Caption>
            <h3>Bulgaria</h3>
            <p>Sofia</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imgUrl={SecondImg} text="Second slide" />
          <Carousel.Caption>
            <h3>Greece</h3>
            <p>Athen</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage imgUrl={ThirdImg} text="Third slide" />
          <Carousel.Caption>
            <h3>Italy</h3>
            <p>
              Rom
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

    </div>
    );
  }
  

export default UncontrolledCarousel