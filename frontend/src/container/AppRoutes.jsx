import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLayout from "./PageLayout"
import Home from '../pages/Home/Home'
import PlaceOrder from '../pages/PlaceOrder/PlaceOrder'
import About from '../pages/About/About'
import Reservation from '../pages/Reservation/Reservation'
import Menu from '../pages/Menu/Menu'


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route>
          <Route path={routes.resevation} element={<Reservation/>} />
          <Route path={routes.menu} element={<Menu/>} />

        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
