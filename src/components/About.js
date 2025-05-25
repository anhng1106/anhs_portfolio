import React from "react";
import "animate.css";
import profileImg from "../assets/img/profile.jpg"; // <-- replace with your actual path

export const About = () => {
  return (
    <section className="about-section" id="about">
      <h2>ABOUT ME</h2>
      <div className="container-about">
        <div className="about-img">
          <img src={profileImg} alt="Anh Nguyen Profile" />
        </div>
        <div className="about-content">
          <p>
            Hello! I'm <strong>Anh Nguyen</strong>, a passionate full-stack
            developer who loves turning ideas into intuitive digital
            experiences. With a strong foundation in frontend technologies like
            ReactJS or Next.js, I specialize in building responsive, accessible,
            and high-performing web applications.
          </p>
          <p>
            Over the past few years from school to reality worklife, I’ve worked
            on projects ranging from AI-powered voice ordering systems to
            large-scale audience data platforms. I thrive on clean design,
            efficient code, and collaborative teamwork. Whether it’s designing
            with Figma or querying data with Supabase, I’m always eager to learn
            and push boundaries.
          </p>
          <p>
            When I'm not coding, you'll find me exploring design trends, cooking
            food, or enjoying a good cup of coffee with friends 😄.
          </p>
        </div>
      </div>
    </section>
  );
};
