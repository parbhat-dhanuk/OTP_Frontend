import { Link } from "react-router-dom"



const Home = () => {
  return (
   



  


  <div class="bg-gray-100 flex items-center justify-center min-h-screen">

  <div class="bg-white shadow-lg rounded-lg p-8 min-w-md w-full h-screen flex flex-col items-center justify-center text-center">
    <h1 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
    <p class="text-gray-600 mb-6">one time password verification project</p>

    <div class="flex justify-center space-x-4">
      <Link to="/login" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</Link>
      <Link to="/register" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Register</Link>
    </div>
  </div>

</div>

  )
}

export default Home