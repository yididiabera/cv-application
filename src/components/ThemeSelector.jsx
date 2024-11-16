import "../styles/ThemeSelector.css";

const ThemeSelector = ({ onThemeChange }) => {
  return (
    <div className="theme-selector">
      <h2>Select Theme</h2>
      <select onChange={(e) => onThemeChange(e.target.value)}>
        <option value="default">Default</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
