import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nisha Rajawat </span>
            from <span className="purple"> Jaipur,India</span>
            <br /> I am a pre final year student developing my skills and trying to gain knowledge ,to be a better version of myself.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Create. Inspire. Repeat!"{" "}
          </p>
          <footer className="blockquote-footer">Nisha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
