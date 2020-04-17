const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const autoprefixer = require("autoprefixer")
const postcssPresetEnv = require("postcss-preset-env")

module.exports = {
  entry: "./src/index",

  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },

      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
              plugins: () => [
                postcssPresetEnv({
                  autoprefixer: { grid: true },
                  stage: 2,
                }),
                require("tailwindcss"),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer({ grid: true, browsers: [">1%"] })],
      },
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      Shell: path.resolve(__dirname, "src/components/shell/"),
      Container: path.resolve(
        __dirname,
        "src/components/containers/",
      ),
      Routes: path.resolve(__dirname, "src/components/routes/"),
      Views: path.resolve(__dirname, "src/components/views/"),
      Assets: path.resolve(__dirname, "src/assets/"),
    },
  },
}
