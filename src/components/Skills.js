import { Tab, Nav, Row, Col } from "react-bootstrap";
import js from "../assets/img/js.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import typescript from "../assets/img/typescript.png";
import sql from "../assets/img/sql.png";
import reactjs from "../assets/img/reactjs.png";
import nextjs from "../assets/img/nextjs.png";
import springboot from "../assets/img/springboot.png";
import nodejs from "../assets/img/nodejs.png";
import vite from "../assets/img/vite.png";
import vuejs from "../assets/img/vuejs.png";
import nuxt from "../assets/img/nuxt.png";
import git from "../assets/img/git.png";
import docker from "../assets/img/docker.png";
import figma from "../assets/img/figma.png";
import firebase from "../assets/img/firebase.png";
import postman from "../assets/img/postman.png";
import mysql from "../assets/img/mysql.png";
import aws from "../assets/img/aws.png";
import supabase from "../assets/img/supabase.png";
import postgresql from "../assets/img/postgresql.png";
import { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Server } from "react-bootstrap-icons";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here are the core technologies and tools I’ve worked with
                throughout my projects and internships — from frontend
                frameworks to backend systems and cloud platforms.
              </p>

              <Tab.Container
                id="skills-tabs"
                activeKey={activeTab}
                onSelect={setActiveTab}
              >
                <Nav variant="pills" className="skill-tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="languages" id="skills-tabs-tab-first">
                      Programming Languages
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="frameworks" id="skills-tabs-tab-second">
                      Frameworks & Libraries
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tools" id="skills-tabs-tab-third">
                      Tools & Technologies
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="cloud" id="skills-tabs-tab-fourth">
                      Databases & Cloud Platform
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="languages">
                    <Carousel
                      key={activeTab}
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <img src={js} alt="JavaScript" />
                        <h5>JavaScript</h5>
                      </div>
                      <div className="item">
                        <img src={typescript} alt="TypeScript" />
                        <h5>TypeScript</h5>
                      </div>
                      <div className="item">
                        <img src={java} alt="Java" />
                        <h5>Java</h5>
                      </div>
                      <div className="item">
                        <img src={python} alt="Python" />
                        <h5>Python</h5>
                      </div>
                      <div className="item">
                        <img src={sql} alt="SQL" />
                        <h5>SQL</h5>
                      </div>
                    </Carousel>
                  </Tab.Pane>

                  <Tab.Pane eventKey="frameworks">
                    <Carousel
                      key={activeTab}
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <img src={reactjs} alt="React" />
                        <h5>React</h5>
                      </div>
                      <div className="item">
                        <img src={nextjs} alt="Next.js" />
                        <h5>Next.js</h5>
                      </div>
                      <div className="item">
                        <img src={springboot} alt="Springboot" />
                        <h5>Spring Boot</h5>
                      </div>
                      <div className="item">
                        <img src={nodejs} alt="Node.js" />
                        <h5>Node.js</h5>
                      </div>
                      <div className="item">
                        <img src={vite} alt="Vite" />
                        <h5>Vite</h5>
                      </div>
                      <div className="item">
                        <img src={vuejs} alt="Vuejs" />
                        <h5>VueJS</h5>
                      </div>
                      <div className="item">
                        <img src={nuxt} alt="Nuxt" />
                        <h5>Nuxt</h5>
                      </div>
                    </Carousel>
                  </Tab.Pane>

                  <Tab.Pane eventKey="tools">
                    <Carousel
                      key={activeTab}
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <img src={git} alt="Git" />
                        <h5>Git</h5>
                      </div>
                      <div className="item">
                        <img src={docker} alt="Docker" />
                        <h5>Docker</h5>
                      </div>
                      <div className="item">
                        <img src={figma} alt="Figma" />
                        <h5>Figma</h5>
                      </div>
                      <div className="item">
                        <img src={postman} alt="Postman" />
                        <h5>Postman</h5>
                      </div>
                    </Carousel>
                  </Tab.Pane>

                  <Tab.Pane eventKey="cloud">
                    <Carousel
                      key={activeTab}
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <img src={mysql} alt="MySQL" />
                        <h5>MySQL</h5>
                      </div>
                      <div className="item">
                        <img src={postgresql} alt="PostgreSQL" />
                        <h5>PostgreSQL</h5>
                      </div>
                      <div className="item">
                        <img src={aws} alt="AWS" />
                        <h5>Amazon Web Service (basic)</h5>
                      </div>
                      <div className="item">
                        <img src={supabase} alt="Supabase" />
                        <h5>Supabase</h5>
                      </div>
                      <div className="item">
                        <img src={firebase} alt="Firebase" />
                        <h5>Firebase</h5>
                      </div>
                    </Carousel>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
