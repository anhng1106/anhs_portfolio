// TimelineBootstrap.js
import React from "react";
import "animate.css";

const educationData = [
  {
    date: "January 2023 - May 2025",
    title: "Bachelor of Business Information Technology (Software Development)",
    school: "Haaga-Helia University of Applied Sciences",
    content: "Helsinki, Finland.",
    icon: "🎓",
  },
  {
    date: "September 2017 - May 2021",
    title: "Bachelor of Korean Language",
    school: "University of Education",
    content: "Ho Chi Minh City, Viet Nam",
    icon: "🎓",
  },
];

export const Education = () => {
  return (
    <section className="timeline-modern-container">
      <h2>EDUCATION</h2>
      <div className="timeline-modern">
        {educationData.map((item, index) => (
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
              <h5>{item.school}</h5>
              <p>{item.content}</p>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
