import { useState } from "react";
import "../styles/Skills.css";

const Skills = ({ data, setData }) => {
  //   const [skills, setSkills] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => setIsEditing(true);
  const handleSubmit = () => {
    setIsEditing(false);
    onSubmit({ skills });
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      {isEditing ? (
        <form action="">
          <label htmlFor="">Languages/Technologies</label>
          <input
            type="text"
            name="skills"
            placeholder="Enter your skills"
            value={data.skills}
            onChange={handleChange}
          />

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Skills: </strong>
            {skills}
          </p>{" "}
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};
export default Skills;
