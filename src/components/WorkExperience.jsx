import "../styles/WorkExperience.css";

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <h2>Work Experience</h2>
      <form action="">
        <label htmlFor="">Position Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Enter your position title"
        />

        <label htmlFor="">Company Name: </label>
        <input
          type="text"
          name="companyName"
          placeholder="Enter the company name"
        />

        <label htmlFor="">Start Date: </label>
        <input type="date" name="startDate" />

        <label htmlFor="">End Date:</label>
        <input type="date" name="endDate" />

        <label htmlFor="">Description</label>
        <textarea name="description">
          Describe your role and responsibilities...
        </textarea>

        <button type="button">Edit</button>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default WorkExperience;
