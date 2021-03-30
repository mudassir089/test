import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const SmallCards = (props) => {
  const { name } = props;
  return (
    <div
      className="shadow box rounded"
      style={{
        width: "45%",
        paddingTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FaRegCheckCircle
        size={15}
        color="green"
        style={{ marginRight: 12, marginBottom: 10 }}
      />
      <p className="font-weight-bold"> {name}</p>
    </div>
  );
};

export default SmallCards;
