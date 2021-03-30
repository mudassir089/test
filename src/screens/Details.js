import React from "react";
import Work from "../components/Work";
import image1 from "../images/slide.jpg";
import image2 from "../images/slide2.jpg";
import image3 from "../images/slide3.jpg";
import { Col, Row, Card, Container } from "react-bootstrap";

const Details = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <Container fluid style={{ width: "80%" }} className="py-5">
        <div style={{ marginTop: 100 }}></div>
        <Row style={{ backgroundColor: "#FCFBFB" }}>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Work
              title="Web Application Development"
              description="This is the age of modern web designs, frameworks and tools. We utilize all of the latest tech to ensure our clients can give their customers the best web experience which ensures a high rate of conversion."
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="rounded"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: 70,
              }}
            >
              <Card.Img
                className="shadow rounded"
                src={image1}
                variant="bottom"
                style={{ width: "95%", height: 400 }}
              />
            </div>
          </Col>
        </Row>
        <div style={{ marginTop: 100 }}></div>

        <Row style={{ backgroundColor: "#FCFBFB" }}>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="rounded"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: 70,
              }}
            >
              <Card.Img
                className="shadow rounded"
                src={image2}
                variant="bottom"
                style={{ width: "95%", height: 400 }}
              />
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Work
              title="Mobile App Development"
              description="Mobile development isn't cheap, but we utilize technologies such as React Native and Flutter to provide the cleanest and fastest applications to our clients within their targeted budgets."
            />
          </Col>
        </Row>
        <div style={{ marginTop: 120 }}></div>

        <Row style={{ backgroundColor: "#FCFBFB" }}>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Work
              title="Cloud Solutions"
              description="Our team of experts take you through the process of utilizing the most out of Cloud services such as AWS, Google Cloud and IBM to create the perfect infrastructure for you while ensuring that your costs are manageable and apps are scalable."
            />
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <div
              className="rounded"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: 70,
              }}
            >
              <Card.Img
                className="shadow rounded"
                src={image3}
                variant="bottom"
                style={{ width: "95%", height: 400 }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
