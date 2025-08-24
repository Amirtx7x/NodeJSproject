import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const storedPassword = localStorage.getItem(form.username);
        if (storedPassword === form.password) {
            localStorage.setItem('loggedInUser', form.username); // Save current user
            setIsLoggedIn(true);
            setMessage(`Welcome back, ${form.username}!`);
            navigate('/');
        } else {
            setIsLoggedIn(false);
            setMessage('Invalid username or password');
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {message && <p className="auth-message">{message}</p>}
        </div>
    );
};

export default Login;
