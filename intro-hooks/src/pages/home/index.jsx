import React from "react";
import { Link } from "react-router-dom";

// Lifecycle Method
// ComponentDidMount    : Method yang akan dijalankan ketika pertama kali halaman di muat
// ComponentDidUpdate   : Method yang akan dijalankan ketika terjadi perubahan state
// ComponentWillUnmount : Method yang akan dijalankan ketika halaman akan dihapus

// State  : Menyimpan data di dalam component React

let hobby = 'Makan'

class Home extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
        username: 'Defryan'
    }
  }

  componentWillUnmount(){
    alert(hobby)
  }

  componentDidMount(){
    console.log('Component Did Mount RUNNING!')
  }

  onUpdateUsername = () => {
    // this.setState({username: 'Ryan'})
    hobby = 'Minum'
  }

  render(){
    console.log('Render')
    return(
      <h1>
        This is Home Component
        <br />
        <Link to='/login'>
          Go to Login 
        </Link>
        <br /> 
        <h2>
          {this.state.username}
        </h2>
        <h2>
          {hobby}
        </h2>
        <button onClick={this.onUpdateUsername}>
          Update 
        </button>
      </h1>
    )
  }
}

export default Home;