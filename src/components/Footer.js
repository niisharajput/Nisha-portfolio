import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Nisha Rajawat</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NR</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/niisharajput"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:rajputniisha@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <SiGmail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nisha-rajawat-1b58a1228/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://sgcodes.co.in/youtube"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                <FaYoutube />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
