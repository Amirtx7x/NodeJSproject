import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignupProps {
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Signup: React.FC<SignupProps> = ({ setIsLoggedIn }) => {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        // Store password under username
        localStorage.setItem(form.username, form.password);

        // Store logged in user
        localStorage.setItem('loggedInUser', form.username);

        // Set logged-in state
        setIsLoggedIn(true);

        // Redirect
        navigate('/');
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
