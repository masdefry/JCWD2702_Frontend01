import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login/index.jsx'
import HomePage from './pages/home/index.jsx'
import Register from './pages/register';
import ProductDetailPage from './pages/product-detail/index';

const router = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/product-detail/:productId',
      element: <ProductDetailPage />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
