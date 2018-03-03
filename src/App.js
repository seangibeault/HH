import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Routes from "./Routes";
import AppBar from "./components/AppTitleBar/AppTitleBar";
import SideNav from "./components/SideNav/SideNav";

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppBar />
          <SideNav />
          <Routes />
      </div>
    );
  }
}

export default App;


