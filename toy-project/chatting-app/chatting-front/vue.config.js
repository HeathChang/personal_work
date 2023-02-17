module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: ''
    }
  },
  // 저장했을때 lint 돌릴 것인지에 대한 옵션 값
  lintOnSave: false,
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
