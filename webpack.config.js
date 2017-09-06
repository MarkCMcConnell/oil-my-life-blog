
// Resolves paths
var path = require('path');

module.exports = {
  entry: {
    App: './app/public/assets/scripts/Main.js',
    Vendor: './app/public/assets/scripts/Vendor.js'
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js&/,
        excluse: /node_modules/
      }
    ]
  }
}
