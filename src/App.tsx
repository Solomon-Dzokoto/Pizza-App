import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup"
import { store } from "./redux/store/store"
import { Provider } from "react-redux"
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"

const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App
