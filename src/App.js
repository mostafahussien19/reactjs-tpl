import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Header from './Components/Header';
class App extends Component {
  render() {
    return(
      <div>
        <Header/>
     </div>
    );
  }
}

export default App;
