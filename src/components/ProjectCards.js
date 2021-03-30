import React from "react";
import { Col, Card } from "react-bootstrap";
const ProjectCards = ({ title, text, icon }) => {
  return (
    <>
      <Col sm={12} md={6} lg={4} xl={4} style={{}}>
        <Card
          style={{ border: "none", alignItems: "center" }}
          className="my-3 p-2 projects"
        >
          <div
            style={{
              marginTop: 20,
            }}
          >
            {icon}
          </div>
          <Card.Body style={{}}>
            <Card.Title
              className="title"
              style={{ fontWeight: "bold", fontSize: 40 }}
            >
              {title}
            </Card.Title>
            <Card.Text
              style={{
                textAlign: "start",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {text}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProjectCards;
