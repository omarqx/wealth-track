export default function LoginPage() {
    return (
        <section>
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </section>
    );
}
