import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        // Add the nav folder explicitly if needed
        "./src/components/nav/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                "geist-sans": ["Geist Sans", "sans-serif"],
                "geist-mono": ["Geist Mono", "monospace"],
            },
        },
    },
    plugins: [],
}
export default config;
