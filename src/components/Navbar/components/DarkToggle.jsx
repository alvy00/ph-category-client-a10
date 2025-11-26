/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setDark(savedTheme === "dark");
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleDark = () => {
        const newTheme = dark ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setDark(!dark);
    };

    return (
        <button onClick={toggleDark} className="btn btn-outline btn-sm">
            {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
};

export default DarkModeToggle;
