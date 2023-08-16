const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // Your module rules here
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    compress: true,
    disableHostCheck: true,   // That solved it
    } 
};
