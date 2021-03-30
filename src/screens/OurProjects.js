import React from "react";
import ProjectCards from "../components/ProjectCards";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCheck, FaComment, FaTrophy } from "react-icons/fa";

const OurProjects = () => {
  return (
    <Container className="text-center my-5">
      <div>
        <h1 className="title service" style={{ fontSize: 50 }}>
          Our customers keep coming back
        </h1>
        <p style={{ color: "#838282", width: "50%", margin: "auto" }}>
          We strive to be the best in the business, and that means providing
          premium services for every single project.
        </p>
      </div>

      <Row className="my-5">
        <ProjectCards
          title="3"
          text="WINNING AWARDS"
          icon={<FaTrophy color="dodgerblue" size={40} />}
        />
        <ProjectCards
          title="24/7"
          text="Fast Support"
          icon={<FaComment color="dodgerblue" size={40} />}
        />
        <ProjectCards
          title="100+"
          text="Completed Projects"
          icon={<FaCheck color="dodgerblue" size={40} />}
        />
      </Row>
    </Container>
  );
};

export default OurProjects;
