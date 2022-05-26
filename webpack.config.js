const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const config = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          use: ["babel-loader"]
        },
        {
          test: /.s?css$/,
          use: [
            isProduction 
              ? MiniCssExtractPlugin.loader
              : "style-loader",
            "css-loader"
          ]
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
    ],
    devServer: {
      port: 9000,
      hot: true,
    }
  };

  if (isProduction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    )
  }

  return config;
};