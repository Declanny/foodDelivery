import './Login.css';
import Button from "../../shared/button/Button";

const Login = () => {
  const handleGoogleLogin = () => {
    // Implement Google Sign-In logic here
    alert("Login with Google clicked");
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <div className="top-first-underline"></div>
        <div className="top-second-underline"></div>
        <div className="top-third-underline"></div>

        <img src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.png" alt="Welcome" />

        <div className="bottom-third-underline"></div>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email or Phone Number" className="input-line" />
          <input type="password" placeholder="Password" className="input-line" />
          <Button text="Login" width="100%" color="#2a6e5a" onClick={() => alert("Login clicked")} />
          <Button text="Login with Google" className="google-login" onClick={handleGoogleLogin} />
        </form>
      </div>
    </div>
  );
};

export default Login;
