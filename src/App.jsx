import PersonalInfo from "./components/personalInfo";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <h1>CV builder</h1>
      <PersonalInfo />
      <Education />
      <WorkExperience />
      <Skills />
      <button type="button" className="submit-all">
        Submit All
      </button>
    </div>
  );
}
export default App;
