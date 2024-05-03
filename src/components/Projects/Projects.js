import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Make Study Fun"
              description="The website has all functionalities of making a to-do list which is
              helpful for students in time management,fun activities for students also available , resources for study like books and youtube lectures are also available. "
              ghLink="https://github.com/niisharajput/Make-Study-Fun.git"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Attendance-Tracker"
              description="It is an online attendance tracker website. it is also helpful in granting leave to the students."
              ghLink="https://github.com/niisharajput/Attendence-Tracker.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Maa-ka-Nuska"
              description="This website contains functionalities of getting the nearest locations of clinics and hospital . also , you will get home remedies for
               any illness like our mother gives us."
              ghLink="https://github.com/niisharajput/Maa-ka-Nuska.git"
            />
          </Col>

          

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

// TODO:SHLOK - Change logo in title bar