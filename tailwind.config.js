module.exports = {
  purge:{
content: [ "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",],
   
  },
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },

  theme: {
    fontFamily: { body: ["Red Hat Text"] },
    screens: {
      xsm: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    minWidth: {
      0: "0",
      150: "150px",
      200: "200px",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },

    extend: {
      colors: {
        darkBlue: "#343650",
        veryDarkBlue: "#1e1f29",
        VeryMostDarkBlue: "#191a24",
        primaryBlue: "#bacdf9",
        softRed: "#fb6087",
        gray: "#CFCFCF",
        body: "#f2f2f2",
      },
      fontSize: {
        "9xl": "9rem",
      },
      maxWidth: {
        10: "7rem",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "2days": "repeat(2, minmax(0, 120px))",
        "3days": "repeat(3, minmax(0, 120px))",
      },
      gridTemplateRows: {
        // Simple 8 row grid
        2: "repeat(2, minmax(0, 160px))",
      },
      gridAutoRows: {
        min: "minmax(0, 160px)",
      },
    },
  },
  variants: {},
  plugins: [],
};
