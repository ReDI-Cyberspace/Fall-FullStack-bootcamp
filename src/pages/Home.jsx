import Image1 from '../images/1.jpg'
import Image2 from '../images/2.jpg'
import Image3 from '../images/3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Subscription from './Subscription';

export default function Home() {
  return (
    <div className="home">
 <div className="container ">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active d-flex justify-content-center">
            <img src={Image1} className="d-block w-25" alt="..." />
          </div>
          <div className="carousel-item d-flex justify-content-center">
            <img src={Image2} className="d-block w-25" alt="..." />
          </div>
          <div className="carousel-item d-flex justify-content-center">
            <img src={Image3} className="d-block w-25" alt="..." />
          </div>
        </div>
      </div>
    </div>
   
    <div className="d-flex justify-content-center">
      <h3 id="slogan">We are making the future!!!</h3>
    </div>
   <Subscription/>


    </div>
   
  )
}
