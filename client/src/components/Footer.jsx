import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const date = new Date().getFullYear();

  // console.log(date);

  return (
    <footer className="footer mt-auto mt-5">
      <Container className="footeContainer">
        <h5 className="text-center m-0">
          © {date} Copyright created by Onur Tüfekci
          <a href="https://github.com/onurtufekci34">
            {" "}
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
        </h5>
      </Container>
    </footer>
  );
}

export default Footer;
