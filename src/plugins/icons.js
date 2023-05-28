// 1. 导入所有的svg图标
// 2. 完成SvgIcon的全局注册
import SvgIcon from '@/components/SvgIcon'
const svgRequire = require.context('@/icons/svg', false, /\.svg$/)

// 此时返回了一个 Require 的函数，可以接受一个request的参数，用于require的导入
// 该函数提供了三个属性，可以通过svgRequire.keys() 获得所有的svg图标
// 遍历图标，把图标作为request 参数参入到 svgRequire 导入函数中，完成本地svg图标的导入

svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
