import { useState } from 'react';

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
        <div className='container-fluid w-auto my-3'>
            <h3>Kontaktformular</h3>
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} 
                        className="form-control" placeholder="Name eingeben" />
                </label>
                <br />

                <label className="form-label">
                    Nachricht:
                    <textarea name="message" value={formData.message} onChange={handleChange} 
                      className="form-control" placeholder="Nachricht eingeben" />
                </label>
                <br />

                <button type="submit">Absenden</button>
            </form>

            {/* Anzeige der eingereichten Daten */}
            {submittedData && (
                <div style={{ marginTop: '20px' }}>
                    <h4>Eingereichte Daten:</h4>
                    <p>
                        <strong>Name:</strong> {submittedData.name}
                    </p>
                    <p>
                        <strong>Nachricht:</strong> {submittedData.message}
                    </p>
                </div>
            )}
        </div>
    );
}

export default ContactForm;
