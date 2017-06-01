import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import configureStore from './stores';
import HomePage from './pages/home';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore({})}>
      <div className="App">
        <div className="App-header">
          <h2>Ag-Grid React & Redux Example</h2>
        </div>
        <HomePage/>
      </div>
      </Provider>
    );
  }
}

export default App;
