//const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/javascript/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        // ES6 Loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // CSS Loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // Bootstrap CSS
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")({
                  overrideBrowserslist: ["last 2 versions", "ie >= 9"],
                }),
              ],
            },
          },
          "sass-loader",
        ],
        include: /node_modules/,
      },

      // Bootstrap JavaScript
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: "imports-loader?jQuery=jquery",
      },
    ],
  }

  //plugins: [
  //  new HtmlWebpackPlugin({
  //    template: path.resolve(__dirname, "dist", "index.html"),
  //  }),
  //],
};
