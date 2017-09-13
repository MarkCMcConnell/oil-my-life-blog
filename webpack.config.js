
// Resolves paths
var path = require('path');

module.exports = {
  entry: {
    App: './public/assets/scripts/App.js',
    Vendor: './public/assets/scripts/Vendor.js'
  },
  output: {
    path: path.resolve(__dirname, './public/temp/scripts'),
    filename: '[name].js'
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
      }
    ]
  }
}
