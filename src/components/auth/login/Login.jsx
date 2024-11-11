import './Login.css';
import Button from "../../shared/button/Button";
import { auth, provider, signInWithPopup } from '../../../firebaseConfig'; // Import Firebase auth, provider, and signInWithPopup
import { useNavigate } from 'react-router-dom'; // For navigation on successful login

const Login = () => {
  const navigate = useNavigate(); // Hook for page redirection

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider); // Log in with Google
      navigate('/'); // Redirect to home page on successful login
    } catch (error) {
      console.error("Google login error:", error);
      alert("There was an issue logging in with Google. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <div className="top-first-underline"></div>
        <div className="top-second-underline"></div>
        <div className="top-third-underline"></div>
        <img
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/c_scale,w_400/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.webp"
          alt="Welcome"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
          srcSet="
            https://res.cloudinary.com/dqbbm0guw/image/upload/c_scale,w_200/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.webp 200w,
            https://res.cloudinary.com/dqbbm0guw/image/upload/c_scale,w_400/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.webp 400w,
            https://res.cloudinary.com/dqbbm0guw/image/upload/c_scale,w_600/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.webp 600w"
        />
        <div className="bottom-third-underline"></div>
      </div>

      <div className="login-form">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email or Phone Number" className="input-line" />
          <input type="password" placeholder="Password" className="input-line" />
          <div className="login-button">
            <Button text="Login" width="100%" color="#2a6e5a" onClick={() => alert("Login clicked")} />
          </div>

          <Button
            text="Login with Google"
            color="#7bdb95"
            icon={
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-google-icon-download-in-svg-png-gif-file-formats--logo-social-media-1507807.png?f=webp&w=128"
                alt="Google logo"
                style={{ width: '20px', height: 'auto', marginRight: '8px' }} // Added margin for spacing
              />
            }
            onClick={handleGoogleLogin}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
