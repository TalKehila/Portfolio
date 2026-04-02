import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import gmail from "../assets/img/gmail.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitIcon from "../assets/img/git-icon.svg";
import { motion } from "framer-motion";
import "./Contact.css";

import 'animate.css';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "tal.kehila10@gmail.com";

  const handleGmailClick = async (e) => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }

    const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    window.open(gmailCompose, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact" id="connect" data-aos="fade-up">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col md={10} lg={8}>
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <span className="contact-kicker">Let's Work Together</span>
              <h2>Contact</h2>
              <p>
                Available for software engineering, DevOps, and embedded projects.
                The fastest way to reach me is by email.
              </p>

              <div className="contact-social">
                <a className="contact-icon-link" href="#gmail" onClick={handleGmailClick} aria-label="Open Gmail compose and copy email">
                  <img src={gmail} alt="Gmail" />
                </a>
                <a className="contact-icon-link" href="https://www.linkedin.com/in/tal-kehila-581166232/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a className="contact-icon-link" href="https://github.com/TalKehila" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <img src={gitIcon} alt="GitHub" />
                </a>
              </div>
              {copied && <p className="contact-copied">Email copied</p>}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
