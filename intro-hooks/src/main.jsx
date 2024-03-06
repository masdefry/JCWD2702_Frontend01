import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login/index';
import Note from './pages/note/index.jsx';
import Posts from './pages/posts/index.jsx';

const route = createBrowserRouter([{
  element: <App />, 
  children: [{
    path: '/', 
    element: <Home />
  },
  {
    path: '/login', 
    element: <Login />
  },
  {
    path: '/notes',
    element: <Note />
  },
  {
    path: '/posts', 
    element: <Posts />
  }]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={route} />
  </>,
)
