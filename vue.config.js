const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('svg')
    config.module.rule('svg-sprite-loader').test(/\.svg$/)
      .include.add(resolve('src/assets/icons')) // svg图标的路径 
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]' // 设置svg中symbol中id的值
      })
  }
}