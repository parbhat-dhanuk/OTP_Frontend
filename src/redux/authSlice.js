import { createSlice } from "@reduxjs/toolkit";
import API from "../http";
import STATUS from '../status/status'

const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:"",
        token:null,
        status:null
    },
    reducers:{
        setUser(state,action){
            state.user=action.payload
        },
        setStatus(state,action){
           state.status=action.payload
        },
        setToken(state,action){
            state.token=action.payload
        }
    }
})

export const {setUser,setStatus,setToken}=authSlice.actions

export default authSlice.reducer


//Register

export function register(data){
    return async function registerThunk(dispatch){
  try {
    dispatch(setStatus(STATUS.loading))
   const response = await API.post('/register',data)
    if(response.status===201){
      dispatch(setUser(data))
      dispatch(setStatus(STATUS.success))
    }
  } catch (error) {
    alert(error)
  }
    }
}

//Login

export function login(data){
  return async function loginThunk(dispatch){
    try {
      dispatch(setStatus(STATUS.loading))
      const response=await API.post('/login',data)
      if(response.status===200){
        dispatch(setUser(data))
        dispatch(setStatus(STATUS.success))
        dispatch(setToken(response.data.token))
        sessionStorage.setItem("token",response.data.token)
      }
    } catch (error) {
      alert(error)
    }
  }
}

//forgetpassword

export function forgetpassword(data){
  return async function forgetpasswordThunk(dispatch){
    try {
      dispatch(setStatus(STATUS.loading))
      const response=await API.post('/forgetPassword',data)
      if(response.status===200){
        dispatch(setUser(data))
        dispatch(setStatus(STATUS.success))
      }

    } catch (error) {
      alert(error)
    }
  }
}


// otp verify

export function otpverify(data){
  return async function otpverifyThunk(dispatch){
    try {
      dispatch(setStatus(STATUS.loading))
     const response= await API.post('/verifyotp',data)
     if(response.status===200){
      dispatch(setStatus(STATUS.success))
     }

    } catch (error) {
      alert(error)
    }
  }
}

// change password

export function changepassword(data){
  return async function changepasswordThunk(dispatch){
    try {
      dispatch(setStatus(STATUS.loading))
      const response=await API.post('/resetpassword',data)
      if(response.status===200){
        dispatch(setStatus(STATUS.success))
      }
    } catch (error) {
      alert(error)
    }
  }
}