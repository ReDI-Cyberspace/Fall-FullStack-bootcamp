function Contact() {
  return (
    <div className="contactForm">
      <form>
        <div className="row">
          <div className="col">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Name"
            />
          </div>
          <div className="col">
            <label for="exampleInputEmail1">Last name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Last name"
            />
          </div>
          <div className="col">
            <label for="exampleInputEmail1">Phone number</label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Your message to us:</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary sendButton">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
