// import variables from '@/styles/variables.scss'

const getters = {
  token: state => state.user.token,
  /**
   * true表示用户信息已存在
   * @param state
   * @returns {boolean}
   */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  userInfo: state => state.user.userInfo,
  // cssVar: state => {
  //   return variables
  // },
  sidebarOpened: state => state.app.sidebarOpened,
  // 国际化
  language: state => state.app.language,
  // 主题色
  mainColor: state => state.theme.mainColor
}
export default getters
