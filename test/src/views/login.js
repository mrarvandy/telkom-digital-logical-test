import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import GitHub from 'github-api';
import jwt from 'jsonwebtoken';
import cryptr from 'cryptr';
import Swal from 'sweetalert2';

function Login() {
  const history = useHistory();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleLogin = () => {
    const gh = new GitHub({
      username: username,
      password: password
    });
    const data = {
      username: gh.__auth.username,
      password: cryptr(gh.__auth.password)
    }
    const token = jwt.sign(data, process.env.REACT_APP_SECRET_KEY);
    console.log(token)
    console.log(gh.__auth)
  }

  if (localStorage.getItem('token')) {
    return (
      <Redirect to='/' />
    )
  } else {
    return (
      <React.Fragment>
        <div className="container">
          <div id="overlay" className="container-fluid">
            <h1>Login</h1>
            <div className="form-group">
              <label htmlFor="usernameLogin">Username</label>
              <input type="username" className="form-control" id="usernameLogin"
                onChange={(event) => {
                  event.preventDefault();
                  setUsername(event.target.value);
                }
              }> 
              </input>
            </div>
            <div className="form-group">
              <label htmlFor="passwordLogin">Password</label>
              <input type="password" className="form-control" id="passwordLogin"
                onChange={(event) => {
                  event.preventDefault();
                  setPassword(event.target.value);
                }
              }>
              </input>
            </div>
            <button type="submit" className="btn btn-primary"
              onClick={(event) => {
                event.preventDefault();
                handleLogin();
              }
            }>Login
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;