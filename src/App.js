import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

function App() {
   return (
      <Container fluid className="App">
         <Navigation />
         <Routes>
            <Route path="/" element={
               <Container as="main">
                  <Card className="justify-content-center shadow">
                     <Home />
                  </Card>
               </Container>
            } />
            <Route path="/contact" element={
               <Container as="main">
                  <Card className="justify-content-center text-start shadow">
                     <Contact />
                  </Card>
               </Container>
            } />
            <Route path="/login" element={
               <Container as="main">
                  <Card className="justify-content-center text-start shadow">
                     <Login />
                  </Card>
               </Container>
            } />
         </Routes>
      </Container>
   );
}

export default App;
