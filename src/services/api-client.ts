import axios, {CanceledError} from "axios";

const axiosInstance = axios.create ({
  baseURL: "http://localhost:5000"
})

axiosInstance.defaults.headers.common['x-auth-token'] = localStorage.getItem("x-auth-token");

export default axiosInstance
export {CanceledError}