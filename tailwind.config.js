module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        ptsans: "'PT Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-focus"],
      opacity: ["group-focus"],
      inset: ["group-focus"],
    },
  },
  plugins: [],
};
