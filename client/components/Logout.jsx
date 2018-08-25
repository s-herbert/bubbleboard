import React from 'react';
import { GoogleLogout } from 'react-google-login';
import {Route} from 'react-router-dom';

const Logout = (props) => {
  return (
    <div>
      <Route exact path='/main' component={Logout}/>
      <GoogleLogout
        buttonText="Logout"
        onLogoutSuccess={()=>console.log('logged out')}>
      </GoogleLogout>
    </div>
  )
}

export default Logout;