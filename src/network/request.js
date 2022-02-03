import axios from "axios";

export function request(config) {
//  1.创建axios实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66',
    timeout:5000
  })

//  2.axios拦截器
  instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err)
  })


//  发送网络请求
  return instance(config)
}
