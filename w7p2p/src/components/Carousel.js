function Carousel() {
  return (
    <div className="homepageCaroulse">
      <div className="myCarousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        //   style="display: block"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="assets/ourPets/dogs/fatty-corgi-1QsQRkxnU6I-unsplash.jpg"
                alt="First slide"
              />
            </div>
            <div cclassName="carousel-item">
              <img
                className="d-block w-100"
                src="assets/ourPets/cats/kari-shea-eMzblc6JmXM-unsplash.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="assets/ourPets/rabbits/daniel-rios-GS8-m_u7iK4-unsplash.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="assets/ourPets/turtles/ben-collins-b0VO10Zips8-unsplash.jpg"
                alt="Fourth slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
