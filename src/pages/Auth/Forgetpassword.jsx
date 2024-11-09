import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { forgetpassword, setStatus } from "../../redux/authSlice"
import STATUS from "../../status/status"


const Forgetpassword = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {status}=useSelector((state)=>state.auth)

const [data,setData]=useState({
  email:''
})

const handleChange=(e)=>{
  setData({
    ...data,
    [e.target.name]:e.target.value
  })
}


const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(forgetpassword(data))
  
}

useEffect(()=>{
if(status===STATUS.success){
  navigate("/verifyotp")
  alert("OTP send successfully")
  dispatch(setStatus(null))
}
},[status])


  return (
  <>
  
  <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Remember your password?
            <Link className="text-blue-600 decoration-2 hover:underline font-medium" to="/login">
              Login here
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <form>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                <div className="relative">
                  <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error"onChange={handleChange} />
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button type="submit" onClick={handleSubmit} className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Send OTP</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
    </p>
  </main>
 
  </>
  )
}

export default Forgetpassword