const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "url": require.resolve("url/"),
      "stream": require.resolve("stream-browserify"),
      "process/browser": require.resolve("process/browser"),
      "util": require.resolve("util/"),
      "buffer": require.resolve("buffer/")
    }
  },
  devServer: {
    hot: true,
    client: {
      overlay: true
    }
  },
  module: {
    parser: {
      javascript: {
        strictMode: true
      }
    },
    rules: [
      {
        test: /node_modules/,
        parser: {
          javascript: {
            strictMode: false
          }
        }
      }
    ]
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
      global: require.resolve('global')
    })
  ]
}
