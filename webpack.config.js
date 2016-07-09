var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./app/main.js",
  output: {
    filename: "public/bundle.js"
  },
  resolve: {
		extensions: ["", ".js", ".css", ".styl"]
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")}      
    ]
  },
  plugins: [
    new ExtractTextPlugin("public/main.css", {allChunks: true})
  ]  
}