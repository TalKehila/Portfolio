import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaCode, FaCloud } from "react-icons/fa";
import "./WorkExperience.css";

const workItems = [
  {
    title: "Software Engineer",
    place: "Backend + Fullstack Projects",
    period: "2024 - 2026",
    icon: FaCode,
    points: [
      "Built production-style web systems with React, Node.js, and .NET.",
      "Designed REST APIs and integrated external services with stable contracts.",
      "Delivered user-focused features with clean architecture and maintainable code.",
    ],
  },
  {
    title: "DevOps Engineer",
    place: "Cloud + CI/CD Work",
    period: "2024",
    icon: FaCloud,
    points: [
      "Containerized apps with Docker and standardized build/release flows.",
      "Created CI pipelines with GitHub Actions for build, test, and deployment.",
      "Worked on AWS multi-region concepts, monitoring, and high-availability setup.",
    ],
  },
];

export const WorkExperience = () => {
  return (
    <section className="work-experience" id="work" data-aos="fade-up">
      <Container>
        <div className="work-header text-center">
          <span className="work-kicker">Career Highlights</span>
          <h2 className="bg-gradient-to-r from-cyan-200 via-blue-200 to-slate-100 bg-clip-text text-transparent">Work Experience</h2>
          <p className="mx-auto max-w-3xl text-slate-200">
            Practical engineering across backend systems, cloud infrastructure,
            and embedded products.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {workItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Col key={item.title} md={6} xl={4}>
                <motion.article
                  className="work-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <div className="work-card-top">
                    <span className="work-icon">
                      <Icon />
                    </span>
                    <span className="work-period">{item.period}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <h4>{item.place}</h4>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.article>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
