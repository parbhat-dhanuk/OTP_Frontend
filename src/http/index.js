import axios from "axios"
import { baseUrl } from "../config/config"

const API = axios.create({
    // baseURL:"https://react30.onrender.com/api/user"
    baseURL:baseUrl
})
export default API