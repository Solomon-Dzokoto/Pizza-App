import Signup from "./Page/Signup"
import { store } from "./redux/store/store"
import { Provider } from "react-redux"

const App = () => {
  return (
    <Provider store={store}>
      <div className="">
        <Signup />
      </div>
    </Provider>
  )
}

export default App
