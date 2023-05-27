const { defineConfig } = require('@vue/cli-service')

const port = 9527
// const baseUrl = '127.0.0.1'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port
  }
})
