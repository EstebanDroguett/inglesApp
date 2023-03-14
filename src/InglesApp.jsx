//import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { store } from "./store"

export const InglesApp = () => {
  return (

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

  )
}
