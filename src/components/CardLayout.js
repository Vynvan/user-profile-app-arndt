import { cloneElement, useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

function CardLayout({ children, asArticle }) {
   if (children && !children.length) children = [children];
   const [visibleChildren, setVisibleChildren] = useState({});
   const setVisible = index => value => setVisibleChildren({ ...visibleChildren, [index]: value });

   useEffect(() => {
      if (children && children.length > 0) {
         for(let i = 0; i < children.length; i++) {
            if (visibleChildren[i] === undefined)
               setVisibleChildren({ ...visibleChildren, [i]: true });
         }
   }}, [children, visibleChildren]);

   return (
      <Container as="main" className='flex-grow-1'>
         {children.map((child, index) => (
            visibleChildren[index] !== false && <Card
               as={asArticle ? 'article' : 'section'}
               className="mb-5 justify-content-center text-start shadow"
               key={index}>
               {cloneElement(child, { setVisible: setVisible(index) })}
            </Card>
         ))}
      </Container>
   );
}

export default CardLayout;
