// import i18n from '@/plugins/i18n'

export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码必须填写'))
    } else {
      callback()
    }
  }
}
