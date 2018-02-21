import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Richard from "./Richard";

class Navbar extends Component {
  render() {
    return (
      <div>
        ...navbar...
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">zzzWelcome to React</h1>
        </header>
        <Navbar />
        <hr/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/users" component={Richard} />
        </Switch>
      </div>
    );
  }
}

export default App;
