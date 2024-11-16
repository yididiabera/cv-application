import PersonalInfo from "./components/personalInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import { useState } from "react";
import ThemeSelector from "./components/ThemeSelector";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [education, setEducation] = useState({
    school: "",
    degree: "",
  });
  const [workExperience, setWorkExperience] = useState({
    title: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [skills, setSkills] = useState({
    skills: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [theme, setTheme] = useState("default");

  const handleSubmitAll = () => setIsSubmitted(true);
  const handleThemeChange = (selectedGradient) => setTheme(selectedGradient);

  return (
    <div className={`app ${theme}`}>
      <h1>CV Application Builder</h1>
      <ThemeSelector onThemeChange={handleThemeChange} />

      <div className="layout">
        <div className="left-pane">
          {!isSubmitted ? (
            <>
              <PersonalInfo data={personalInfo} setData={setPersonalInfo} />
              <Education data={education} setData={setEducation} />
              <WorkExperience
                data={workExperience}
                setData={setWorkExperience}
              />
              <Skills data={skills} setData={setSkills} />
              <button
                type="button"
                className="submit-all"
                onClick={handleSubmitAll}
              >
                Submit All
              </button>
            </>
          ) : (
            <div className="submitted-cv">
              <h2>Submitted CV</h2>
              <div>
                <h3>Personal Information</h3>
                <p>
                  <strong>Name: </strong> {personalInfo?.name}
                </p>
                <p>
                  <strong>Email: </strong>
                  {personalInfo?.email}
                </p>
                <p>
                  <strong>Address: </strong> {personalInfo?.address}
                </p>
                <p>
                  <strong>Phone Number: </strong>
                  {personalInfo?.phone}
                </p>
                <p>
                  <strong>Photo: </strong>
                </p>
                {personalInfo?.photo}
              </div>

              <div>
                <h3>Education</h3>
                <p>
                  <strong>School: </strong> {education?.school}
                </p>
                <p>
                  <strong>Degree/Certification</strong> {education?.degree}
                </p>
              </div>

              <div>
                <h3>Work Experience</h3>
                <p>
                  <strong>Position Title: </strong> {workExperience?.title}
                </p>
                <p>
                  <strong>Company Name: </strong> {workExperience?.companyName}
                </p>
                <p>
                  <strong>Start Date: </strong>
                  {workExperience?.startDate}
                </p>
                <p>
                  <strong>End Date: </strong>
                  {workExperience?.endDate}
                </p>
                <p>
                  <strong>Description</strong> {workExperience?.description}
                </p>
              </div>

              <div>
                <h3>Skills</h3>
                <p>
                  <strong>Skills: </strong>
                  {skills?.skills}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="right-pane">
          <h2>CV Preview</h2>

          <h3>Personal Information</h3>
          <div className="cv-preview">
            <div className="details-container">
              <p>
                <strong>Name: </strong>
                {personalInfo?.name || "Your Name"}
              </p>
              <p>
                <strong>Email: </strong>
                {personalInfo?.email || "Your Email"}
              </p>
              <p>
                <strong>Address: </strong>
                {personalInfo?.address || "Your Address"}
              </p>
              <p>
                <strong>Phone Number: </strong>
                {personalInfo?.phone || "Your Phone Number"}
              </p>
            </div>
            <div className="photo-container">
              {personalInfo?.photo ? (
                <img
                  src={personalInfo.photo}
                  alt="Preview"
                  className="photo-preview"
                />
              ) : (
                <div className="photo-placeholder"> No Photo </div>
              )}
            </div>
          </div>

          <div>
            <h3>Education</h3>
            <p>
              <strong>School: </strong>
              {education?.school || "Your School"}
            </p>
            <p>
              <strong>Degree/Certification: </strong>
              {education?.degree || "Your Degree"}
            </p>
          </div>

          <div>
            <h3>Work Experience</h3>
            <p>
              <strong>Position Title: </strong>
              {workExperience?.title || "Your Job Title"}
            </p>
            <p>
              <strong>Company Name: </strong>
              {workExperience?.companyName || "Your Company"}
            </p>
            <p>
              <strong>Start Data: </strong>
              {workExperience?.startDate || "Start Date"}
            </p>
            <p>
              <strong>End Data: </strong>
              {workExperience?.endDate || "End Date"}
            </p>

            <p>
              {" "}
              <strong>Description: </strong>
              {WorkExperience?.description || "Description"}
            </p>
          </div>

          <div>
            <h3>Skills</h3>
            <p>
              <strong>Skills: </strong>
              {skills?.skills || "Your Skills"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
