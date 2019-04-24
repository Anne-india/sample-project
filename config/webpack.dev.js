const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: ["./src/index.js"]
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist", // serve your static files from here
    hot: true,
    inline: true,
    watchContentBase: true, // initiate a page refresh if static content changes
    port: 3030, // port webpack-dev-server listens to, defaults to 8080
    overlay: {
      // Shows a full-screen overlay in the browser when there are compiler errors or warnings
      warnings: false, // defaults to false
      errors: false // defaults to false
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /.(jpg|jpeg|png|svg)$/,
        use: ["file-loader"]
      }
    ]
  }
};
