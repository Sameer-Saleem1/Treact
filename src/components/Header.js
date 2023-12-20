import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#f7fafc" }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" className="Navbar-title">
            <h2>Treact</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto Navbar-section">
            <Link className="Navbar-element" to="/HeroSection">
              <h4>About</h4>
            </Link>
            <Link className="Navbar-element" to="/Contact">
              <h4>Blog </h4>
            </Link>
            <Link className="Navbar-element" to="/Contact">
              <h4>Pricing </h4>
            </Link>
            <Link className="Navbar-element" to="/Contact">
              <h4>Login </h4>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
