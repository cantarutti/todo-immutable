const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname,'build'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          }
        }
      ]
    }
  };