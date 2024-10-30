import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function ContactForm() {
    const [formData, setFormData] = useState({ name: '', message: '' });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({ name: '', message: '' });
    };

    return (
        <Container fluid className='component my-3 justify-content-center'>
            <h3>Kontaktformular</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='my-3'>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name eingeben" />
                </Form.Group>
                <Form.Group className='my-3'>
                    <Form.Label>Nachricht:</Form.Label>
                    <textarea name="message" value={formData.message} onChange={handleChange} 
                      className="form-control" placeholder="Nachricht eingeben" />
                </Form.Group>
                <Form.Group className='d-flex'>
                    <Button className='mx-auto' type="submit">Absenden</Button>
                </Form.Group>
            </Form>

            {submittedData && (
                <div className='mt-5'>
                    <h4>Eingereichte Daten</h4>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Nachricht:</strong> {submittedData.message}</p>
                </div>
            )}
        </Container>
    );
}

export default ContactForm;
