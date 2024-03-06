import { Outlet } from "react-router-dom";
import Navbar from "./components/cores/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <div
        className="py-64"
      >
        <Outlet />
      </div>
    </>
  )
}

export default App
