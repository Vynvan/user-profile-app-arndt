import config from '../config';
import LogoutToggleButton from '../components/LogoutToggleButton';
import { UserContext } from '../components/UserProvider';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Container, Form } from 'react-bootstrap';

function Login() {
   const { user, setUser } = useContext(UserContext);
   const [message, setMessage] = useState('');
   const [messageType, setMessageType] = useState('danger');
   const navigate = useNavigate();

   const handleLogin = async () => {
      const username = document.forms['login']['username'].value;
      const password = document.forms['login']['password'].value;

      try {
         const response = await fetch(`${config.apiUrl}/users`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({ username, password }),
         });

         const { message, userId, token } = await response.json();
         if (response.ok) {
            setUser({ username, userId, token });
            setMessage('Sie haben sich erfolgreich eingeloggt. Sie werden gleich weitergeleitet...');
            setMessageType('success');
            setTimeout(() => navigate('/'), 2000);
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
         {message && <Alert className='text-center' variant={messageType}>{message}</Alert>}
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
               <LogoutToggleButton onLogin={handleLogin} setMessage={setMessage} setMessageType={setMessageType} />
               {!user && <Button onClick={() => navigate('/register')}>Registrieren</Button>}
            </Form.Group>
         </Form>
      </Container>
   );
}

export default Login;
