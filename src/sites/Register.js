import LogoutToggleButton from '../components/LogoutToggleButton';
import { UserContext } from '../components/UserProvider';
import { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';

function Register() {
   const { user, setUser } = useContext(UserContext);
   const [message, setMessage] = useState('');

   const handleRegistration = async () => {
      const email = document.forms['register']['email'].value;
      const name = document.forms['register']['name'].value;
      const username = document.forms['register']['username'].value;
      const password = document.forms['register']['password'].value;
      const password2 = document.forms['register']['password2'].value;

      if (password !== password2) {
         setMessage('Passwort und Passwort-Bestätigung sind ungleich.');
         return;
      }

      try {
         const response = await fetch(`http://localhost:3002/users/register`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, name, email, password }),
         });

         const { message, userId, token } = await response.json();
         if (response.ok) {
            setMessage('Sie haben sich erfolgreich registriert.');
            setUser({ username, userId, token });
         } else {
            setMessage(message ?? 'Registrierung fehlgeschlagen!');
         }
      } catch (error) {
         console.error('Fehler bei der Registrierung:', error);
         setMessage('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
      }
   };

   return (
      <Container fluid className="component my-3 justify-content-center">
         <h3>{user ? 'Herzlich willkommen!' : 'Bitte alle Felder ausfüllen:'}</h3>
         <p>{message}</p>
         <Form name='register'>
            {!user && (
               <>
                  <Form.Group className="my-3">
                     <Form.Label>Benutzername:</Form.Label>
                     <Form.Control type="text" name="username" autoComplete='username' required />
                  </Form.Group>
                  <Form.Group className="my-3">
                     <Form.Label>Name:</Form.Label>
                     <Form.Control type="text" name="name" autoComplete='name' required />
                  </Form.Group>
                  <Form.Group className="my-3">
                     <Form.Label>Email:</Form.Label>
                     <Form.Control type="email" name="email" autoComplete='email' required />
                  </Form.Group>
                  <Form.Group className="my-3">
                     <Form.Label>Passwort:</Form.Label>
                     <Form.Control type="password" name="password" autoComplete='current-password' required />
                  </Form.Group>
                  <Form.Group className="my-3">
                     <Form.Label>Passwort bestätigen:</Form.Label>
                     <Form.Control type="password" name="password2" required />
                  </Form.Group>
               </>
            )}
            <Form.Group className="d-flex">
               <LogoutToggleButton loginText={'Registrieren'} onLogin={handleRegistration} setMessage={setMessage} />
            </Form.Group>
         </Form>
      </Container>
   );
}

export default Register;
