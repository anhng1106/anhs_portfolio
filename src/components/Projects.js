import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import webprojImg1 from "../assets/img/web-project-img1.png";
import webprojImg2 from "../assets/img/web-project-img2.png";
import webprojImg3 from "../assets/img/web-project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const web_projects = [
    {
      title: "Moonlight Confessions",
      description:
        "Moonlight Confessions is a responsive and anonymous web app built with Java and Springboot, featuring Google OAuth for secure login, allowing users to share secrets without revealing their identity.",
      imgUrl: webprojImg3,
      codeUrl: "https://github.com/anhng1106/Moonlight-Confessions_project",
    },
    {
      title: "Quizzer Web Application",
      description:
        "Collaboratively developed a full-stack quiz platform using Java, Spring Boot, ReactJS, JavaScript, MUI for teachers and students. The backend supported quiz/question CRUD with authentication restricted to teachers. The front-end allowed students to browse quizzes, answer questions, and review feedback. Spring Security was used for role-based access, and React with MUI provided an intuitive UI.",
      imgUrl: webprojImg2,
      codeUrl: "https://github.com/softProTeam1/quizzer_project_teamB",
    },
    {
      title: "Customer Training Website",
      description:
        "Built a customer training platform using ReactJS, JavaScript, MUI to manage training records with CRUD features. Integrated export to CSV and calendar components. Data was retrieved via API and deployed to GitHub Pages.",
      imgUrl: webprojImg1,
      codeUrl: "https://github.com/anhng1106/Customer_Training_project",
    },
  ];

  const mobile_projects = [
    {
      title: "TrekBuddy",
      description:
        "A React Native app for travelers with real-time weather, famous destinations and restaurants recommendations, multilingual support, and gamified quizzes. Built with Firebase, OpenWeather, and Google Places APIs.",
      imgUrl: projImg1,
      codeUrl: "https://github.com/anhng1106/TrekBuddy_mobile_app_project",
    },
    {
      title: "FunLandia",
      description:
        "A Flutter-based educational game for kids, featuring quizzes, interactive lessons, and a Firebase-powered reward system. Built in collaboration with international teammates.",
      imgUrl: projImg2,
      codeUrl: "https://mobile-games-2783a.web.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here’s a selection of projects I’ve worked on — ranging from
                    real-world web applications and APIs to creative solutions
                    that blend technical precision with user-focused design.
                    Each project reflects my passion for clean code, problem
                    solving, and delivering meaningful user experiences..
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {web_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {mobile_projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Updating...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
