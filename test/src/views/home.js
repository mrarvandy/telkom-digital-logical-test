import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import GitHub from 'github-api';
import Swal from 'sweetalert2';

function Home() {
  const gh = new GitHub();
  const history = useHistory();

  if (!localStorage.getItem('token')) {
    return (
      <Redirect to='/login' />
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;