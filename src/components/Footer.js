import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between">
          {/* Left: Name */}
          <Col
            xs={12}
            md={4}
            className="text-center text-md-start mb-3 mb-md-0"
          >
            <h3>
              anh <span className="highlight">nguyen</span>
            </h3>
          </Col>

          {/* Center: Social Icons */}
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/anhng1106"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/anhng1106"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/im.nayoungg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>

          {/* Right: Copyright */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <p>© 2025. Anh Nguyen. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
