//import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
//import { store } from "./store"

export const InglesApp = () => {
  return (

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

  )
}
