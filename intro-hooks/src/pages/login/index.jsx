import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login(){
  const [username, setUsername] = useState('Ryandefryan')

  // useEffect(() => {
  //   alert('Component Did Mount')
  // }, [])

  // useEffect(() => {
  //   alert('Component Did Update')
  // }, [username])

  // useEffect(() => {
  //   return () => {
  //     confirm('Are you sure?')
  //   }
  // }, [])

  function onUpdateUsername() {
    setUsername('Bebas01')
  }

  return(
    <h1>
      This is Login Page 
      <Link to='/'>
        Go to Home
      </Link>
      {username}
      <button onClick={onUpdateUsername}>
        Update 
      </button>
    </h1>
  )
}

export default Login;