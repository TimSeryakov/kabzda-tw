const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    // Filenames to scan for classes
    content: [
      './src/**/*.html',
      './src/**/*.css',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/index.html',
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // whitelist: [],
    },
  },
  theme: {
    boxShadow: {
      outline: '0 0 0 3px rgba(189, 147, 249, 0.5)',
    },
    extend: {
      colors: {
        "theme-bg-primary": "#20252c", // bg main
      },
    },
    fontFamily: {
      sans: ["Play", ...defaultTheme.fontFamily.sans],
      "ubuntu": ["Ubuntu", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  corePlugins: {
    container: false,
    boxShadow: true
  },
  plugins: [
    /*  require("tailwindcss-pixel-dimensions")({
        width: {
          total: 500, // 900 is the default
        },
        height: {
          total: 900, // 900 is the default
        },
      }),*/
    function ({addComponents}) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen md": {
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen lg": {
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen xl": {
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      });
    },
  ],
};
