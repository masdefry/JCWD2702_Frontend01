import React from "react";
import { Outlet } from "react-router-dom";

class App extends React.Component{

  render(){
    return(
     <Outlet />
    )
  }
}

export default App;