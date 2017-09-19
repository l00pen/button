const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js(x)?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['env', 'react', 'stage-2'] },
        }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Hej hej',
    template: 'index.ejs',
    inject: 'body',
  })],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
