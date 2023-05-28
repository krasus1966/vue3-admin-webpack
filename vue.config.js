const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const port = 9527
const baseUrl = 'http://127.0.0.1:8001'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port,
    proxy: {
      // 触发机制
      '/api': {
        target: baseUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '/'
        }
      }
    }
  },
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
})

function resolve(dir) {
  return path.join(__dirname, dir)
}
