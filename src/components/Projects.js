import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Todo from "../assets/img/note2.jpg";
import Box from "../assets/img/box.jpg";
import Pet from "../assets/img/pet2.jpg";
import Note from "../assets/img/mynote.jpg";
import Library from "../assets/img/lib2.jpg";
import news from "../assets/img/pkk.jpeg";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const projects = [
    {
      title: "Refrigeration & Chiller Monitoring System (mobile app and web) 2026",
      description:
        "A refrigeration and chiller monitoring system that allows adding controllers, adjusting temperature settings, detecting faults, and sending real-time alerts via SMS and email. Includes a live dashboard displaying all system data and status in real time.",
      imgUrl: Box,
    },
    {
      title: "C# Application with Docker and CI/CD (2025)",
      description:
        "C# application containerized using Docker. Integrated with GitHub Actions, it provides automated CI/CD workflows for seamless deployment and continuous integration.",
      imgUrl: Pet,
    },
    {
      title: "AWS multi region cloud application (2025-2026)",
      description: "Library management in WinForms",
      imgUrl: Library,
      bullets: [
        "Built a multi-region AWS architecture with independent game instances per region and failover-based traffic switching using EC2 and Fargate",
        "Designed and provisioned infrastructure (VPC, networking, multi-AZ) using CloudFormation with focus on high availability",
        "Configured users, roles, and permissions via AWS Organizations, SSO, and IAM following least privilege principles",
        "Implemented storage using S3, databases, and NFS with versioning and immutability for resiliency",
        "Set up monitoring and alerting with CloudWatch and SNS to track system health",
      ],
    },
    {
      title: "HVAC Control System with NASA Protocol (2025)",
      description:
        "A control system built on NASA's protocol, connected to a Raspberry Pi controller. The application manages HVAC components such as evaporators and ventilators across multiple rooms, providing centralized and efficient climate control.",
      imgUrl: Todo,
    },
    {
      title: "thermostat touch screen ESP32 (2025)",
      description:
        "A smart thermostat built with an ESP32 microcontroller, featuring a touch display using LVGL and GT911 touch controller, written in C/C++. The system allows real-time temperature monitoring and control through a responsive and intuitive user interface.",
      imgUrl: Note,
    },
    {
      title: "Personal news Fetcher",
      description: "Sending email to the user by the prefrences he likes",
      imgUrl: news,
    },
  ];

  const tabTitles = {
    first: "Projects",
    second: "Technologies",
    third: "Challenges",
  };

  const technologies = [
    ".NET / .NET Core",
    "C#",
    "Python",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Angular",
    "WPF",
    "WinForms",
    "MVC",
    "REST API",
    "JWT",
    "Socket.IO",
    "Docker",
    "CI/CD (GitHub Actions)",
    "AWS",
    "Azure",
    "MongoDB",
    "SQL",
    "Linux",
    "Raspberry Pi",
    "ESP32",
    "LVGL",
  ];

  const challengePoints = [
    {
      title: "API and protocol mismatch",
      text: "When services returned different payload shapes, I added a mapping layer between systems and standardized the contracts. That let frontend and backend evolve without breaking each other.",
    },
    {
      title: "Real-time data from mixed sources",
      text: "In monitoring flows, I combined event updates with API snapshots and added retries with fallback states. This kept the dashboard stable even when one source was delayed.",
    },
    {
      title: "Authentication between services",
      text: "I solved token and permission issues by aligning JWT handling and role checks across components, then validating the flow end-to-end in staging before release.",
    },
    {
      title: "Deployment drift between environments",
      text: "I used Docker and CI workflows to make builds reproducible and consistent. The same image and checks run in every environment, so integration bugs are caught earlier.",
    },
  ];

  const sortedTechnologies = [...technologies].sort((a, b) => a.localeCompare(b));

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{tabTitles[activeTab]}</h2>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                    onSelect={(key) => setActiveTab(key || "first")}
                  >
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Technologies</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Challenges</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second" className="tabpane">
                        <div className="tech-grid">
                          {sortedTechnologies.map((tech) => (
                            <div className="tech-chip" key={tech}>
                              {tech}
                            </div>
                          ))}
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third" className="tabpane">
                        <div className="challenge-list">
                          {challengePoints.map((item) => (
                            <article className="challenge-item" key={item.title}>
                              <h3>{item.title}</h3>
                              <p>{item.text}</p>
                            </article>
                          ))}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={sh}></img> */}
    </section>
  );
};
