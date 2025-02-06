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
            Guilherme Forte
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink>
            <Link
              href="/projects"
              style={{ color: "black", textDecoration: "none" }}
            >
              Projects
            </Link>
          </NavLink>
          <NavLink>
            <Link
              href="/experience"
              style={{ color: "black", textDecoration: "none" }}
            >
              Experience
            </Link>
          </NavLink>
          <NavLink>
            <Link
              href="/education"
              style={{ color: "black", textDecoration: "none" }}
            >
              Education
            </Link>
          </NavLink>
          <NavLink>
            <Link
              href="/achievements"
              style={{ color: "black", textDecoration: "none" }}
            >
              Achievements
            </Link>
          </NavLink>
          <NavLink>
            <Link
              href="/status"
              style={{ color: "black", textDecoration: "none" }}
            >
              Status
            </Link>
          </NavLink>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <NavLink href="https://www.linkedin.com/in/guilherme-forte-b27696b9">
            <Linkedin size={(30, 30)} color="black" />
          </NavLink>
          <NavLink href="https://github.com/F07RTE">
            <Github size={(30, 30)} color="black" />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
