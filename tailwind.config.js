module.exports = {
  content: [
    './Product/**/*.html', // Include all HTML files in the Product directory and subdirectories
    './Product/**/*.js',   // Include all JS files in the Product directory and subdirectories (optional)
    './Product/**/*.jsx',  // Include JSX files if you use React
    './Product/**/*.ts',   // Include TypeScript files if applicable
    './Product/**/*.tsx'   // Include TSX files for React with TypeScript
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
