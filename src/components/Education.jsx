import "../styles/Education.css";
const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>

      <form action="">
        <label>School: </label>
        <input
          type="text"
          name="school"
          placeholder="Enter the name of the School"
        />

        <label htmlFor="">Degree/Certification</label>
        <input
          type="text"
          name="degree"
          placeholder="Enter the degree or certification"
        />

        <button type="button">Edit</button>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default Education;
