const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
  mode: 'development',
  entry: './src/javascript/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hacker News',
      template: './src/template.html'
    }),
    new Dotenv(),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader",],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '/img/[name].[ext]'
        }
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    open: true,
    port: 9000,
  },

};