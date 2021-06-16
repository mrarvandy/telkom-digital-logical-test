import React, { useState, useEffect } from 'react';
import { listRepos } from 'github-apis';

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
    })();
  }, [user])

  const handleSearch = () => {
    const options = {
      token: process.env.REACT_APP_SECRET_KEY,
      owner: user,
      repo: ''
    };
    (async () => {
      const data = await listRepos(options);
      setRepos(data);
    })();
  }

  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="email" className="form-control" aria-describedby="usernameHelp"
          placeholder="By default it returns this creator's repos"
          onChange={
            (event) => {
              event.preventDefault()
              if (!event.target.value) {
                setUser('owner');
              } else {
                setUser(event.target.value);
              }
            }
          }
        />
      </div>
      <button type="submit" className="btn btn-primary"
        onClick={
          (event) => {
            event.preventDefault();
            handleSearch();
          }
        }
      >Search</button>
      <br/>
      {
        Object.keys(repos).length
          ? (
            <React.Fragment>
              <h1>Repos List</h1>
              <div className='list-group'>
                {
                  repos.data.map((repo) => {
                    return (<a href={repo.svn_url} className="list-group-item list-group-item-action">{repo.name}</a>);
                  })
                }
              </div>
            </React.Fragment>
          )
          : (null)
      }
    </React.Fragment>
  );
}

export default App;
