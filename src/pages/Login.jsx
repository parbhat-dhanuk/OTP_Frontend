import { useDispatch, useSelector } from "react-redux"
import Form from "./Auth/Form"
import { useNavigate } from "react-router-dom"
import { login, setStatus } from "../redux/authSlice"
import STATUS from "../status/status"
import { useEffect } from "react"


const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {status}=useSelector((state)=>state.auth)

const handleLogin=async(data)=>{
 dispatch(login(data))
}

useEffect(()=>{
if(status===STATUS.success){
  alert("Logged in successfully")
navigate("/")
dispatch(setStatus(null))
}
},[status])


  return (
    <Form type="Login" submit={handleLogin} />
  )
}

export default Login