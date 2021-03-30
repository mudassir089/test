import React, { useState } from "react";
import "../App.css";
import { Spinner } from "react-bootstrap";
import firebase from "../config";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      setLoader(true);

      firebase
        .firestore()
        .collection("form")
        .add({
          name: name,
          email: email,
          subject: subject,
          message: message,
        })
        .then(() => {
          setLoader(false);
          setError("Form Submited 👍");
        })
        .catch((error) => {
          setLoader(false);
          setError(error.message);
        });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setError("type your details");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 📑</h1>

      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Subject</label>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <label>Message / FeedBack</label>
      <textarea
        type="text"
        placeholder="Message/Feedback"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

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

export default ContactForm;
