import { BrowserRouter,Route,Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import { SignUp } from "./pages/SignUp"
import { Signin } from "./pages/Signin"

const App=()=>{
  return(<div>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element=<SignUp/>/>
      <Route path="/signin" element=<Signin/>/>
      <Route path="/dashboard" element=<Dashboard/>/>
    </Routes>
    </BrowserRouter>
  </div>)
}
export default App