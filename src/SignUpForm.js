import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/images/logo.png';
import './SignUpForm.css';

function SignUpForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [duplicateNameUsername, setDuplicateNameUsername] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false); // State to toggle between sign-up and sign-in forms

  const containerStyles = {
    padding: '5px',
    border: '0px solid #ccc',
    backgroundColor: 'rgb(237, 237, 237)',
    borderRadius: '5px',
    display: 'inline-block',
    width: '200px',
    marginLeft: '200px'
  };

  const containerStyles2 = {
    padding: '5px',
    border: '0px solid #ccc',
    backgroundColor: 'rgb(237, 237, 237)',
    borderRadius: '5px',
    display: 'inline-block',
    width: '200px',
    marginLeft: '60px'
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setDuplicateNameUsername(false);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setDuplicateNameUsername(false);
    setUsernameTaken(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAgreeTermsChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (name.trim() === username.trim()) {
      setDuplicateNameUsername(true);
      return;
    }

    if (username === 'takenUsername') {
      setUsernameTaken(true);
    } else {
      console.log('Name:', name, 'Username:', username, 'Email:', email, 'Password:', password, 'AgreeTerms:', agreeTerms);
      navigate('/another-page');
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log('Sign in logic here');
    navigate('/another-page');
  };

  return (
    <>
      <div className="signup-container">
        <div className="background-image">
          <img src={logo} alt="Logo" />
          <h1>Discover the world's top<br />Designr and Creatives.</h1>
          <p></p>
        </div>
        <form onSubmit={showSignIn ? handleSignIn : handleSignUp} className="signup-form">
          {showSignIn ? (
            <>
              <h2 class="hd">Sign In</h2>
              <div className="form-group1">
                <label>Username</label>
                <input type="text" placeholder="Enter your username" required />
              </div>
              <div className="form-group2">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
              <div class="btn"><button type="submit">Sign in</button></div>
              <div class='pr1'><p>Don't have an account? <button type="button" onClick={() => setShowSignIn(false)}><span>Sign Up</span></button></p></div>
            </>
          ) : (
            <>
              <div class="pr"><p>Already have an account? <button type="button" onClick={() => setShowSignIn(true)}><span>Sign In</span></button></p></div>
              <div class='hd'><h2>Sign up for Dribble</h2></div>
              {duplicateNameUsername && <p className="error-message">* Name and Username cannot be the same.</p>}
              {usernameTaken && <p className="error-message">Username has already been taken.</p>}
              <div>
                <div className="form-group">
                  <label htmlFor="name" style={{ display: 'inline-block', width: '100px', textAlign: 'right', marginLeft: '152px' }}>Name</label>
                  <label htmlFor="username" style={{ display: 'inline-block', width: '100px', textAlign: 'right', marginRight: '10px' }}>Username</label>
                </div>

                <div className="form-group">
                  <input type="text" placeholder='Enter your name' value={name} onChange={handleNameChange} required style={containerStyles} />
                  <input type="text" placeholder='User name' value={username} onChange={handleUsernameChange} required style={containerStyles2} />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder='email id' value={email} onChange={handleEmailChange} required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder='6+ Characters' value={password} onChange={handlePasswordChange} required />
              </div>
              <div className="form-group">
                <label>
                <div class='clr'>
                  <input type="checkbox" checked={agreeTerms} onChange={handleAgreeTermsChange} required /> 
                    Creating an account means you are okay with <br/> our 
                    <span><Link to='#'> Terms of service</Link>, <Link to='#'>Privacy Policy</Link> </span>
                    and our<br/> default
                    <span><Link to='#'> Nottification setting</Link></span>
                  </div>
                </label>
              </div>
              <div class="btn"><button type="submit">Create account</button></div>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
