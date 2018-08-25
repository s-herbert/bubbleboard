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
      <div id="app">
        <Main />
      </div>
    )
  }
}

export default App;