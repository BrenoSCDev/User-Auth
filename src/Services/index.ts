import axios from "axios";

axios.defaults.baseURL="http://localhost:8000"
const axiosApi = axios.create({})

export default axiosApi