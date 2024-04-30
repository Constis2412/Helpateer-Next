"use Client";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

// State to keep track of whether dark mode is enabled
const DarkLightMode = () => {
  const [loading, setLoading] = useState(true);
  // Initialize state with the value from local storage or default to "mnyk" (light mode)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("theme") || "cmyk";
    }
    return "cmyk";
  });

  useEffect(() => {
    // Check if window is available when component mounts
    if (typeof window !== "undefined") {
      themeChange(false); // Apply theme change on the client side
      const storedTheme = window.localStorage.getItem("thme");
      if (storedTheme) {
        document.documentElement.setAttribute("data-theme", theme);
      }
      setLoading(false);
    }
  }, [theme]); // Re-apply when theme changes

  if (loading) {
    return <div>Loading...</div>;
  }

  // Update theme state and local storage
  const handleThemeToggle = () => {
    const newTheme = theme === "cmyk" ? "night" : "cmyk";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", newTheme);
    }
  };
  return (
    <label className="cursor-pointer grid place-items-center">
      <input
        type="checkbox"
        value="synhwave"
        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
        onChange={handleThemeToggle}
        checked={theme === "night"}
      />
      <svg
        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <svg
        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
};

export default DarkLightMode;
