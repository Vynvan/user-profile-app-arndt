import { UserContext } from '../components/UserProvider';
import { useContext } from 'react';
import { Button, DropdownItem } from 'react-bootstrap';
import config from '../config';

function LogoutToggleButton({ asDropdownItem, loginText, onLogin, setMessage, setMessageType }) {
   const { user, setUser } = useContext(UserContext);

   if (!onLogin) onLogin = () => {};
   const handleLogout = async () => {
      fetch(`${config.apiUrl}/users/logout`, {
         headers: {  'Content-Type': 'application/json' },
         method: 'POST',
         body: JSON.stringify({ userId: user.userId }),
      });
   
      setUser(null);
      if (setMessage) setMessage('Sie haben sich ausgeloggt. Bis zum nächsten Mal!');
      if (setMessageType) setMessageType('success');
   }
   
   return (
      asDropdownItem ? (
         <DropdownItem onClick={handleLogout}>Abmelden</DropdownItem>
      ) : (
      <Button onClick={() => user ? handleLogout() : onLogin()}>
         {user ? 'Abmelden' : loginText ?? 'Anmelden'}
      </Button>
   ));
}

export default LogoutToggleButton;
