module.exports = {
  mode: 'production',
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: __dirname + '/../build/js',
    filename: "bundle.js"
  },
    devServer: {
    contentBase: __dirname + '/../build/',
    port: 8080,
    publicPath: '/js/'
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      enforce: "pre",
      exclude: /node_modules/,
      loader: "eslint-loader"
    }, {
      test: /\.css$/,
      loader: ["style-loader","css-loader"]
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
      }]
  },
  performance: {
    maxAssetSize:1000000,
    maxEntrypointSize: 1000000
  },
 
};