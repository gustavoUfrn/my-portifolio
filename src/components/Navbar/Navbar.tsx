import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="home" className="logo">
            LAG
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="home">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="skills">
                <Nav.Link href="#skills">Skills</Nav.Link>
              </Link>
              <Link to="projects">
                <Nav.Link href="projects">projects</Nav.Link>
              </Link>
            </Nav>
            <Button className="navButton" variant="outline-secondary">
              Contact us!
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default Header
