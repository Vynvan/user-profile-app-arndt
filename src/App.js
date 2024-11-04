import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardLayout from './components/CardLayout';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Contact from './sites/Contact';
import Home from './sites/Home';
import Login from './sites/Login';
import UserProfile from './sites/UserProfile';
import Register from './sites/Register';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
   const darkTheme = false;
   
   return (
      <Container fluid className={`App d-flex flex-column justify-content-start ${darkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
         <Navigation />
         <Routes>
            <Route path="/" element={
               <CardLayout Components={[Home, UserProfile]} />
            } />
            <Route path="/contact" element={
               <CardLayout Component={Contact} />
            } />
            <Route path="/login" element={
               <CardLayout Component={Login} />
            } />
            <Route path="/register" element={
               <CardLayout Component={Register} />
            } />
         </Routes>
         <Footer />
      </Container>
   );
}

export default App;
