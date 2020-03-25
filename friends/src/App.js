import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsPage from './components/FriendsPage'
import AddFriend from './components/AddFriend'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Add Friends App</h1>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
          <li>
            <Link to='/add-friend'>Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsPage} />
          <PrivateRoute path='add-friend' component={AddFriend}/>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
