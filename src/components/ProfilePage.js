import React, { useState } from "react";
import '../style/ProfilePage.css';

function ProfilePage({ firstName = '', lastName = '', email = '', username = '', mobileNumber = '' }) {
  const [userInfo, setUserInfo] = useState({
    firstName,
    lastName,
    email,
    username,
    mobileNumber,
  });

  const handleInputChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <div className="profile-container" style={{backgroundColor:'black', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="profile-page">
        <hr className="divider" />
        <h1 style={{ fontFamily: 'Verdana, sans-serif', fontSize: '43px', color: 'white', textAlign: 'center' }}>Profile</h1>
        <hr className="divider" />

        <div className="image-text-container">
          <img src='https://via.placeholder.com/100' alt="img description" style={{borderRadius: '90px', width: '120px', height: '120px', marginLeft: '40px', marginTop:'-70px' }} className="img-below-header" />
          <div className="user-info-container" style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', color: 'black', marginLeft: '100px',padding:'20px' }}>
            <input
              type="text" style={{ width: "200px", height: "25px", borderRadius:'10px', textAlign: "center" }}
              name="firstName"
              value={userInfo.firstName}
              onChange={handleInputChange}
              placeholder="Enter your First Name" // Added placeholder attribute
            />
            <br />
            <br />
            <input
              type="text" style={{ width: "200px", height: "25px", borderRadius:'10px', textAlign: "center" }}
              name="lastName"
              value={userInfo.lastName}
              onChange={handleInputChange}
              placeholder="Enter your Last Name" // Added placeholder attribute
            />
            <br />
            <br />
            <input
              type="text" style={{ width: "200px", height: "25px", borderRadius:'10px', textAlign: "center" }}
              name="username"
              value={userInfo.username}
              onChange={handleInputChange}
              placeholder="Enter your Username" // Added placeholder attribute
            />
            <br />
            <br />
            <input
              type="email" style={{ width: "200px", height: "25px", borderRadius:'10px', textAlign: "center" }}
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              placeholder="Enter your Email" // Added placeholder attribute
            />
            <br />
            <br />
            <input
              type="text" style={{ width: "200px", height: "25px", borderRadius:'10px', textAlign: "center"}}
              name="mobileNumber"
              value={userInfo.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter your Mobile Number" // Added placeholder attribute
            />
            <br />
          </div>
        </div>
        <button className="log-out-button" style={{marginTop:'-60px',marginLeft:'39px'}}>
        <i class="fas fa-log-out-alt"></i>Log Out
        </button>
        <hr className="divider" />
      </div>
    </div>
  );
}

export default ProfilePage;



