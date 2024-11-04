import LogoutToggleButton from './LogoutToggleButton';
import { UserContext } from './UserProvider';
import { useContext } from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
   const { user } = useContext(UserContext);

   return (
      <Navbar as="nav" expand="sm" className="mb-5 bg-body-tertiary sticky-top card shadow">
         <Container>
            <Navbar.Brand href="/">user-profile-arndt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/contact">Kontakt</Nav.Link>
                  {user ? (
                     <NavDropdown id="dropdown-basic-button" variant='none' title={user.username}>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <LogoutToggleButton as={Nav.Link} />
                        </NavDropdown>
                     ) : <Nav.Link href="/login">Login</Nav.Link>
                  }
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}

export default Navigation;
