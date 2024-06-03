import { useEffect, useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("");
    useEffect(() => {
        const cur = localStorage.getItem("theme") ?? "dark";
        setTheme(cur);

        document.documentElement.classList.remove(
            cur === "light" ? "dark" : "light"
        );
        document.documentElement.classList.add(cur);
    }, []);
    const toggleTheme = () => {
        if (theme == "dark") {
            localStorage.setItem("theme", "light");
            setTheme("light");

            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        } else {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        }
    };
    return [theme, toggleTheme] as const;
};
export default useTheme;
