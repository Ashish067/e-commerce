import { useEffect, useState } from "react";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex items-center gap-1">
      <button onClick={handleSwitchTheme} className="pt-1">
        {theme === "dark" ? (
          <FaToggleOn size={30} />
        ) : (
          <FaToggleOff size={30} />
        )}
      </button>
      <h3 className="">Dark Mode</h3>
    </div>
  );
};

export default ThemeSwitch;
