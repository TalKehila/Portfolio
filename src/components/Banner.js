import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import 'animate.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Software Engineer", "DevOps Engineer", "Fullstack Developer"];
  const period = 2000;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, loopNum, isDeleting])

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
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  const nameWords = ["Hi!", "I'm", "Tal", "Kehila"];

  return (
    <section className="banner" id="home">
      <div className="banner-bg" aria-hidden="true">
        <div className="banner-grid"></div>
        <div className="banner-glow banner-glow-1"></div>
        <div className="banner-glow banner-glow-2"></div>
        <div className="banner-glow banner-glow-3"></div>
      </div>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={11} xl={10}>
            <div className="banner-content">
              <span className="tagline section-kicker">Welcome to my Portfolio</span>
              <h1 className="banner-name">
                {nameWords.map((word, i) => (
                  <span
                    key={i}
                    className="name-word"
                    style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                  >
                    {word === "Kehila" ? <span className="name-accent">{word}</span> : word}
                  </span>
                ))}
              </h1>
              <h2 className="banner-role-line">
                <span className="role-prefix">I'm a </span>
                <span className="txt-rotate" data-period="1000" data-rotate='[ "Software Engineer", "DevOps Engineer", "Fullstack Developer" ]'>
                  <span className="wrap">{text}</span>
                </span>
              </h2>
              <p className="banner-desc">
                I build systems that work in the real world, from backend services to embedded devices.<br />
                I enjoy connecting the pieces, whether that means integrating APIs, setting up a CI/CD pipeline, or getting an ESP32 to send live data to the cloud.<br />
                I am always learning, always curious, and always trying to build things better than yesterday.
              </p>
              <div className="banner-stats">
                <div className="stat-item">
                  <span className="stat-num">Backend</span>
                  <span className="stat-label">.NET / Node / Python</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-num">DevOps</span>
                  <span className="stat-label">Docker / CI/CD / AWS</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-num">Embedded</span>
                  <span className="stat-label">ESP32 / Raspberry Pi</span>
                </div>
              </div>
              <div className="banner-scroll-hint" aria-hidden="true">
                <span className="scroll-mouse"><span></span></span>
                <span className="scroll-word">scroll</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
