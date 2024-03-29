'use strict';

let path = require('path');

console.log(path.join(__dirname, './src'));

module.exports = {
  entry: {
	  sign: './src/sign.js'
  },
  mode: "production",
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, './src')]
      }
    ],
  },
  externals: {
    "crypto-js": 'crypto-js'
  }
};
