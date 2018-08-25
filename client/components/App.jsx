import React, { Component } from 'react'
import Login from './LoginBlock.jsx';
import Logout from './Logout.jsx';
import {Switch, Route} from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return (
      // <Switch>
      //   <Route exact path='/' component={Login}/>
      //   <Route exact path='/cheese' component={Logout}/>
      // </Switch>
      <div>
        <Login />
        <Logout />
      </div>
    )
  }
}

export default App;