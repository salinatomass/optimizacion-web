const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const nodeEnv = process.env.NODE_ENV || 'development'
const shouldAnalyze = process.argv.includes('--analyze')

const plugins = [
  new HTMLWebpackPlugin({
    template: './public/index.html',
    filename: './index.html',
  }),
  new CopyPlugin({
    patterns: [
      path.resolve(__dirname, 'public', 'styles.css'),
      path.resolve(__dirname, 'public', 'desktop.css'),
      path.resolve(__dirname, 'public', 'favicon.ico'),
      { from: path.join(__dirname, 'public/assets'), to: 'assets' },
    ],
  }),
]

if (shouldAnalyze) plugins.push(new BundleAnalyzerPlugin())

/** @type {import('webpack').Configuration} */
const config = {
  mode: nodeEnv,
  entry: './frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    compress: true,
    historyApiFallback: true,
    port: 3005,
  },
  plugins,
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}

module.exports = config
