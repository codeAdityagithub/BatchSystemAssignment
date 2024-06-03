import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                "primary-foreground": "var(--primary-foreground)",
                accent: "var(--accent)",
                "foreground-muted": "var(--foreground-muted)",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
