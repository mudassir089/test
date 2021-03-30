import React, { useState } from "react";
import "../App.css";
import { Spinner } from "react-bootstrap";
import firebase from "../config";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      setLoader(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoader(false);
          history.push("/");
        })
        .catch((error) => {
          setLoader(false);
          setError(error.message);
        });
    } else {
      setError("type your details");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Login 🔓</h1>

      <label>Email</label>
      <input
        type="email"
        placeholder="Name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error === "Form Submited 👍" && error !== "" ? (
        <p className="text-success">{error}</p>
      ) : (
        <p className="text-danger">{error}</p>
      )}

      <button type="submit">
        {loader ? (
          <Spinner
            style={{ margin: "auto" }}
            animation="border"
            role="status"
          />
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default Admin;
