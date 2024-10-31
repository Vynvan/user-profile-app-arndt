import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './sites/Contact';
import Home from './sites/Home';
import Login from './sites/Login';
import CardLayout from './components/CardLayout';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
   return (
      <Container fluid className="App">
         <Navigation />
         <Routes>
            <Route path="/" element={
               <CardLayout Component={Home} />
            } />
            <Route path="/contact" element={
               <CardLayout Component={Contact} />
            } />
            <Route path="/login" element={
               <CardLayout Component={Login} />
            } />
         </Routes>
      </Container>
   );
}

export default App;
