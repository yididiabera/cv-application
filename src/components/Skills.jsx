import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <form action="">
        <label htmlFor="">Languages/Technologies</label>
        <input type="text" name="language" placeholder="Enter your skills" />

        <button type="button">Edit</button>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};
export default Skills;
