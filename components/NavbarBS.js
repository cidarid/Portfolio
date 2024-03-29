import { Container, Nav, Navbar } from "react-bootstrap"
import Logo from '@components/Logo'

export default function NavbarBS() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><Logo title="Spencer Fletcher"/></Navbar.Brand>

      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}