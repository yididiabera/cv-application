import { useState } from "react";
import "../styles/Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => setIsEditing(true);
  const handleSubmit = () => setIsEditing(false);

  return (
    <div className="skills">
      <h2>Skills</h2>
      {isEditing ? (
        <form action="">
          <label htmlFor="">Languages/Technologies</label>
          <input
            type="text"
            name="language"
            placeholder="Enter your skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
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
