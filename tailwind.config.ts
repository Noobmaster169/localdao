import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        p1: "#2EF2FF",
        p2: "#3C52D9",
        p3: "#C8EA80",
        p4: "#EAEDFF",
        p5: "#C4CBF5",
        p6: "#41d6db",
        p7: "#0f898d",
        darkBlue: "#004263",
        borderBlue: "#00bfef",
        s1: "#080D27",
      },
      fontFamily: {
        "geist-sans": "var(--font-geist-sans)",
        "geist-mono": "var(--font-geist-mono)",
        orbitron: "var(--font-orbitron)",
      },
    },
  },
  plugins: [],
};
export default config;
