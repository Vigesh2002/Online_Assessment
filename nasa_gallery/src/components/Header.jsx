import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/index.css";

const Header = () => {
  // Load saved dark mode preference from localStorage (default is dark mode)
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) ?? true
  );

  // Apply the stored theme on page load
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));

    if (newMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  };

  const title = "NASA Astronomy Gallery";

  return (
    <header className="header">
      <h1>{title}</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorite</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "Light Mode 🌞" : "Dark Mode 🌙"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
