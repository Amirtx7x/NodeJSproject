import React, { useState } from 'react';

const Joinus: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        organization: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('contactForm', JSON.stringify(formData));
        setSubmitted(true);
    };

    return (
        <div className="joinus-container">
            <h2>Contact Us Now</h2>
            <form onSubmit={handleSubmit} className="joinus-form">
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} />
                <button type="submit">Send Form</button>
                {submitted && <p className="success-message">Thank you! We'll be in touch.</p>}
            </form>
        </div>
    );
};

export default Joinus;
