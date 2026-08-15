import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#11201D", paper: "#F8F6F1", accent: "#3478F6", muted: "#65716D", line: "#DDE2DE" } } }, plugins: [] } satisfies Config;
