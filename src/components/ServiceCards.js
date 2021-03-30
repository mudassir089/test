import React from "react";
import { Card, Col } from "react-bootstrap";

const ServiceCards = ({ backgroundColor, title, text, icon }) => {
  return (
    <>
      <Col sm={12} md={6} lg={4} xl={4} style={{}}>
        <Card style={{ border: "none" }} className="my-3 p-2 car">
          <div
            style={{
              backgroundColor: backgroundColor,
              width: 80,
              borderRadius: 50,
              marginLeft: 20,
            }}
          >
            {icon}
          </div>
          <Card.Body>
            <Card.Title
              className="title"
              style={{ textAlign: "start", fontWeight: "bold" }}
            >
              {title}
            </Card.Title>
            <Card.Text
              style={{ textAlign: "start", fontSize: 14, color: "#838282" }}
            >
              {text}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ServiceCards;
