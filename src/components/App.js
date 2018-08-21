import React, { Component } from 'react';
import logo from '../logo.svg';
import { css } from 'aphrodite/no-important';
import styles from './App.styles.js';
import { Link, Route, Switch } from 'react-router-dom';

import About from './about/about';

class App extends Component {
  render() {
    return (
      <div className={css(styles.textAlignCenter)}>
        <header className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" />
          <h1 className={css(styles.appTitle)}>Welcome to React</h1>
        </header>
        <p className={css(styles.appIntro)}>
          To get started, edit <code>src/App.js</code> and save to reload.

          <ul>
            <li><Link to="/about">About</Link></li>
          </ul>

          <Switch>
            <Route path="/about" component={About}/>
          </Switch>


        </p>
      </div>
    );
  }
}

export default App;
