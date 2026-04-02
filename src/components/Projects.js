import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Todo from "../assets/img/note2.jpg";
import Box from "../assets/img/box.jpg";
import Pet from "../assets/img/pet2.jpg";
import Note from "../assets/img/mynote.jpg";
import Library from "../assets/img/lib2.jpg";
import news from "../assets/img/pkk.jpeg"


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Refrigeration & Chiller Monitoring System (mobile app and web) 2026",
      description: "A refrigeration and chiller monitoring system that allows adding controllers, adjusting temperature settings, detecting faults, and sending real-time alerts via SMS and email. Includes a live dashboard displaying all system data and status in real time.",
      imgUrl: Box,
    },


    {
      title: "C# Application with Docker and CI/CD (2025)",
      description: "C# application containerized using Docker. Integrated with GitHub Actions, it provides automated CI/CD workflows for seamless deployment and continuous integration.",
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
        "Set up monitoring and alerting with CloudWatch and SNS to track system health"
      ]
    },


    {
      title: "HVAC Control System with NASA Protocol (2025)",
      description: "A control system built on NASA's protocol, connected to a Raspberry Pi controller. The application manages HVAC components such as evaporators and ventilators across multiple rooms, providing centralized and efficient climate control.",
      imgUrl: Todo,
    },


    {
      title: "thermostat touch screen ESP32 (2025)",
      description: "A smart thermostat built with an ESP32 microcontroller, featuring a touch display using LVGL and GT911 touch controller, written in C/C++. The system allows real-time temperature monitoring and control through a responsive and intuitive user interface.",
      imgUrl: Note,
    },


    {
      title: "Personal news Fetcher",
      description: "Sending email to the user by the prefrences he likes",
      imgUrl: news,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second" className="tabpane">
                        <p>
                          * .NET with binary tree data storage and WPF for UI.
                        </p>
                        <p>
                          * Angular, Node.js with JWT, and Socket.io  in the to-do project.
                        </p>
                        <p>
                          * React for the note app.
                        </p>
                        <p>
                          * WinForms in C# for  library system, employing OOP and file storage.
                        </p>
                        <p>
                          *.NET Core with MVC and RESTful API for the pet web store.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Challenges: During each project there were other challenges that I was able to overcome and solve with the help of tolerance and troubleshooting, teamwork and a lot of self-learning.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={sh}></img> */}
    </section>
  )
}
