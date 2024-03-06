import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login/index';

const route = createBrowserRouter([{
  element: <App />, 
  children: [{
    path: '/', 
    element: <Home />
  },
  {
    path: '/login', 
    element: <Login />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={route} />
  </>,
)
