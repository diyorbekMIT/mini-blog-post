import axios from "axios";
import {getStorage} from "../helpers/setStorage";

const url = 'http://localhost:3000/api/'

axios.defaults.baseURL = url;

axios.interceptors.request.use(config =>{
    const token = getStorage("token");
    const authorization = token ? `Bearer ${token}` : null;
    config.headers.Authorization = authorization;
    console.log(config)
    return config;
    
})

export default axios;