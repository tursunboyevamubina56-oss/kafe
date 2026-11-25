import { Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import NotFound from './pages/NotFound.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Overview from './pages/dashboard/Overview.jsx'
import Products from './pages/dashboard/Products.jsx'
import NewProduct from './pages/dashboard/NewProduct.jsx'
import Orders from './pages/dashboard/Orders.jsx'
import Settings from './pages/dashboard/Settings.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Panel: ichma-ich marshrutlar, o'ng tomonda <Outlet /> ko'rinadi */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Overview />} />
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<NewProduct />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
