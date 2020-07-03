import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

const ContactPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);
    //setting just for deployment show
    setEmailSent(true);
  }

  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Full name</Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button className="inline-block" variant="primary" type="submit" disabled={disabled}>
              Send
          </Button>

          {emailSent === true && <p className="d-inline success-msg">Email sent!</p>}
          {emailSent === false && <p className="d-inline err-msg">Email not sent!</p>}
        </Form>
      </Content>
    </div>
  );
};

export default ContactPage;
