export default function SignupPage() {
    return (
        <section>
            <h1>Sign Up</h1>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </section>
    );
}
