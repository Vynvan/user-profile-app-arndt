import { Container } from 'react-bootstrap';

function Home({ title }) {
    return (
        <Container className='component'>
            <h1>Willkommen auf {title || 'dieser Profilseite' }</h1>
        </Container>
    );
}

export default Home