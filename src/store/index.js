import { createStore } from 'vuex'
import user from '@/views/login/store/user'
import getters from '@/store/getters'
import app from '@/store/modules/app'
import theme from '@/store/modules/theme'

export default createStore({
  getters,
  modules: {
    user,
    app,
    theme
  }
})
