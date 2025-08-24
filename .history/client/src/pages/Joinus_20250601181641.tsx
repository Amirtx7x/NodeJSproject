import { useState } from 'react';
function Signup() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        organization: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted form:', form);
        alert('Thanks! We will contact you soon.');
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Contact Us Now</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input id="firstName" value={form.firstName} onChange={handleChange} required />

                <label htmlFor="lastName">Last Name:</label>
                <input id="lastName" value={form.lastName} onChange={handleChange} required />

                <label htmlFor="phone">Phone:</label>
                <input id="phone" type="tel" value={form.phone} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input id="email" type="email" value={form.email} onChange={handleChange} required />

                <label htmlFor="organization">Organization:</label>
                <input id="organization" value={form.organization} onChange={handleChange} />

                <button type="submit">Send Form</button>
            </form>
        </div>
    );
}

export default Signup;
