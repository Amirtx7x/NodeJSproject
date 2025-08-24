import React, { useState } from 'react';

const Login: React.FC = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const stored = localStorage.getItem(form.username);
        if (stored === form.password) {
            setMessage(`Welcome back, ${form.username}!`);
        } else {
            setMessage('Invalid username or password');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
            {message && <p className="auth-message">{message}</p>}
        </div>
    );
};

export default Login;
