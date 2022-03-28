const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const nodeEnv = process.env.NODE_ENV || 'development'
const shouldAnalyze = process.argv.includes('--analyze')

const plugins = []

if (shouldAnalyze) plugins.push(new BundleAnalyzerPlugin())

/** @type {import('webpack').Configuration} */
const config = {
  mode: nodeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
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
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
          reuseExistingChunk: true,
          enforce: true,
          priority: 10,
        },
      },
    },
  },
}

module.exports = config
