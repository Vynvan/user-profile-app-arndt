import LogoutToggleButton from '../components/LogoutToggleButton';
import { UserContext } from '../components/UserProvider';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';

function Login() {
   const { user, setUser } = useContext(UserContext);
   const [message, setMessage] = useState('');
   const navigate = useNavigate();

   const handleLogin = async () => {
      const username = document.forms['login']['username'].value;
      const password = document.forms['login']['password'].value;

      try {
         const response = await fetch(`http://localhost:3002/users`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
         });

         const { message, userId, token } = await response.json();
         if (response.ok) {
            setMessage('Sie haben sich erfolgreich eingeloggt.');
            setUser({ username, userId, token });
         } else {
            setMessage(message ?? 'Login fehlgeschlagen!');
         }
      } catch (error) {
         console.error('Fehler beim Login:', error);
         setMessage('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
      }
   };

   return (
      <Container fluid className="component my-3 justify-content-center">
         <h3>{user ? 'Herzlich willkommen!' : 'Bitte einloggen:'}</h3>
         <p>{message}</p>
         <Form name='login' onSubmit={handleLogin}>
            {!user && (
               <>
                  <Form.Group className="my-3">
                     <Form.Label>Benutzername:</Form.Label>
                     <Form.Control type="text" name="username" autoComplete='username' required />
                  </Form.Group>
                  <Form.Group className="my-3">
                     <Form.Label>Passwort:</Form.Label>
                     <Form.Control type="password" name="password" autoComplete='current-password' required />
                  </Form.Group>
               </>
            )}
            <Form.Group className="d-flex justify-content-around">
               <LogoutToggleButton onLogin={handleLogin} setMessage={setMessage} />
               {!user && <Button onClick={() => navigate('/register')}>Registrieren</Button>}
            </Form.Group>
         </Form>
      </Container>
   );
}

export default Login;
