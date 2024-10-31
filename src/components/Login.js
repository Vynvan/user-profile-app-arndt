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

   const handleSubmit = (e) => {
      e.preventDefault();
      const username = e.target.elements.username.value;
      const password = e.target.elements.password.value;
      setIsLoggedIn(true);
      setMessage('Sie haben sich erfolgreich eingeloggt.');
      console.log(username);
      console.log(password);
      e.target.reset();
   };

   const onToggle = () => {
      if (isLoggedIn) {
         setIsLoggedIn(false);
         setMessage('Sie wurden erfolgreich ausgeloggt.')
      }
      else {
         setIsLoggedIn(true);
         setMessage('Sie haben sich erfolgreich eingeloggt.');
      }
   };

   return (
      <Container fluid className="component my-3 justify-content-center">
         <h3>{isLoggedIn ? 'Herzlich willkommen!' : 'Bitte einloggen:'}</h3>
            <p>{message}</p>
            <Form onSubmit={handleSubmit}>
               {!isLoggedIn && 
                  <>
                     <Form.Group className='my-3'>
                        <Form.Label>Benutzername:</Form.Label>
                        <Form.Control type="text" name="username" required />
                     </Form.Group>
                     <Form.Group className='my-3'>
                        <Form.Label>Passwort:</Form.Label>
                        <Form.Control type="password" name="password" required />
                     </Form.Group>
                  </>
               }
               <Form.Group className='my-3'>
                  <LoginToggleButton isLoggedIn={isLoggedIn} onToggle={onToggle} />
               </Form.Group>
            </Form>
      </Container>
   );
}

export default Login;
