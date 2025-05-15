import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Github, Linkedin } from "react-bootstrap-icons";
import { NavLink } from "react-bootstrap";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="light"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <i className="bi bi-house-door" style={{ fontSize: "1.6rem" }}></i>
          </Link>
        </Navbar.Brand>
        <div className="ms-auto d-flex align-items-center">
          <a
            href="/Guilherme_Forte_CV.pdf"
            download
            className="btn btn-outline-primary me-3"
            style={{ fontWeight: 500 }}
          >
            Download CV
          </a>
          <NavLink href="https://www.linkedin.com/in/guilherme-forte-b27696b9">
            <Linkedin size={30} color="black" />
          </NavLink>
          <NavLink href="https://github.com/F07RTE">
            <Github size={30} color="black" />
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
}
