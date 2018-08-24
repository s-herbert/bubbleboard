import React, { Component } from 'react'
import Bubbleboard from './bubbleboard.jsx';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return ( 
      <div>
        <Bubbleboard></Bubbleboard>
      </div>
    )
  }
}

export default App;