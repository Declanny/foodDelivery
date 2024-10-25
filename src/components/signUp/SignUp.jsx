// src/components/signUp/SignUp.js


const SignUp = () => (
  <div className="auth">
    <h2>Sign Up</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  </div>
);

export default SignUp;
