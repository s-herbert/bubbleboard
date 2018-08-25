import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  return (
      <div></div>
  )
}

export default Login;

// const responseGoogle = (response) => {
//   axios.post('http://localhost:3000/login', {
//     googleId: response.profileObj.googleId
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));
//   // window.location = '/cheese';
// }

// gapi.auth2.init({client_id: '843524249915-u261vethvscjuu2kgjf4q4sgm6jeg8r9.apps.googleusercontent.com'})
// gapi.load('auth2', function() {console.log('ready')});
// console.log(gapi.auth2.getAuthInstance());


// const Login = (props) => {
//   return (
//       <GoogleLogin 
//         className=""
//         clientId="843524249915-u261vethvscjuu2kgjf4q4sgm6jeg8r9.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={responseGoogle}
//         onFailure={() => console.log('oops')}>
//         <Link to='/cheese'/>
//       </ GoogleLogin>
//   )
// }

// export default Login;