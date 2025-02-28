import { useRoutes, BrowserRouter } from 'react-router-dom' //Todo React
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home' // TODO pag/componentes
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

import './App.css' // Todo estilos

const  AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},
    { path: '/category/:category', element: <Home />},
    { path: '/my-account', element: <MyAccount />},
    { path: '/my-orders', element: <MyOrders />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/my-order', element: <MyOrder />},
    { path: '/sign-in', element: <SignIn />},
    { path: '/*', element: <NotFound />},
  ])

  return routes
}

function App() {


  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
