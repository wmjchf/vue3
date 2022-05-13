const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

/** @type {import('webpack').Configuration} */
const config = {
  entry: path.resolve("src/index.ts"),
  output: {
    filename: "js/[name].[contenthash:8].js",
    path: path.resolve("dist")
  },
  resolve: {
    extensions: [".ts", ".vue", "..."],
    alias: {
      "@": path.resolve("src")
    }
  },

  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader"
          }
        ]
      },
      {
        test: /\.less/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack构建项目",
      template: path.resolve("public/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "css/[contenthash].[name].css"
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
};

module.exports = config;
