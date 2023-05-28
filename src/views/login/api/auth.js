import request from '@/util/request'

/**
 * 登录
 */
export const login = (data) => {
  return request({
    baseURL: '/api',
    url: '/auth/login',
    method: 'POST',
    data
  })
}

/**
 * 登录
 */
export const loginNoEncode = (data) => {
  return request({
    baseURL: '/api',
    url: '/auth/loginNoEncode',
    method: 'POST',
    options: {
      useJson: true
    },
    data
  })
}
/**
 * 获取用户信息
 * @returns {AxiosPromise}
 */
export const getUserInfo = () => {
  return request({
    baseURL: '/api',
    url: '/auth/profile',
    method: 'GET'
  })
}

export const logout = () => {
  return request({
    baseURL: '/api',
    url: '/auth/logout',
    method: 'POST'
  })
}
