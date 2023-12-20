import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import beach1 from "../assets/img/beach-1.jpg";
import beach2 from "../assets/img/beach-2.jpg";
import hotel from "../assets/img/hotel.jpg";

function Tour() {
  return (
    <>
      <Container style={{ paddingLeft: "1.5rem" }}>
        <Row sty>
          <Col lg={4} sm={12} md={12} className="tour-left">
            <h1>Trending Tours </h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam.
            </h4>

            <p>View All Tours</p>
          </Col>
          <Col lg={4} sm={12} md={12}>
            <Image src={beach1} width={"300px"} rounded />
            <Container>
              <Row
                style={{
                  width: "300px",
                }}
              >
                <Col
                  style={{
                    color: "#6415ff",
                    fontWeight: "600",
                    textAlign: "left",
                  }}
                  lg={6}
                  sm={6}
                >
                  Beachfront
                </Col>
                <Col
                  style={{
                    color: "#000300",
                    fontWeight: "600",
                    textAlign: "right",
                  }}
                  lg={6}
                  sm={6}
                >
                  $99
                  <span style={{ color: "#6e7171", fontSize: "10px" }}>
                    {" "}
                    per day
                  </span>
                </Col>
              </Row>
            </Container>
            <div>
              <h3
                style={{
                  marginTop: "1rem",
                  fontSize: "20px",
                  color: "#243e63",
                  fontWeight: "600",
                  width: "300px",
                  paddingLeft: "10px",
                }}
              >
                A Trip to the Bahamas and the Carribean Ocean
              </h3>
            </div>
            <Container style={{ marginTop: "1rem" }}>
              <Row>
                <Col lg={4} sm={4} md={4}>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      color: "#6e7171",
                    }}
                  >
                    TRENDING
                  </p>
                </Col>
                <Col lg={4} sm={4} md={4}>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      color: "#6e7171",
                    }}
                  >
                    7 DAYS TOUR
                  </p>
                </Col>
                <Col lg={4} sm={4} md={4}>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      color: "#6e7171",
                    }}
                  >
                    AFRICA
                  </p>
                </Col>
              </Row>
            </Container>
            <Button
              style={{
                width: "280px",
                backgroundColor: "#6415ff",
              }}
              variant="primary"
            >
              {" "}
              BOOK NOW
            </Button>
          </Col>
          <Col lg={4} sm={12} md={12}>
            <Image src={beach2} width={"300px"} rounded />
            <Container>
              <Row
                style={{
                  width: "300px",
                }}
              >
                <Col
                  style={{
                    color: "#6415ff",
                    fontWeight: "600",
                    textAlign: "left    ",
                  }}
                  lg={6}
                  sm={6}
                >
                  Cruise
                </Col>
                <Col
                  style={{
                    color: "#000300",
                    fontWeight: "600",
                    textAlign: "right",
                  }}
                  lg={6}
                  sm={6}
                >
                  $169
                  <span style={{ color: "#6e7171", fontSize: "10px" }}>
                    {" "}
                    per day
                  </span>
                </Col>
              </Row>
            </Container>
            <div>
              <h3
                style={{
                  marginTop: "1rem",
                  fontSize: "20px",
                  color: "#243e63",
                  fontWeight: "600",
                  width: "300px",
                  paddingLeft: "10px",
                }}
              >
                Cruise to the Mariana Trench and the Phillipines
              </h3>
            </div>
            <Container style={{ marginTop: "1rem" }}>
              <Row>
                <Col lg={4} sm={4} md={4}>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      color: "#6e7171",
                    }}
                  >
                    TRENDING
                  </p>
                </Col>
                <Col lg={4} sm={4} md={4}>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      color: "#6e7171",
                    }}
                  >
                    15 DAYS TOUR
                  </p>
                </Col>
                <Col lg={4} sm={4} md={4}>
                  <p
                    style={{
                      fontSize: "10px",
                      fontWeight: "600",
                      color: "#6e7171",
                    }}
                  >
                    AUSTRALIA
                  </p>
                </Col>
              </Row>
            </Container>
            <Button
              style={{
                width: "280px",
                backgroundColor: "#6415ff",
              }}
              variant="primary"
            >
              {" "}
              BOOK NOW
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col lg={6} sm={12} style={{ paddingLeft: "2rem" }}>
            <Image src={hotel} rounded className="hotel" />
          </Col>
          <Col lg={6} sm={12} className="tour-left ">
            <h1>We have the best service. </h1>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h4>
            <Container className="g-0" style={{ marginTop: "5rem" }}>
              <Row>
                <Col lg={6} sm={6} className="hotel-specs">
                  <h3>192</h3>
                  <h4>Countries</h4>
                </Col>
                <Col lg={6} sm={6} className="hotel-specs">
                  <h3>479</h3>
                  <h4>Hotels</h4>
                </Col>
                <Col lg={6} sm={6} className="hotel-specs">
                  <h3>2093</h3>
                  <h4>Rooms</h4>
                </Col>
                <Col lg={6} sm={6} className="hotel-specs">
                  <h3>10347</h3>
                  <h4>Workers</h4>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Tour;
