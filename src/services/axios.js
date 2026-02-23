import axios from "axios";

const url = 'http://localhost:3000/api/'

axios.defaults.baseURL = url;

export default axios;