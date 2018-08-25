/**
 * ************************************
 *
 * @module  App.jsx
 * @author seano
 * @date
 * @description app component that renders everything
 *
 * ************************************
 */

import React, {Component} from 'react';
import Main from './containers/MainContainer.jsx';



class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1> HELLOOOO </h1>
        <Main />
      </div>
    )
  }
}

export default App;