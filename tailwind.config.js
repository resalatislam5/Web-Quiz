/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      mytheme: {
      
        "primary": "#db7c29",
              
        "secondary": "#ddfc94",
              
        "accent": "#e864fc",
              
        "neutral": "#1A1825",
              
        "base-100": "#FFFFFF",
              
        "info": "#5187EC",
              
        "success": "#0F8554",
              
        "warning": "#FBC260",
              
        "error": "#E0242E",
      },
    },
  ],
  plugins: [require("daisyui")],
}
