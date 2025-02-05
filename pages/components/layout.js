import Header from "pages/components/header.js";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
}
