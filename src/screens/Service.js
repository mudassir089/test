import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaAdjust,
  FaAdobe,
  FaAirbnb,
  FaAndroid,
  FaBeer,
  FaCode,
} from "react-icons/fa";
import ServiceCards from "../components/ServiceCards";
const Service = () => {
  return (
    <Container className="text-center my-5">
      <h1 className="title service" style={{ fontSize: 50 }}>
        Our Services
      </h1>
      <p style={{ color: "#838282", width: "50%", margin: "auto" }}>
        We deal with the state-of-the-art tools and technologies, to provide you
        the best services.
      </p>
      <Row className="my-5">
        <ServiceCards
          backgroundColor="orange"
          title="UI / UX Design"
          text="Our in-house as well as contractual UI/UX design team deliver the cleanest, most modern and user-friendly designs."
          icon={<FaBeer color="white" size={35} className="my-3" />}
        />
        <ServiceCards
          backgroundColor="#6610F2"
          title="Web Development"
          text="We use modern frameworks such as React, Angular and Vue along-side the most robust backend technologies"
          icon={<FaCode color="white" size={35} className="my-3" />}
        />
        <ServiceCards
          backgroundColor="#FF612F"
          title="Cloud solutions"
          text="Our cloud team can expertly navigate solutions for your business using AWS, Google Cloud and IBM Cloud."
          icon={<FaAirbnb color="white" size={35} className="my-3" />}
        />
        <ServiceCards
          backgroundColor="#00D280"
          title="Mobile App Development"
          text="React Native and Flutter are used by our mobile application development department to deliver blazing fast mobile apps to for kinds of users."
          icon={<FaAdjust color="white" size={35} className="my-3" />}
        />
        <ServiceCards
          backgroundColor="dodgerblue"
          title="eCommerce Development"
          text="Instead of traditional eCommerce solutions, we choose to work with headless CMS solutions to provide remote shopping cart solutions using tools such as Foxy.io."
          icon={<FaAndroid color="white" size={35} className="my-3" />}
        />
        <ServiceCards
          backgroundColor="#FFB700"
          title="Product Automation"
          text="Everything can be automated! Our automation team ensures that there your business runs at maximum productivity by using the power of automation."
          icon={<FaAdobe color="white" size={35} className="my-3" />}
        />
      </Row>
    </Container>
  );
};

export default Service;
