import { useState } from "react";
import "../styles/Education.css";

const Education = ({ data, setData }) => {
  //   const [school, setSchool] = useState("");
  //   const [degree, setDegree] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => setIsEditing(true);
  const handleSubmit = () => {
    setIsEditing(false);
    onSubmit({ school, degree });
  };

  return (
    <div className="education">
      <h2>Education</h2>

      {isEditing ? (
        <form action="">
          <label>School: </label>
          <input
            type="text"
            name="school"
            placeholder="Enter the name of the School"
            value={data.school}
            onChange={handleChange}
          />

          <label htmlFor="">Degree/Certification</label>
          <input
            type="text"
            name="degree"
            placeholder="Enter the degree or certification"
            value={data.degree}
            onChange={handleChange}
          />

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>
            <strong>School: </strong>
            {school}
          </p>
          <p>
            <strong>Degree/Certification</strong>
            {degree}
          </p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Education;
