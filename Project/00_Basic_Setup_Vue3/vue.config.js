module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: ''
    }
  },
  devServer: {
    host: '0.0.0.0',
    https: false,
    port: 9032,
    proxy: {
      '/api': {
        target: 'http://',
        changeOrigin: true
      },
    }
  }
}
