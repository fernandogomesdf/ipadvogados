module.exports = {
  resolve: {
    fallback: {
      "url": require.resolve("url/")
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
  }
}
