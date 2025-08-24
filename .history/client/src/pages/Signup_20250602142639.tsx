import React, { useState } from 'react';
import './Auth.css';

const SignUp: React.FC = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        if (localStorage.getItem(form.username)) {
            setMessage('User already exists');
        } else {
            localStorage.setItem(form.username, form.password);
            setMessage('Account created! You can now log in.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
            {message && <p className="auth-message">{message}</p>}
        </div>
    );
};

export default SignUp;
