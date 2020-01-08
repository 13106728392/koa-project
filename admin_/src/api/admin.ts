import Axios from './index';
const BaseUrl = 'http://localhost:3001/'

// 登录
export const signIn = (data: any, config?: any) => {
    return Axios.post(`${BaseUrl}api/user/signIn`, data, config).then(res => res.data)
};

//注册
export const signUp = (data: any, config?: any) => {
    return Axios.post(`${BaseUrl}api/user/signUp`, data, config).then(res => res.data)
};

//注销
export const cancall = (data: any, config?: any) => {
    return Axios.post(`${BaseUrl}api/user/cancall`, data, config).then(res => res.data)
};


//获取列表
export const work = (data: any, config?: any) => {
    return Axios.get(`${BaseUrl}work/`, data).then(res => res.data)
};


//删除商品
export const delProduct = (data: any, config?: any) => {
    return Axios.post(`${BaseUrl}work/work/delProduct`, data, config).then(res => res.data)

};


//删除商品
export const updateProduct = (data: any, config?: any) => {
    return Axios.post(`${BaseUrl}work/work/updateProduct`, data, config).then(res => res.data)

};


export const getRoleList = (data: any) => {
    return Axios.get(`${BaseUrl}work/`, {
        data: data
    }).then(res => res.data)
}




