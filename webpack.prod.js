const path = require('path')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
//const CleanWebPackPlugin = require('clean-webpack-plugin');
//filename: '[name][contenthash].js',
module.exports = {
    plugins: [
		new MiniCssExtractPlugin({
	    filename: "./css/[name].[hash].css",
	    chunkFilename: "[id].[chunkhash].css"
    },
    //new CleanWebPackPlugin()
    )
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin({}),
      //new CleanWebPackPlugin()
		]
	},
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    publicPath: path.resolve(__dirname, 'dist')+"/",
	chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env','react','stage-2']
          }
        }
      },

      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.json$/,
        // exclude: /(node_modules)/,
        use: {
          loader: 'json-loader',
        }
      },

      /*{
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        },
      }*/

    ]
  }
}