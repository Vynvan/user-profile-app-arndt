import { UserContext } from '../components/UserProvider';
import React, { useContext, useState, useEffect } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import config from '../config';

function UserProfile({ setVisible }) {
   const { user } = useContext(UserContext);
   const [formData, setFormData] = useState({ name: '', bio: '' });
   const [message, setMessage] = useState('');
   const [messageType, setMessageType] = useState('danger');
   const formattedToday = new Date().toISOString().split('T')[0];

   useEffect(() => {
      const token = user ? user.token : null;
      const fetchProfile = async () => {
         try {
            const response = await fetch(config.apiUrl + '/profile', {
               method: 'GET',
               headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
               },
            });
            const { bio, birthdate, error, errorType, name, picture } = await response.json();
            if (response.ok) {
               setFormData({
                  name: name ?? '',
                  birthdate: birthdate ?? formattedToday,
                  bio: bio ?? '',
               });
            } else if (errorType === 'token') {
               setMessage('Redirect...')
            } else {
               setMessage(error ?? 'Fehler beim Laden des Profils.');
            }
         } catch (error) {
            console.log(error);
            setMessage('Fehler beim Abrufen des Profils.');
         }
      };
      
      if (user) fetchProfile();
   }, [user]);

   useEffect(() => {
      if (!user && typeof setVisible === 'function') setVisible(false);
   }, [setVisible, user]);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
   };

   const handleSaveProfile = async (e) => {
      const token = user ? user.token : null;
      e.preventDefault();
      try {
         const response = await fetch(config.apiUrl + '/profile', {
            method: 'POST',
            headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
         });
         const { error, errorType } = await response.json();
         if (!response.ok) {
            if (errorType === 'token') {
               setMessage('Redirect...')
            } else {
               setMessage(error ?? 'Fehler beim Laden des Profils.');
            }
         }
         else {
            setMessage('Daten erfolgreich gespeichert.');
            setMessageType('success');
         }
      } catch (error) {
         console.log(error);
         setMessage('Fehler beim Abrufen des Profils.');
      }
};

   return (
      <Container fluid className="component my-3 justify-content-center">
         <h3>Profil bearbeiten</h3>
         {message && <Alert className='text-center' variant={messageType}>{message}</Alert>}

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
               <Form.Label>Geburtstag:</Form.Label>
               <Form.Control
                  type='date'
                  name="birthdate"
                  value={formData.birthdate ?? formattedToday}
                  onChange={handleInputChange}
                  className="form-control"
               />
            </Form.Group>
            <Form.Group className="my-3">
               <Form.Label>Bio:</Form.Label>
               <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Bio eingeben"
                  rows="3"
               />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
               <Button type="submit">Profil speichern</Button>
            </Form.Group>
         </Form>
      </Container>
   );
}

export default UserProfile;
