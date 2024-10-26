import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Todo from "../assets/img/note2.jpg";
import Box from "../assets/img/box.jpg";
import Pet from "../assets/img/pet2.jpg";
import Note from "../assets/img/mynote.jpg";
import Library from "../assets/img/lib2.jpg";


import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Box Factory",
      description: "Box factory using DS algorithms in .Net and WPF",
      imgUrl: Box,
    },
    {
      title: "Pet Web Store",
      description: "Pet shop with RESTful API on MVC",
      imgUrl: Pet,
    },
    {
      title: "Library Desktop App",
      description: "Library management in WinForms",
      imgUrl: Library,
    },
    {
      title: "To Do List",
      description: "Task management app in Angular",
      imgUrl: Todo,
    },
    {
      title: "Notes",
      description: "Note-taking application",
      imgUrl: Note,
    },
    {
      title: "Personal news Fetcher",
      description: "Sending email to the user by the prefrences he likes",
      imgUrl: Note,
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
