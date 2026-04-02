import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";


import ChillerAndRef from "../assets/img/ChillerAndRef.png";
import DockerApp from "../assets/img/DockerApp.png";
import AWSMulitRegion from "../assets/img/AWSMulitRegion.png";
import HVAC from "../assets/img/HVAC.png";
import Thermostate from "../assets/img/Thermostate.png";
import PersonalNewFetcer from "../assets/img/PersonalNewFetcer.png";


import "animate.css";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const projects = [
    {
      title: "Refrigeration & Chiller Monitoring System (mobile app and web)",
      description: "Refrigeration and chiller monitoring platform.",
      imgUrl: ChillerAndRef,
      bullets: [
        "Add and manage multiple controllers in one system",
        "Set and update temperature values remotely",
        "Detect faults and trigger alerts in real time",
        "Send notifications by SMS and email",
        "Show live status and telemetry in a web and mobile dashboard",
      ],
    },
    {
      title: "C# Application with Docker and CI/CD",
      description: "C# app deployment pipeline with Docker and GitHub Actions.",
      imgUrl: DockerApp,
      bullets: [
        "Built the app in C# and packaged it with Docker",
        "Created GitHub Actions workflow for automatic build and test",
        "Pushed consistent Docker images for each update",
        "Reduced manual deployment work with one pipeline",
        "Made releases faster and easier to maintain",
      ],
    },
    {
      title: "AWS multi region cloud application",
      description: "Library management in WinForms",
      imgUrl: AWSMulitRegion,
      bullets: [
        "Built a multi-region AWS architecture with independent game instances per region and failover-based traffic switching using EC2 and Fargate",
        "Designed and provisioned infrastructure (VPC, networking, multi-AZ) using CloudFormation with focus on high availability",
        "Configured users, roles, and permissions via AWS Organizations, SSO, and IAM following least privilege principles",
        "Implemented storage using S3, databases, and NFS with versioning and immutability for resiliency",
        "Set up monitoring and alerting with CloudWatch and SNS to track system health",
      ],
    },
    {
      title: "HVAC Control System",
      description: "HVAC control app with Raspberry Pi integration.",
      imgUrl:HVAC,
      bullets: [
        "Built around NASA communication protocol",
        "Connected the system to a Raspberry Pi controller",
        "Managed HVAC devices like evaporators and ventilators",
        "Controlled multiple rooms from one interface",
        "Improved stability and day-to-day climate control operations",
      ],
    },
    {
      title: "thermostat touch screen ESP32",
      description: "Smart thermostat with touch interface on ESP32.",
      imgUrl:Thermostate,
      bullets: [
        "Built the thermostat on ESP32 in C/C++",
        "Used LVGL for the on-screen user interface",
        "Integrated GT911 touch controller for touch input",
        "Displayed real-time temperature data",
        "Enabled quick and responsive temperature control",
      ],
    },
    {
      title: "Personal news Fetcher",
      description: "Personalized news email service using microservices architecture.",
      imgUrl:PersonalNewFetcer,
      bullets: [
        "Built with .NET using three microservices",
        "Used RabbitMQ and Dapr for service communication",
        "Users register and select their preferred news topics",
        "System collects fresh updates every day",
        "Sends each user a daily email with relevant news",
      ],
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
                <div className="animate__animated animate__fadeIn">
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
                      className="animate__animated animate__slideInUp"
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
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={sh}></img> */}
    </section>
  );
};
