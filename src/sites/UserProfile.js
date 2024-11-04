import { UserContext } from '../components/UserProvider';
import React, { useContext, useState, useEffect } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import config from '../config';

function UserProfile() {
   const { user } = useContext(UserContext);
   const [formData, setFormData] = useState({ name: '', bio: '' });
   const [message, setMessage] = useState('');

   useEffect(() => {
      const token = user ? user.token : null;
      const fetchProfile = async () => {
         try {
            const response = await fetch(config.apiUrl + '/profile', {
               method: 'GET',
               headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json',
               },
            });
            const data = await response.json();
            if (response.ok) {
               setFormData({
                  name: data.name || '',
                  bio: data.bio || '',
               });
            } else {
               setMessage(data.error || 'Fehler beim Laden des Profils');
            }
         } catch (error) {
            console.log(error);
            setMessage('Fehler beim Abrufen des Profils');
         }
      };
      fetchProfile();
   }, [user]);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   const handleSaveProfile = async (e) => {
      e.preventDefault();
      console.log('handleSaveProfile');
   };

   return (
      <Container fluid className="component my-3 justify-content-center">
         <h3>Profil bearbeiten</h3>
         {message && <p>{message}</p>}

         <Form onSubmit={handleSaveProfile}>
            <Form.Group className="my-3">
               <Form.Label>Name:</Form.Label>
               <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name eingeben"
                  required
               />
            </Form.Group>
            <Form.Group className="my-3">
               <Form.Label>Bio:</Form.Label>
               <textarea
                  name="message"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Bio eingeben"
                  rows="3"
               />
            </Form.Group>
            <Form.Group className="d-flex">
               <Button className="mx-auto" type="submit">Profil speichern</Button>
            </Form.Group>
         </Form>
      </Container>
   );
}

export default UserProfile;
