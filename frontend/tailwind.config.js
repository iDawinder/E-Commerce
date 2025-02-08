module.exports = {
  prefix: 'tw-', // Adds 'tw-' prefix to all Tailwind classes
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Includes all files in src
  theme: {
    extend: {}, // Extend default Tailwind styles
  },
  plugins: [require('tailwind-scrollbar')], // Scrollbar plugin
};


