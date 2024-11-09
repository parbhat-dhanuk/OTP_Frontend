import { useDispatch, useSelector } from "react-redux"
import Form from "./Auth/Form"
import { register, setStatus } from "../redux/authSlice"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import STATUS from "../status/status"

const Register = () => {

  const dispatch=useDispatch()
  const {user,status}=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const handleRegister=async(data)=>{
    try {
      dispatch(register(data))

    } catch (error) {
      alert(error)
    }
  }

  useEffect(()=>{
    if(status===STATUS.success){
      navigate("/login")
      alert("Registered successfully")
      dispatch(setStatus(null))
    }
  },[status])

  return (
  <Form type="Register" submit={handleRegister}/>
  )
}

export default Register