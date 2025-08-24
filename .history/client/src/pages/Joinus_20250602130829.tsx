import React, { useState } from 'react';

const Joinus: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        organization: '',
        agree: false
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agree) {
            alert("You must agree to the terms and conditions.");
            return;
        }
        localStorage.setItem('contactForm', JSON.stringify(formData));
        setSubmitted(true);
    };

    return (
        <div className="joinus-container">
            <h2>Contact Us Now</h2>
            <form onSubmit={handleSubmit} className="joinus-form">
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <label className="field-label" htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10,15}"
                    title="Phone number should contain only digits"
                    required
                />
                <small className="hint">Please type your phone in the following format: 0521234567</small>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="organization" placeholder="Organization" value={formData.organization} onChange={handleChange} />

                <div className="checkbox-container">
                    <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                    <label htmlFor="agree">I agree to share my contact information</label>
                </div>

                <button type="submit">Send Form</button>

                {submitted && <p className="success-message">✅ Thank you! We'll be in touch.</p>}
            </form>
        </div>
    );
};

export default Joinus;
