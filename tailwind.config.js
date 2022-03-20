module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./utilities/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    scale: {
      '200': '2',
      '300': '3'
    },
    colors: {
      yellow: "#f0c22d",
      violet: "#991834",
      red: "#e6644d",
      blue: "#4132ce",
      green: "#37bba5",
      "gray-900": "#0A0A0A",
      "gray-800": "#1A1A1A",
      "gray-700": "#494747",
      "gray-600": "#666565",
      "gray-500": "#848383",
      white: "#FAFAFA",
      gray: "#494747",
      offWhite: "#f4f4f4",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Source Serif Pro", "serif"],
    },
    extend: {
      maxWidth: {
        "8xl": "1536px",
      },
    },
  },
  plugins: [],
};
