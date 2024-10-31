import { Card, Container } from 'react-bootstrap';

function CardLayout({ Component }) {
   return (
      <Container as="main">
         <Card className="justify-content-center text-start shadow">
            <Component />
         </Card>
      </Container>
   );
}

export default CardLayout;
