import Image1 from "../images/1.jpg";
import Image2 from "../images/2.jpg";
import Image3 from "../images/3.jpg";

// export default function Carousel() {
//   return (
//     <div
//         id="carouselExampleFade"
//         className="carousel slide carousel-fade"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner ">
//           <div className="carousel-item active d-flex justify-content-center">
//             <img src={Image1} className="d-block w-25" alt="..." />
//           </div>
//           <div className="carousel-item d-flex justify-content-center">
//             <img src={Image2} className="d-block w-25" alt="..." />
//           </div>
//           <div className="carousel-item d-flex justify-content-center">
//             <img src={Image3} className="d-block w-25" alt="..." />
//           </div>
//         </div>
//       </div>
//   )
// }

import Carousel from "react-bootstrap/Carousel";

function CarouselHome() {
  return (
      <div className="carouselContainer">
<Carousel fade className="w-25 d-flex justify-content-center">
        <Carousel.Item >
          <img src={Image1} alt="" className="w-100" />
        </Carousel.Item>
        <Carousel.Item >
          <img src={Image2} alt="" className="w-100" />
        </Carousel.Item>
        <Carousel.Item >
          <img src={Image3} alt="" className="w-100" />
        </Carousel.Item>
      </Carousel>
      </div>
      
    
  );
}

export default CarouselHome;
