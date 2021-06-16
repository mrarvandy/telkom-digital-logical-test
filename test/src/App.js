import React, { useState, useEffect } from 'react';
import { listRepos } from 'github-apis'
import Swal from 'sweetalert2';

function App() {
  const [ user, setUser ] = useState('owner');
  const [ repos, setRepos ] = useState({});

  useEffect(() => {
    const options = {
      token: process.env.REACT_APP_SECRET_KEY,
      owner: user,
      repo: ''
    };
    (async () => {
      const data = await listRepos(options);
      setRepos(data);
      console.log(data);
    })();
  }, [user])

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

export default App;
