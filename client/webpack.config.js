var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./app/index.js"],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    historyApiFallback: { disableDotRule: true }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpe?g|gif)$/i, use: [{ loader: "file-loader" }] }
    ]
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ]
};
