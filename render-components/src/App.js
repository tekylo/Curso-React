import React from 'react';
import logo from './logo.svg';
import Gretting from './Gretting'
import Name, { ShowLastName } from './ShowName'
import ShowDate from './ShowDate';
import ShowMessage from './ShowMessage';
import ShowComponentShowMessage from './ShowComponentShowMessage';
import './App.css';

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
        <ShowComponentShowMessage />
      </header>
    </div>
  );
}

export default App;
