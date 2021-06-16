import Login from './views/login'
import Home from './views/home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
