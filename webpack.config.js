const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const nodeEnv = process.env.NODE_ENV || 'development'
const shouldAnalyze = process.argv.includes('--analyze')

const plugins = []

if (shouldAnalyze) plugins.push(new BundleAnalyzerPlugin())

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
  plugins,
}

module.exports = config
