import React from 'react';
import logo from './logo.svg';
import Gretting from './Gretting'
import Name, { ShowLastName } from './ShowName'
import ShowDate from './ShowDate';
import ShowMessage from './ShowMessage';
import ShowComponentShowMessage from './ShowComponentShowMessage';
import Title from './html/title'
import Text from './html/text'
import './App.css';

const title = 'Necesito partir en componentes todo esto'
const text = 'Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:'
const List = props => <ul>{ props.children }</ul>
const ListItem = props => <li>{ props.children }</li>
const Link = props => <a href = { props.to } target = { props.openInNewTab ? '_blank' : '' }> { props.children } </a>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title = { title }/>
        <Text text = { text }/>
        <List>
          <ListItem>Observar el HTML</ListItem>
          <ListItem>Pensar en como puedo extraer cada trozo en componentes</ListItem>
          <ListItem>Usarlos en React</ListItem>
        </List>
        <Link to = "https://reactjs.org/">React Docs</Link>
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
