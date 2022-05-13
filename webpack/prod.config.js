const path = require("path")
const { merge } = require("webpack-merge")
const common = require("./common.config.js")

const config = merge(common, {
  mode: "production",
  devtool: false,
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: {
          name: `vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: "js/common/[name].[contenthash].js",
        },
      },
    },
  },
})

module.exports = config
