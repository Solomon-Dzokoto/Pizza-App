import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup"
import ForgotPassword from "./components/Auth/ForgotPassword"
import { store } from "./redux/store/store"
import { Provider } from "react-redux"
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"
import Home from "./Page/Home"
const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App
