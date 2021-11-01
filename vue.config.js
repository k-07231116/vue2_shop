module.exports = {
  //开发代理
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  lintOnSave: false, //是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  publicPath: "/app", //部署应用包时的基本 URL,打包后生成的index.html引入文件时会加上这个publicPath
  outputDir: 'dest', //输出构建文件的目录
  indexPath: 'index2.html', //指定生成的 index.html 的输出路径 (相对于 outputDir)
  filenameHashing: true, //生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  productionSourceMap: false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
