import { UserContext } from '../components/UserProvider';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';

function LogoutToggleButton({ loginText, onLogin, setMessage }) {
   const { user, setUser } = useContext(UserContext);

   const handleLogout = async () => {
      fetch(`http://localhost:3002/users/logout`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ userId: user.userId }),
      });
   
      setUser(null);
      setMessage('Sie haben sich ausgeloggt. Bis zum nächsten Mal!');
   }
   
   return (
      <Button onClick={() => user ? handleLogout() : onLogin()}>
         {user ? 'Abmelden' : loginText ?? 'Anmelden'}
      </Button>
   );
}

export default LogoutToggleButton;
