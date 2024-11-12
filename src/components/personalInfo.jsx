import { useState } from "react";
import "../styles/PersonalInfo.css";

const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);

  const [isEditing, setIsEditing] = useState(true);

  //   const handleNameChange = (e) => setName(e.target.value);
  //   const handleEmailChange = (e) => setEmail(e.target.value);
  //   const handleAddressChange = (e) => setAddress(e.target.value);
  //   const handlePhoneChange = (e) => setPhone(e.target.value);
  //   const handlePhotoChange = (e) => setPhoto(e.target.value);

  const handleSubmit = () => setIsEditing(false);
  const handleEdit = () => setIsEditing(true);

  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      {isEditing ? (
        <form action="">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="">Email: </label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="">Address: </label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => e.target.value}
          />

          <label>Photo:</label>
          <input
            type="file"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name: </strong> {name}
          </p>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Phone Number: </strong>
            {phone}
          </p>
          <p>
            <strong>Photo: </strong>
            {photo ? photo.name : `No photo uploaded`}
          </p>

          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
