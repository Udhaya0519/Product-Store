export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Adjust to your file structure
    ],
    theme: {
      extend: {
        screens: {
          'min-450': '450px', // Custom min-width breakpoint
        },
      },
    },
    plugins: [],
  };
  