// TimelineBootstrap.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";

const timelineData = [
  {
    year: "2025",
    title: "Frontend Developer Intern",
    company: "Company A",
    description: "Built React components and optimized user experience.",
  },
  {
    year: "2024",
    title: "Freelancer",
    company: "Remote",
    description: "Developed websites with Next.js and Firebase for clients.",
  },
  {
    year: "2023",
    title: "Computer Science Degree",
    company: "Haaga-Helia",
    description: "Graduated with focus on mobile and cloud development.",
  },
];

export const Timeline = () => {
  return (
    <section className="timeline" id="timeline">
      <Container>
        <h2>My Journey</h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <Row key={index} className="timeline-item">
              <Col md={1} className="timeline-dot-col">
                <div className="timeline-dot" />
              </Col>
              <Col md={11}>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h5>{item.title}</h5>
                  <h6 className="text-muted">{item.company}</h6>
                  <p>{item.description}</p>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};
