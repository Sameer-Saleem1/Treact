import React from "react";
import image from "../assets/img/container-1.webp";
import Card from "react-bootstrap/Card";
import secure from "../assets/img/secure.jpg";
import support from "../assets/img/support.jpg";
import custom from "../assets/img/custom.jpg";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

export default function HeroSection() {
  return (
    <>
      <Container className="g-5 mb-5" style={{ backgroundColor: "#f7fafc" }}>
        <Row>
          <Col className="pt-5 left-col" lg={6} sm={12} md={12}>
            <h1>Find Perfect Hotels</h1>
            <h1 style={{ color: "#6415ff" }}>anywhere you go.</h1>
            <h3>
              We've been in the hotels business across the world for 5 years
              now. We assure you that you will always enjoy your stay with us.
            </h3>
            <Button style={{ backgroundColor: "#6415ff" }} className="btn">
              {" "}
              Signup
            </Button>
            <Button
              className="btn"
              style={{ backgroundColor: "#e2e8f0", color: "#545454" }}
            >
              Search Hotel
            </Button>
          </Col>
          <Col lg={6} sm={12} md={12}>
            <Image src={image} rounded className="girl" />
          </Col>
        </Row>
      </Container>
      <div className="card-container mb-5">
        <Card>
          <Card.Body>
            <Image src={secure} style={{ width: "50px" }} />
            <Card.Title>Secure</Card.Title>
            <Card.Text>
              <p>
                We strictly only deal with vendors <br /> that provide top notch
                security
              </p>
              <p style={{ color: "#6415ff" }}>
                <b>Learn More {"->"}</b>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Image src={support} style={{ width: "50px" }} />
            <Card.Title>24/7 Support</Card.Title>
            <Card.Text>
              <p>
                We strictly only deal with vendors <br /> that provide top notch
                security
              </p>
              <p style={{ color: "#6415ff" }}>
                <b>Learn More {"->"}</b>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Image src={custom} style={{ width: "50px" }} />
            <Card.Title>Customizable</Card.Title>
            <Card.Text>
              <p>
                We strictly only deal with vendors <br /> that provide top notch
                security
              </p>
              <p style={{ color: "#6415ff" }}>
                <b>Learn More {"->"}</b>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
