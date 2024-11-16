import { useState } from "react";
import "../styles/WorkExperience.css";

const WorkExperience = ({ data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  //   const [title, setTitle] = useState("");
  //   const [companyName, setCompanyName] = useState("");
  //   const [startDate, setStartDate] = useState("");
  //   const [endDate, setEndDate] = useState("");
  //   const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  const handleEdit = () => setIsEditing(true);
  const handleSubmit = () => {
    setIsEditing(false);
    onSubmit({ title, companyName, startDate, endDate, description });
  };

  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      {isEditing ? (
        <form action="">
          <label htmlFor="">Position Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter your position title"
            value={data.title}
            onChange={handleChange}
          />

          <label htmlFor="">Company Name: </label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter the company name"
            value={data.companyName}
            onChange={handleChange}
          />

          <label htmlFor="">Start Date: </label>
          <input
            type="date"
            name="startDate"
            value={data.startDate}
            onChange={handleChange}
          />

          <label htmlFor="">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={data.endDate}
            onChange={handleChange}
          />

          <label htmlFor="">Description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
          >
            Describe your role and responsibilities...
          </textarea>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Title: </strong> {title}
          </p>{" "}
          <p>
            <strong>Company Name: </strong>
            {companyName}
          </p>
          <p>
            <strong>Start Date: </strong>
            {startDate}
          </p>
          <p>
            <strong>End Date: </strong>
            {endDate}
          </p>
          <p>
            <strong>Description: </strong> {description}
          </p>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
