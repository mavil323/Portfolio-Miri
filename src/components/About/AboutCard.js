import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hiiii, I am <span className="purple">Miriam Avila </span>
            from <span className="purple"> Beaumont,TX </span>
            <br />
            I am currently looking for work!
            <br />
            Detail-oriented developer with a Bachelor’s degree in Computer Science, which I earned in May 2024. Since graduating, I’ve continued to expand my skills in front-end and full-stack development, building responsive web apps and intuitive user experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Pilates
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">miri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
