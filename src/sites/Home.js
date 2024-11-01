import { UserContext } from '../components/UserProvider';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';

function Home({ title }) {
   const { user } = useContext(UserContext);

   return (
      <Container className='component'>
         <h1>Willkommen auf {title || 'dieser Profilseite' }</h1>
         {user && <p>Sie sind eingeloggt.</p>}
      </Container>
   );
}

export default Home
