import axios from 'axios'
import Qs from 'qs'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/util/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
  transformRequest: [
    function (data) {
      if (this.options && this.options.useJson) {
        return JSON.stringify(data)
      }
      data = Qs.stringify(data)
      return data
    }
  ],
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    try {
      if (store.getters.token) {
        if (isCheckTimeout()) {
          // 退出登录
          store.dispatch('user/logout')
          return Promise.reject(new Error('token已经失效'))
        }
        config.headers.kwt = `${store.getters.token}`
      }
      // 使用json格式，替换headers
      if (config.options && config.options.useJson) {
        const { useJson } = config.options
        if (useJson) {
          config.headers['Content-Type'] = 'application/json'
        }
      }
      return config
    } catch (e) {
      ElMessage.error('发送请求失败')
      console.error('axios.request error', e)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { successful, msg, data } = response.data
    // 判断当前请求是否成功
    if (successful) {
      // 成功返回解析后的数据
      return data
    } else {
      // 失败(请求成功，业务失败)，消息提示
      ElMessage.error(msg)
      return Promise.reject(new Error(msg))
    }
  },
  (error) => {
    try {
      // 无授权
      if (error.response.status === 401) {
        store.dispatch('user/logout')
        ElMessage.error(error.response.data.msg)
      }
      // 有服务端提示信息
      if (error.response.data && error.response.data.msg) {
        ElMessage.error(error.response.data.msg)
      } else {
        if (error.response.status === 500) {
          ElMessage.error('请求服务器接口失败！')
        } else if (error.response.status === 404) {
          ElMessage.error('请求接口地址不存在！')
        } else {
          ElMessage.error(error.message)
        }
      }
    } catch (e) {
      ElMessage.error('获取返回值失败')
      console.error('axios.response error', e)
    }
  }
)

export default service
