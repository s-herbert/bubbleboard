import React, { Component } from 'react'
import Bubbleboard from './bubbleboard.jsx';

let myObject = {
  'of': {heaven: 'tongues'},
  'are': 'fencing',
  'too': {'many': ['leaves', {'in the':'city'}]},
  'a': {
    week: {
      'of': {heaven: 'tongues'},
      'are': 'fencing',
      'too': {'many': ['leaves', {'in the':{
        'of': {heaven: 'tongues'},
        'are': 'fencing',
        'too': {'many': ['leaves', {'in the':'city'}]},
        'a': {
          week: 'is',
          such: {a: {long: {time: 'eras', rot:'like nature'}}}
        }
      }}]},
      'a': {
        week: 'is',
        such: {a: {long: {time: 'eras', rot:'like nature'}}}
      }
    },
    such: {a: {long: {time: 'eras', rot:'like nature'}}}
  }
}


class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return ( 
      <div>
        <Bubbleboard object = {myObject}></Bubbleboard>
      </div>
    )
  }
}

export default App;