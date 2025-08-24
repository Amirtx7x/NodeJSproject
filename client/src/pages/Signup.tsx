import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface SignupProps {
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Signup: React.FC<SignupProps> = ({ setIsLoggedIn }) => {
    const [form, setForm] = useState({
        username: '',
        password: '',
        email: '',
        agree: false
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        // Store credentials
        localStorage.setItem(form.username, JSON.stringify({
            password: form.password,
            email: form.email
        }));

        // Save logged-in user
        localStorage.setItem('loggedInUser', form.username);

        // Update state & redirect
        setIsLoggedIn(true);
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
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
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
                <div className="checkbox-container">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="agree">I agree to the terms and conditions</label>
                </div>

                <button type="submit" disabled={!form.agree}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
