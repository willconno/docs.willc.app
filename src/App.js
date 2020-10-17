import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Home from './home/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <LandingScreen home_button="Go Home!"/>
        </Route>
        <Route path="*">
          <ErrorScreen />
        </Route>
      </Switch>
    </Router>
  );
}

const LandingScreen = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/home">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
    </div>
  )
}

const ErrorScreen = () => {
  return (
    <div>
      <h1>Oops! There's nothing here...</h1>
    </div>
  )
}
