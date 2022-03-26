const path = require('path')

const nodeEnv = process.env.NODE_ENV || 'development'

const config = {
  mode: nodeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    static: { directory: path.join(__dirname, '.') },
    compress: true,
    historyApiFallback: true,
    port: 3005,
  },
}

module.exports = config
