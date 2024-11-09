
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Form = ({ type,submit }) => {

  const [data,setData] = useState({
    email:"",
    username:"",
    password:""
  })

const handleChange=(e)=>{
 setData({
  ...data,
  [e.target.name]:e.target.value
 })
}


const handleSubmit=(e)=>{
     e.preventDefault()
     submit(data)
}



  return (
    <form>
<div className="py-6">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')",
          }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-700 text-center">
            {type === 'Register' ? 'Register' : 'Login'}
          </h2>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          {type === 'Register' && (
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                User Name
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                name="username"
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <Link to="/forgetpassword" className="text-xm text-blue-700">
                Forget Password?
              </Link>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mt-8">
            <button onClick={handleSubmit} className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">
              {type === 'Register' ? 'Register' : 'Login'}
            </button>
          </div>

          <div className="text-center mt-3">
            <Link
              className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
              to={type === 'Register' ? '/login' : '/register'}
            >
              {type === 'Register'
                ? 'Already have an account? Login!'
                : "Don't have an account? Register!"}
            </Link>
          </div>
        </div>
      </div>
    </div>
    </form>
  )
}

export default Form
