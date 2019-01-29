const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundlefile.js'
  },
  module: {
    rules: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader'
         }
      },
      {
        test: /\.scss$/,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      },
      {
        exclude: [/\.(js|jsx|mjs)$/,/\.html$/,/\.json$/, /\.scss$/],
        loader: require.resolve('file-loader'),
        options: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: './src/index.html'
    })
  ]
}


