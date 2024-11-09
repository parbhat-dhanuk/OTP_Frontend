import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Forgetpassword from "./pages/Auth/Forgetpassword"
import Changepassword from "./pages/Auth/Changepassword"
import Verifyotp from "./pages/Auth/Verifyotp"
import { Provider } from "react-redux"
import store from "./redux/store"


const App = () => {
  return (
   <Provider store={store}>
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/forgetpassword" element={<Forgetpassword/>}/>
    <Route path="/verifyotp" element={<Verifyotp/>}/>
    <Route path="/changepassword" element={<Changepassword/>}/>
    </Routes>
</BrowserRouter>
   </Provider>
  )
}

export default App