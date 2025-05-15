// TimelineBootstrap.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";

const timelineData = [
  {
    date: "January 2025 - May 2025",
    title: "Software Engineer Intern ",
    company: "Maatop Oy",
    content:
      "Built a speech-driven interface for automated digging machines using Vue.js and the OpenAI API, enabling users to place structured orders in under 5 seconds. Improved fuzzy voice matching accuracy from 70% to 95% with Fuse.js and reduced manual input errors by 80%. Integrated with Maatop’s internal API to process 50+ real-time orders during field testing, achieving seamless frontend-backend orchestration. Collaborated with UX testers to reduce average order time by 40%.",
    icon: "🧑‍💻",
  },
  {
    date: "December 2024 - March 2025",
    title: "Front End Developer Intern",
    company: "Neuwo Oy",
    content:
      "Built and deployed a modular, responsive web app using Next.js, React, MUI, and TypeScript to serve over 1.2M monthly queries. Integrated with Supabase to query 100M+ audience records with smart filtering and pagination, maintaining <1.5s average load time. Implemented advanced keyword search using PostgreSQL full-text search, improving audience segment precision by 85%. Led a complete UI/UX redesign in Figma, boosting engagement by 30% and session duration by 25%. Reduced initial load time by 35% via performance optimization and contributed to code reviews and documentation, accelerating onboarding by 40%.",
    icon: "🚀",
  },
];

export const Timeline = () => {
  return (
    <section className="timeline-modern-container">
      <h2>WORK EXPERIENCE</h2>
      <div className="timeline-modern">
        {timelineData.map((item, index) => (
          <div
            className={`timeline-item-modern ${
              index % 2 === 0 ? "left" : "right"
            }`}
            data-aos="fade-up"
            key={index}
          >
            <div className="timeline-content-modern">
              <span className="timeline-date">{item.date}</span>
              <div className="timeline-icon">{item.icon}</div>
              <h5>{item.company}</h5>
              <p>{item.title}</p>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
