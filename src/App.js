import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
   return (
      <div className="App container-fluid">
         <Router>
            <nav className="mb-5 py-3 d-flex flex-row justify-content-center navbar sticky-top card shadow">
               <Link to="/" className="btn">TodoList</Link>
               <Link to="/contact" className="btn">Kontakt</Link>
            </nav>
            <Routes>
               <Route path="/" element={
                  <div className="container d-flex justify-content-center card shadow">
                     <Home />
                  </div>
               } />
               <Route path="/contact" element={
                  <div className="container d-flex justify-content-center text-start card shadow">
                     <Contact />
                  </div>
               } />
            </Routes>
         </Router>
         {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
               Learn React
            </a>
         </header> */}
      </div>
   );
}

export default App;
