import { Outlet } from "react-router-dom";
import Navbar from "./components/cores/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Navbar />
      <div
        className="py-40"
      >
        <ToastContainer /> 
        <Outlet />
      </div>
    </>
  )
}

export default App
