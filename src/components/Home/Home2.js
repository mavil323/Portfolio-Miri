import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
 
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm Maria! I graduated with a Bachelor's degree in Computer Science in May 2024, but my learning didn't stop there. Since graduating, I've been expanding my skills in both technology and accounting because I enjoy understanding how businesses operate and how data can be used to make better decisions.

During my internship at Nagarro, I worked on web development projects, helped build an AI-powered chatbot, collaborated with team members on website improvements, and had the opportunity to present my work to leadership. That experience strengthened my technical skills while teaching me the value of teamwork, communication, and problem-solving.

Today, I'm continuing my education in accounting while building hands-on experience with Excel, financial analysis, and data analytics. I enjoy working with Excel to organize data, create reports, and uncover insights that help solve real-world problems. What excites me most is being able to combine my technical background with business and financial knowledge to bridge the gap between technology and decision-making.

Outside of work and school, I enjoy creative hobbies, learning new skills, and taking on challenges that push me outside my comfort zone. I'm naturally curious, detail-oriented, and always looking for opportunities to grow both personally and professionally.
 
              <br />
              <br /> I like to program in:

              <i>
                <b className="purple"> C++, Javascript, and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are:  &nbsp;
              <i>
                <b className="purple"> data analytics, accounting, finance, and technology-driven business solutions </b> and
                in areas related to{" "}
                <b className="purple">
                  Designing
                </b>
              </i>
              <br />
              <br />
              Whenever I am available, I like to apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">    
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on:</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mavil323"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/miriam-avila-b685b1248/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
