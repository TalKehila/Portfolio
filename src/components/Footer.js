import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import "./Footer.css";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} className="text-center">
            <p>© Tal kehila | portfolio...</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
