import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import SmallCards from "./SmallCards";
const Work = ({ title, description, image }) => {
  return (
    <div>
      <div className="py-2">
        <h1 className="title">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="my-5">
        <div
          className="my-5"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <SmallCards name="UI / UX Design" />
          <SmallCards name="Mobile Development" />
        </div>
        <div
          className="my-5"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <SmallCards name="Vue.js Development" />
          <SmallCards name="Angular Development" />
        </div>
        <div
          className="my-5"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <SmallCards name="JavaScript Development" />
          <SmallCards name="Redux Development" />
        </div>
      </div>
    </div>
  );
};

export default Work;
