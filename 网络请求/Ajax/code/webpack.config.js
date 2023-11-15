const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/public/index.html'),
  })],
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    open: true,
    hot: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://www.baidu.com',
    //     pathRewrite: { '^/api': '' },
    //   }
    // }
  },
}