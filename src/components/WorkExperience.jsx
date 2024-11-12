import { useState } from "react";
import "../styles/WorkExperience.css";

const WorkExperience = () => {
  const [title, setTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => setIsEditing(true);
  const handleSubmit = () => setIsEditing(false);

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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="">Company Name: </label>
          <input
            type="text"
            name="companyName"
            placeholder="Enter the company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <label htmlFor="">Start Date: </label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label htmlFor="">End Date:</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <label htmlFor="">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
