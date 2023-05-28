import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Init from '@/plugins/init'
// element-plus
import ElementPlus from '@/plugins/element'
// icons
import Icons from '@/plugins/icons'
// 自己的组件
import KsComponent from '@/plugins/kscomponent'
import * as Icons2 from '@element-plus/icons-vue'
import { toLine } from '@/util/validate'
const app = createApp(App)
for (const i in Icons2) {
  // 注册全部组件
  app.component(`el-icon-${toLine(i)}`, Icons2[i])
}
Init(app)
ElementPlus(app)
Icons(app)
app.use(KsComponent).use(store).use(router).mount('#app')
