import React from 'react';
import logo from './logo.svg';
import Gretting from './Gretting'
import Name, { ShowLastName } from './ShowName'
import ShowDate from './ShowDate';
import './App.css';
import ShowMessage from './ShowMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Gretting />
        <Name />
        <ShowLastName />
        <ShowDate />
        <ShowMessage />
      </header>
    </div>
  );
}

export default App;
