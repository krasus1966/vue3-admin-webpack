import KsComponent from 'ks-vue3-component'
import 'ks-vue3-component/style.css'

// 导入svg图片
const svgRequire = require.context('@/icons/svg', false, /\.svg$/)
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app) => {
  app.use(KsComponent, {})
}
