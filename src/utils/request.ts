import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { useAppStore } from '@/store'

const BASE_URL: string = import.meta.env.VUE_APP_API_BASE_URL
export const request: AxiosInstance = axios.create({
  baseURL: BASE_URL
})

// 请求拦截器
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const appStore = useAppStore()
    const user = appStore.user
    if (user && config.headers) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
