const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Firebase Test'
    }
  },
  transpileDependencies: true,
  devServer: {
    port: 9032,
    proxy: {}
  }
})
