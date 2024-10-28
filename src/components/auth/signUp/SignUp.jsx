import './SignUp.css';
import Button from "../../shared/button/Button";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleGoogleSignUp = () => {
    alert("Sign Up with Google clicked");
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <div className="top-first-underline"></div>
        <div className="top-second-underline"></div>
        <div className="top-third-underline"></div>

        <img src="https://res.cloudinary.com/dqbbm0guw/image/upload/v1730106411/Screenshot_2024-10-28_at_10.06.01_AM_ztcbw5.png" alt="Welcome" />

        <div className="bottom-third-underline"></div>
      </div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Name" className="input-line" />
          <input type="email" placeholder="Email" className="input-line" />
          <input type="text" placeholder="Phone Number" className="input-line" />
          <div className="password-input">
            <input 
              type={showPassword ? 'text' : 'password'} 
              placeholder="Password" 
              className="input-line" 
              value={password} 
              onChange={handlePasswordChange} 
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaRegEyeSlash /> : <IoEyeSharp />} {/* Use icons */}
            </span>
          </div>
          <div className="password-input">
            <input 
              type={showConfirmPassword ? 'text' : 'password'} 
              placeholder="Confirm Password" 
              className="input-line" 
              value={confirmPassword} 
              onChange={handleConfirmPasswordChange} 
            />
            <span className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <FaRegEyeSlash /> : <IoEyeSharp />} {/* Use icons */}
            </span>
          </div>
          
          <div className="password-requirements">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${(passwordStrength / 4) * 100}%`, backgroundColor: isPasswordValid ? 'green' : 'red' }}></div>
            </div>
            <div className="requirements">
              <p style={{ color: isPasswordValid ? 'green' : 'red' }}>{isPasswordValid ? 'Password meets requirements!' : 'Password must contain uppercase, lowercase, number, and be at least 8 characters long.'}</p>
            </div>
          </div>

          <Button text="Sign Up with Google" className="google-signup" onClick={handleGoogleSignUp} />
        </form>
        <div className="signup-buttons">
          <Button text="Sign Up as Customer" className="signup-customer" onClick={() => alert("Customer Sign Up clicked")} />
          <Button text="Sign Up as Rider" className="signup-rider" onClick={() => alert("Rider Sign Up clicked")} />
        </div>

        <div className="rider-info">
          <h3>Rider Information</h3>
          <input type="text" placeholder="License Number" className="input-line" />
          <input type="text" placeholder="Vehicle Model" className="input-line" />
          <input type="text" placeholder="Address" className="input-line" />
          <input type="text" placeholder="Phone Number" className="input-line" />
          <input type="text" placeholder="Identification Number" className="input-line" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
