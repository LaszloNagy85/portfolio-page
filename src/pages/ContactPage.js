import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

import emailjs from "emailjs-com";

const ContactPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  const handleSubmit = (event) => {
    setDisabled(true);
    event.preventDefault();
    const templateId = "template_HHTbsPz9";
    const userId = "user_0IoMkIKGjWeLnZgKTxLq6";
    sendEmail(
      templateId,
      { message_html: message, from_name: name, reply_to: email },
      userId
    );
  };

  const sendEmail = (templateId, templateParams, userId) => {
    emailjs.send("gmail", templateId, templateParams, userId).then(
      (result) => {
        console.log(result.text);
        setEmailSent(true);
        setTimeout(() => clearPage(), 5000);
      },
      (error) => {
        console.log(error.text);
        setEmailSent(false);
      }
    );
  };

  const clearPage = () => {
    setName("");
    setEmail("");
    setMessage("");
    setEmailSent(null);
    setDisabled(false);
  };

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
              required
              placeholder="John Smith"
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
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows="4"
              value={message}
              required
              placeholder="Your message here."
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button
            className="inline-block"
            variant="primary"
            type="submit"
            disabled={disabled}
          >
            Send
          </Button>

          {emailSent === true && (
            <p className="d-inline success-msg">
              Email sent! Thank you for your message!
            </p>
          )}
          {emailSent === false && (
            <p className="d-inline err-msg">Email not sent! An error occured. Please copy your message and try again later.</p>
          )}
        </Form>
      </Content>
    </div>
  );
};

export default ContactPage;
