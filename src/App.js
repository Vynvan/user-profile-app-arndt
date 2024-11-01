import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardLayout from './components/CardLayout';
import Navigation from './components/Navigation';
import Contact from './sites/Contact';
import Home from './sites/Home';
import Login from './sites/Login';
import Register from './sites/Register';
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
               // <CardLayout Components={[Login, Register]} />
            } />
            <Route path="/register" element={
               <CardLayout Component={Register} />
            } />
         </Routes>
      </Container>
   );
}

export default App;
