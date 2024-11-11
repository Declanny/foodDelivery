import './SignUp.css';
import Button from '../../shared/button/Button';
import { IoEyeSharp } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { auth, provider, signInWithPopup } from '../../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isRider, setIsRider] = useState(false);

  const checkPasswordStrength = (password) => {
    let strength = 0;
    const criteria = [
      /[a-z]/.test(password),
      /[A-Z]/.test(password),
      /\d/.test(password),
      password.length >= 8,
    ];

    strength = criteria.filter(Boolean).length;
    setPasswordStrength(strength);
    setIsPasswordValid(strength === 4);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed up:", user);
      alert(`Welcome, ${user.displayName}`);
      navigate('/');
    } catch (error) {
      console.error("Google sign-in error:", error);
      alert("Google sign-in failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <div className="top-first-underline"></div>
        <div className="top-second-underline"></div>
        <div className="top-third-underline"></div>
        <img
          src="https://res.cloudinary.com/dqbbm0guw/image/upload/c_scale,w_400/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.webp"
          alt="Welcome"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 79vw"
          srcSet="
            https://res.cloudinary.com/dqbbm0guw/image/upload/c_scale,w_200/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.webp 200w,
            https://res.cloudinary.com/dqbbm0guw/image/upload/c_scale,w_400/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.webp 400w,
            https://res.cloudinary.com/dqbbm0guw/image/upload/c_scale,w_600/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.webp 600w"
        />
        <div className="bottom-third-underline"></div>
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" className="input-line" required />
          <input
            type="email"
            placeholder="Email"
            className={`input-line ${isEmailValid ? 'valid' : 'invalid'}`}
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!isEmailValid && email && (
            <p style={{ color: 'red' }}>Please enter a valid email address.</p>
          )}
          <input type="text" placeholder="Phone Number" className="input-line" required />
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="input-line"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <IoEyeSharp />}
            </span>
          </div>
          <div className="password-input">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              className="input-line"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaRegEyeSlash /> : <IoEyeSharp />}
            </span>
          </div>

          <div className="password-requirements">
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(passwordStrength / 4) * 100}%`,
                  backgroundColor: isPasswordValid ? 'green' : 'red',
                }}
              ></div>
            </div>
            <div className="requirements">
              <p style={{ color: isPasswordValid ? 'green' : 'red' }}>
                {isPasswordValid
                  ? 'Password meets requirements!'
                  : 'Password must contain uppercase, lowercase, number, and be at least 8 characters long.'}
              </p>
            </div>
          </div>

          <Button
            text="Sign Up with Google"
            color="#7bdb95"
            icon={
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-google-icon-download-in-svg-png-gif-file-formats--logo-social-media-1507807.png?f=webp&w=128"
                alt="Google logo"
                style={{ width: '20px', height: 'auto' }}
              />
            }
            onClick={handleGoogleSignUp}
          />
        </form>
        <div className="signup-buttons">
          <Button
            text="Sign Up as Customer"
            className="signup-customer"
            onClick={() => navigate('')}
          />
          <Button
            text="Sign Up as Rider"
            className="signup-rider"
            onClick={() => setIsRider(true)}
          />
        </div>
        {isRider && (
          <div className="rider-info">
            <h3>Rider Information</h3>
            <input type="text" placeholder="License Number" className="input-line" required />
            <input type="text" placeholder="Vehicle Model" className="input-line" required />
            <input type="text" placeholder="Address" className="input-line" required />
            <input type="text" placeholder="Phone Number" className="input-line" required />
            <input type="text" placeholder="Identification Number" className="input-line" required />
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
