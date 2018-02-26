import React, { Component } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import logo from './logo.svg';
import './App.css';

import store from "./state/state";

import UserList from "./containers/UserList";

class Navbar extends Component {
  render() {
    return (
      <div>
        ...navbar...
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </div>
    );
  }
}

class HomePage extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React + Redux</h1>
          </header>
          <Navbar />
          <hr/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/users" component={UserList} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
