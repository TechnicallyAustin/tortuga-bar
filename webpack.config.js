const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
  entry: "./src/javascript/index.js",
  output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "dist", "index.html")
        })
    ]
};