import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pic from "../../Assets/Projects/pic.png";

import edit from "../../Assets/Projects/codingpic.png";
import app from "../../Assets/Projects/app.png";

import pic2 from "../../Assets/Projects/pic2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={app}
              isBlog={false}
              title="Women's Health App"
              description="A personalized period tracker that features a custom lavender-themed calendar, predicts menstrual cycles and fertile windows, and lets users add notes to specific days. Built with Android Studio using ViewBinding and Firebase."
              ghLink="https://github.com/mavil323/android-womens-health-app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic2}
              isBlog={false}
              title="Cloud Platform Job Simulation"
              description="•	Completed a job simulation involving building a hypothetical new VPN product for Verizon’s Cloud Computing team.
•	Used command line Python to test whether Verizon’s VPN met the cloud-native traits, i.e. redundancy, resiliency and least-privilege.
•	Researched approaches to achieve application security and communicated insights in a PowerPoint Presentation."
             
              ghLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Verizon%20Communications%20Inc./aNJGnRtgfiK5fQqcR_Verizon_CZ984CpXCDdNRvQs4_1726073069913_completion_certificate.pdf"
            />

          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edit}
              isBlog={false}
              title="J.P. Morgan Software Engineering Virtual Experience on Forage"
              description="* Set up a local dev environment by downloading the necessary files, tools and
   dependencies.
 * Fixed broken files in the repository to make web application output
   correctly.
 * Used JPMorgan Chase’s open source library called Perspective to generate a
   live graph that displays a data feed in a clear and visually appealing way
   for traders to monitor."
              ghLink="https://github.com/mavil323/forage-jpmc-swe-task-1"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pic}
              isBlog={false}
              title="Texas Benefits Portal Website"
              description="-Collaborated with a team of five developers to design and develop a responsive website using React, React Router, and Chakra UI.
-Implemented a Service Catalog and Learning Resources sections for easy navigation.
-Created an AI powered chatbot that answers common questions about the benefits provided to Texas’s residents."
              ghLink="https://github.com/mavil323/Texas-JSXJedi-main"
             
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
