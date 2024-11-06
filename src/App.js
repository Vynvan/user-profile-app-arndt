import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardLayout from './components/CardLayout';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
   const darkTheme = false;
   
   return (
      <Container fluid className={`App d-flex flex-column justify-content-start ${darkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
         <Navigation />
         <Routes>
            <Route path="/" element={
               <CardLayout>
                  <Home />
                  <UserProfile />
               </CardLayout>
            } />
            <Route path="/contact" element={
               <CardLayout>
                  <Contact />
               </CardLayout>
            } />
            <Route path="/login" element={
               <CardLayout>
                  <Login />
               </CardLayout>
         } />
            <Route path="/register" element={
               <CardLayout>
                  <Register />
               </CardLayout>
         } />
         </Routes>
         <Footer />
      </Container>
   );
}

export default App;
