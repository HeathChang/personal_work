import store from "@/store";
import axios from "axios";
// import ConstantCode from "@/common/constants/ConstantCode";

class Service{
    constructor(){
        this.$axios = axios.create({
            headers:{
                Accept:"application/json", "Content-Type":"application/json"
            },
            withCredentials:true
        })
        this.$axios.interceptors.request.use((config)=>{
            // const auth = store.getters['user/getAuthorization']
            // const refresh = store.getters['user/getRefreshToken']
            // config.headers['Authorization'] = auth
            // // config.headers[ConstantCode.REFRESH_TOKEN_NAME]= refresh
            return config
        })
        this.$axios.interceptors.response.use((response)=>{
            // const auth = response.headers['Authorization']
            // const refresh = response.headers[ConstantCode.REFRESH_TOKEN_NAME]
            // store.dispatch('user/setAuthorization', {auth, refresh})
            return response
        })
    }
    get(path ='', param={}){
        return this.$axios.request({
            method:"GET",
            url:path,
            params:param,
            responseType:"json"
        })
    }
    put(path,payload){
        return this.$axios.request({
            method:"PUT",
            url:path,
            responseType:"json",
            data:payload
        })
    }
    patch(path, payload){
        return this.$axios.request({
            method:"PATCH",
            url:path,
            responseType:"json",
            data:payload
        })
    }
    post(path,payload){
        return this.$axios.request({
            method:"post",
            url:path,
            responseType:"json",
            data:payload
        })
    }
    multipartPost(path,payload){
        return this.$axios.request({
            headers:{'Content-type':"multipart/form-data"},
            method:"post",
            url:path,
            responseType:'json',
            data:payload
        })
    }
    delete(path,payload){
        return this.$axios.request({
            method:'delete',
            url:path,
            responseType:'json',
            params:payload
        })
    }

    // setToken(token="", userData={}){
    //     store.commit('user/setAuthorization', {authorization:token})
    //     store.commit('user/setUserData', {userData:userData})
    //     localStorage.setItem("userData", JSON.stringify(userData))
    //     localStorage.setItem('token', token)
    // }
    // deleteToken(token = "", userData={}){
    //     store.commit('user/setAuthorization', {authorization:''})
    //     store.commit('user/setUserData', {userData:{}} )
    //     localStorage.removeItem("userData")
    //     localStorage.removeItem("token")
    // }
}
export default Service