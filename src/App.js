import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';

function App() {
   return (
      <Container fluid className="App">
         <Router>
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
            <Routes>
               <Route path="/" element={
                  <Container>
                     <Card className="justify-content-center shadow">
                        <Home />
                     </Card>
                  </Container>
               } />
               <Route path="/contact" element={
                  <Container>
                     <Card className="justify-content-center text-start shadow">
                        <Contact />
                     </Card>
                  </Container>
               } />
            </Routes>
         </Router>
      </Container>
   );
}

export default App;
