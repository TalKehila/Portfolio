import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import lap from "../assets/img/i.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitIcon from '../assets/img/git-icon.svg'


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={lap} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/tal-kehila-581166232/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/TalKehila" target="_blank" rel="noopener noreferrer"><img src={gitIcon} alt="Icon" /></a>

           
            </div>
            <p>© Tal kehila | portfolio...</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
