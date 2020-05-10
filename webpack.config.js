const path = require('path')
//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
   port: 2324
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
         use: [
           { loader: "style-loader" }, // Agrega el css al DOM en un <style>
           { loader: "css-loader" }, // interpreta los archivos css en js via import
        ]
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
        //exclude: /(node_modules)/,
        use: {
          loader: 'json-loader',
        }
      }
    ]
  }
}