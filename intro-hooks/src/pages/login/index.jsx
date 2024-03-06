import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

function Login(){
  const [username, setUsername] = useState('Ryandefryan')
  const [email, setEmail] = useState('')

  const inputUsername = useRef()
  const inputPassword = useRef()
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
    console.log(inputUsername.current.value)
    console.log(inputPassword.current)
    console.log(email)
  }

  function onSetEmail(e){
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  return(
    <div style={{ paddingLeft: '100px' }}>
      This is Login Page 
      <br />
      <Link to='/'>
        Go to Home
      </Link>
      <br />
      {username}
      <br />
      <input type="text" ref={inputUsername} placeholder="Input Your Username" />
      <input type="text" ref={inputPassword} placeholder="Input Your Password" />
      <input type="text" onChange={(e) => onSetEmail(e)} placeholder="Input Your Email" />
      <br />
      <button onClick={onUpdateUsername}>
        Update 
      </button>
    </div>
  )
}

export default Login;