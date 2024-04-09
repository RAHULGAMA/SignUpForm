
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from './assets/images/logo.png'; // Import your logo image
import './ProfilePage.css';
import NextPage from './HomePage';

function AnotherPage() {
  const history = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState('');



  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
    <img src={logo} alt="Logo" />
    <div className="container">
    <h1>Welcome! Let's create your profile</h1>
    <p>Let others get to know you better! You can do these later </p>
      <div className="element">
        <label className="label" htmlFor="avatar">Add an avatar</label>
        <div className="avatar-input">
          {avatar ? (
            <div className="avatar-preview">
              <img src={avatar} alt="Avatar" />
            </div>
          ) : (
            <div className="avatar-placeholder"></div>
          )}
          <input type="file" id="avatar" accept="image/*" onChange={handleAvatarChange} />
        </div>
      </div>
      <div className="element">
        <label className="label" htmlFor="location">Add your location</label>
        <input className="input" type="text" id="location" placeholder='Enter your location' required value={location} onChange={handleLocationChange}/>
      </div>
      <div className="element">
        <Link to="/final-page">
          <button className="button">Next</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default AnotherPage;
