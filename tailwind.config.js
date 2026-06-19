/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#0F172A",      // 다크 모드용 세련된 Slate
        light: "#F8FAFC",     // 라이트 모드용 화이트 Slate
        primary: "#10B981",   // 에메랄드 그린 (Digital Healthcare)
        primaryBlue: "#3B82F6", // 블루 (Mathematical Biology, Quantum)
        primaryDark: "#34D399", 
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
