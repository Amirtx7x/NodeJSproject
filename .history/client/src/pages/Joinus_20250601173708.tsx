function Signup() {
    return (
        <form>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Signup;
