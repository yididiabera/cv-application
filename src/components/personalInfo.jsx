import { useState } from "react";
import "../styles/PersonalInfo.css";

const PersonalInfo = ({ data, setData }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    onSubmit({ name, email, address, phone, photo });
  };

  const handleEdit = () => setIsEditing(true);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  };
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [photo, setPhoto] = useState(null);

  //   const handleNameChange = (e) => setName(e.target.value);
  //   const handleEmailChange = (e) => setEmail(e.target.value);
  //   const handleAddressChange = (e) => setAddress(e.target.value);
  //   const handlePhoneChange = (e) => setPhone(e.target.value);
  //   const handlePhotoChange = (e) => setPhoto(e.target.value);

  return (
    <div className="personal-info">
      <h2>Personal Information</h2>
      {isEditing ? (
        <div className="form-container">
          <div className="details-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={data.name}
                onChange={handleChange}
              />

              <label htmlFor="">Email: </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleChange}
              />

              <label htmlFor="">Address: </label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={data.address}
                onChange={handleChange}
              />

              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={data.phone}
                onChange={handleChange}
              />
              <label htmlFor="photo">Photo: </label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
              />

              <button type="button" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
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
            {data.photo ? (
              <img src="data.photo" alt="preview" className="photo-preview" />
            ) : (
              <div className="photo-placeholder"> No Photo</div>
            )}
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
