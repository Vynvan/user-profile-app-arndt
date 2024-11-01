import { Card, Container } from 'react-bootstrap';

function CardLayout({ Component, Components, asArticle }) {
   if (Component) Components = [Component];
   return (
      <Container as="main">
         {(Components || []).map((Comp, index) => (
            <Card
               as={asArticle ? 'article' : 'section'}
               className="mb-5 justify-content-center text-start shadow"
               key={index}>
               <Comp />
            </Card>
         ))}
      </Container>
   );
}

export default CardLayout;
