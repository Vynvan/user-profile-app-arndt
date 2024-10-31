import { Container, Nav, Navbar } from 'react-bootstrap';

function Navigation() {
   return (
      <Navbar as="nav" expand="sm" className="mb-5 bg-body-tertiary sticky-top card shadow">
         <Container>
            <Navbar.Brand href="/">user-profile-arndt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/contact">Kontakt</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Navigation;
