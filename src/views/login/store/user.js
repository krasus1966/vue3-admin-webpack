import { getUserInfo, loginNoEncode, logout } from '@/views/login/api/auth'
import md5 from 'md5'
import { getItem, removeAllItem, setItem } from '@/util/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/util/auth'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * 用户名密码登录
     * 仅密码md5加密
     * @param context
     * @param userInfo
     * @returns {Promise<unknown>}
     */
    loginTest(context, userInfo) {
      const { userName, password, captchaToken, code } = userInfo
      return new Promise((resolve, reject) => {
        loginNoEncode({
          userName,
          password: md5(password),
          captchaToken,
          code
        })
          .then((data) => {
            this.commit('user/setToken', data.token)
            // 跳转
            router.push('/')
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    login(context, userInfo) {
      const { userName, password, captchaToken, code } = userInfo
      return new Promise((resolve, reject) => {
        loginNoEncode({
          userName,
          password: md5(password),
          captchaToken,
          code
        })
          .then((data) => {
            this.commit('user/setToken', data.token)
            // 跳转
            router.push('/')
            // 保存登录时间
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    /**
     * 获取用户信息
     * @param context
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },

    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      logout()
      // TODO 清理权限
      router.push('/login')
    }
  }
}
