module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        fjalla: ["Fjalla One"],
        body: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {},
    },
    plugins: [require("preline/plugin")],
  },
};
