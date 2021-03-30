import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
import team5 from "../images/team5.jpg";
import team6 from "../images/team6.jpg";
import team7 from "../images/team7.jpg";
import team8 from "../images/team8.jpg";
import team9 from "../images/team9.jpg";

const Team = () => {
  return (
    <div>
      <Container fluid style={{ width: "70%" }} className="text-center my-5">
        <div>
          <h1 className="title" style={{ fontSize: 50 }}>
            Team Members
          </h1>
          <p>
            Meet our highly talented team, trained and skilled in their
            respective departments.
          </p>
        </div>
        <Row>
          <Col
            style={{ margin: "auto" }}
            className="my-3"
            lg={3}
            md={12}
            sm={12}
          >
            <Image roundedCircle width={200} src={team6} />
            <div style={{ marginTop: 20 }}>
              <h2 className="font-weight-bold">Farooq AR</h2>
              <p>Full-Stack Developer</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="my-3" lg={3} md={12} sm={12}>
            <Image roundedCircle width={200} src={team1} />
            <div style={{ paddingTop: 20 }}>
              <h2 className="font-weight-bold">Farooq AR</h2>
              <p>Full-Stack Developer</p>
            </div>
          </Col>
          <Col className="my-3" lg={3} md={12} sm={12}>
            <Image roundedCircle width={200} src={team2} />
            <div style={{ paddingTop: 20 }}>
              <h2 className="font-weight-bold">Farooq AR</h2>
              <p>Full-Stack Developer</p>
            </div>
          </Col>
          <Col className="my-3" lg={3} md={12} sm={12}>
            <Image roundedCircle width={200} src={team3} />
            <div style={{ paddingTop: 20 }}>
              <h2 className="font-weight-bold">Farooq AR</h2>
              <p>Full-Stack Developer</p>
            </div>
          </Col>
          <Col className="my-3" lg={3} md={12} sm={12}>
            <Image roundedCircle width={200} src={team4} />
            <div style={{ paddingTop: 20 }}>
              <h2 className="font-weight-bold">Farooq AR</h2>
              <p>Full-Stack Developer</p>
            </div>
          </Col>
          <Col className="my-3" lg={3} md={12} sm={12}>
            <Image roundedCircle width={200} src={team5} />
            <div style={{ paddingTop: 20 }}>
              <h2 className="font-weight-bold">Farooq AR</h2>
              <p>Full-Stack Developer</p>
            </div>
          </Col>

          <Col className="my-3" lg={3} md={12} sm={12}>
            <Image roundedCircle width={200} src={team7} />
            <div style={{ paddingTop: 20 }}>
              <h2 className="font-weight-bold">Farooq AR</h2>
              <p>Full-Stack Developer</p>
            </div>
          </Col>
          <Col className="my-3" lg={3} md={12} sm={12}>
            <Image roundedCircle width={200} src={team8} />
            <div style={{ paddingTop: 20 }}>
              <h2 className="font-weight-bold">Farooq AR</h2>
              <p>Full-Stack Developer</p>
            </div>
          </Col>
          <Col className="my-3" lg={3} md={12} sm={12}>
            <Image roundedCircle width={200} src={team9} />
            <div style={{ paddingTop: 20 }}>
              <h2 className="font-weight-bold">Farooq AR</h2>
              <p>Full-Stack Developer</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
