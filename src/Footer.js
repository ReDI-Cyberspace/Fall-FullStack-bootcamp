import React from 'react'

const Footer = () => {
    const today=new Date()
  return (
    <footer  className= "footer">
        <div>
        <ul className="footer1line">
          <li><a href="/impresum.html">Impressum</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
          <li><a href="/index.html" >Spices & Herbs</a></li>
          <li><a href="/shipping.html">Shipping</a></li>
          <li><a href="/services.html">Services</a></li>
        </ul>
      </div>
      <p>Copyright &copy; {today.getFullYear()}Spices & Herbs GmbH | Tel: 040-1234567 | E-Mail:
        info@spices-and-herbs.com</p>
    </footer>
  )
}

export default Footer