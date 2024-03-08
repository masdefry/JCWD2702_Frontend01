import { Outlet } from "react-router-dom";
import Navbar from "./components/cores/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { userContext } from "./supports/context/useUserContext";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(null)

  return (
    <userContext.Provider value={{userData, setUserData}}>
      <Navbar />
      <div
        className="py-40"
      >
        <ToastContainer /> 
        <Outlet />
      </div>
    </userContext.Provider>
  )
}

export default App
