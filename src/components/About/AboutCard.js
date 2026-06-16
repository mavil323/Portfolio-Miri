import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Miriam Avila </span>
            from <span className="purple"> Beaumont,TX </span>
            <br />
            I am currently looking for work!
            <br />
Detail-oriented developer with a Bachelor's degree in Computer Science, earned in May 2024. Since graduating, I have continued expanding my skills in front-end and full-stack development by building responsive web applications and intuitive user experiences. In addition, I am currently pursuing accounting studies at Houston Community College, developing knowledge in financial accounting, auditing, taxation, data analytics, and business processes. This combination of technical and financial expertise allows me to approach problems with both analytical and business-focused perspectives.            <br />
            <br />
            Apart from coding, I enjoy expanding my knowledge in accounting, auditing, and data analytics. I am passionate about continuous learning and enjoy exploring how technology and business can work together to solve real-world problems. Outside of academics and technology, I enjoy art, music, and creative projects.g, some other activities that I love to do!
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
