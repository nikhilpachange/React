const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
    clean: true, // Cleans the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Supports .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules from processing
        use: {
          loader: 'babel-loader', // Transpile modern JavaScript/React
        },
      },
      {
        test: /\.css$/, // Handles CSS files
        use: ['style-loader', 'css-loader'], // Injects styles and processes CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these file extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the dist directory
    },
    port: 3000, // Port for the development server
    open: true, // Automatically opens the browser
    hot: true, // Enables Hot Module Replacement
  },
  mode: 'development', // Set mode to development
};
