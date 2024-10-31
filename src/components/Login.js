import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function LoginToggleButton({ isLoggedIn, onToggle }) {
   return (
      <Button className="mx-auto" onClick={onToggle}>
         {isLoggedIn ? 'Abmelden' : 'Anmelden'}
      </Button>
   );
}

function Login() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [message, setMessage] = useState('');

   const handleLogin = async () => {
      const username = document.getElementsByName('username').value;
      const password = document.getElementsByName('password').value;

      try {
         const response = await fetch(`api/login`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
         });
         const data = await response.json();

         if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            setIsLoggedIn(true);
            setMessage('Sie haben sich erfolgreich eingeloggt.');
         } else {
            setMessage(data.message || 'Login fehlgeschlagen!');
         }
      } catch (error) {
         console.error('Fehler beim Login:', error);
         setMessage('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
      }
   };

   const handleLogout = async () => {
      fetch(`api/login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ userId: localStorage.getItem('userId') }),
      });

      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      setIsLoggedIn(false);
      setMessage('Sie haben sich erfolgreich eingeloggt.');
   }

   const onToggle = () => {
      if (isLoggedIn) {
         setIsLoggedIn(false);
         handleLogout();
      } else {
         setIsLoggedIn(true);
         handleLogin();
      }
   };

   return (
      <Container fluid className="component my-3 justify-content-center">
         <h3>{isLoggedIn ? 'Herzlich willkommen!' : 'Bitte einloggen:'}</h3>
         <p>{message}</p>
         <Form onSubmit={handleLogin}>
            {!isLoggedIn && (
               <>
                  <Form.Group className="my-3">
                     <Form.Label>Benutzername:</Form.Label>
                     <Form.Control type="text" name="username" required />
                  </Form.Group>
                  <Form.Group className="my-3">
                     <Form.Label>Passwort:</Form.Label>
                     <Form.Control type="password" name="password" required />
                  </Form.Group>
               </>
            )}
            <Form.Group className="d-flex">
               <LoginToggleButton isLoggedIn={isLoggedIn} onToggle={onToggle} />
            </Form.Group>
         </Form>
      </Container>
   );
}

export default Login;
