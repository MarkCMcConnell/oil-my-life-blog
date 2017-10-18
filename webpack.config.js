
// Resolves paths
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    App: './public/assets/scripts/App.js',
    Vendor: './public/assets/scripts/Vendor.js',
  },
  output: {
    path: path.resolve(__dirname, './public/dist/scripts'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        loader: 'style-loader'
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}
