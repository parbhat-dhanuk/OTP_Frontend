import { Link } from "react-router-dom"



const Home = () => {
  return (
    // <Form/>

    <main>
    <h1 className="font-bold text-4xl">Home Page</h1>
    <br />
    <br />
    <ul>
      <Link to="/login"><li className="font-bold text-blue-400">Login</li></Link>
      <br />
      <br />
     <Link to="/register"> <li className="font-bold text-blue-400">Register</li></Link>
    </ul>

    </main>

  )
}

export default Home