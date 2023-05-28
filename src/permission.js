import router from '@/router'
import store from '@/store'

const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在，不存在获取用户信息
      if (!store.getters.hasUserInfo) {
        store.dispatch('user/getUserInfo')
      }
    }
  } else {
    if (whiteList.indexOf(to.path) <= -1) {
      next('/login')
    }
  }
  if (to.matched.length === 0) {
    // 未匹配到的时候跳转到404页面
    next({ name: 'notFoundPage' })
  } else {
    // 匹配到的时候跳转相应的路由
    next()
  }
})
