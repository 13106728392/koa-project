import axios from 'axios'
import Cookies from 'js-cookie'



const Axios = axios.create({
  timeout: 300000,
  withCredentials: true
})
// Axios.defaults.withCredentials = true
// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
  // let cookies =  Cookies.get('UserInfo') ?  Cookies.get('UserInfo') :'' 

  // if(cookies !=""){
  //   config.headers.Authorization =  cookies npm install @types/js-cookie
  //   console.log(config)
  // }
    return config

}, () => {
  return Promise.reject('连接超时,请重试')
})

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {
  
  return res
}, error => {
  // 其他报错也跳转到登录页面
  // window.location.href='/login';
  return Promise.reject(error)
})


export default Axios
