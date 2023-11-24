import Notfoundgif from '../images/notfound.webp'

export default function NotFound() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 text-center mt-5">
        <h1 className="display-4">404</h1>
        <p className="lead">Oops! Page not found.</p>
        <p>Sorry, the page you are looking for might have been removed or doesn't exist.</p>
        <img src={Notfoundgif} alt="not found gif" />
      </div>
    </div>
  </div>
  )
}
