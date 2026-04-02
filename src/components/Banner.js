import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "DevOps Engineer", "Fullstack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={10} xl={8}>
              <div className="banner-content animate__animated animate__fadeIn">
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Tal Kehila`} <span className="txt-rotate" data-period="1000" data-rotate='[ "Software Engineer", "DevOps Engineer", "Fullstack " ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    I build things that actually work — from backend services to embedded systems. I like figuring out how pieces fit together, whether that's integrating APIs, setting up a CI/CD pipeline, or getting an ESP32 to talk to a cloud dashboard. Still learning, always curious.</p>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
