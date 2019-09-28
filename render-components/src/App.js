import React from 'react';
import logo from './logo.svg';
import Gretting from './Gretting'
import Name, { ShowLastName } from './ShowName'
import ShowDate from './ShowDate';
import ShowMessage from './ShowMessage';
import ShowComponentShowMessage from './ShowComponentShowMessage';
import Title from './html/title'
import Text from './html/text'
import List from './html/list'
import ListItem from './html/listItem'
import Link from './html/link'
import Loading from './loading'
import Parent from './parent'
import Count from './contador/count'
import String from './contador/string'
import Users from './tema5/UsersContainer'
import Task from './tema5/Task'
import './App.css'
import ButtonJson from './tema6/ButtonJson'
import Login from './tema7/login'
import ListContainer from './tema8/ListContainer'
import MySelect from './tema9/Myselect';
import Myform from './tema9/MyForm';

const title = 'Necesito partir en componentes todo esto'
const text = 'Para ello puedo usar React que me permitirá poder reutilizar todos esos componentes. Para ello tengo que:'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tema 9</h1>
        <Myform/>
        <MySelect/>
        <h1>Tema 8</h1>
        <ListContainer/>
        <h1>Tema 7</h1>
        <Login />
        <h1>Tema 6</h1>
        <h2>1</h2>
        <ButtonJson/>
        <h1>Tema 5</h1>
        <h2>1</h2>
        <Users/>
        <h2>2</h2>
        <Task/>
        <Title title = { title }/>
        <Text text = { text }/>
        <List>
          <ListItem>Observar el HTML</ListItem>
          <ListItem>Pensar en como puedo extraer cada trozo en componentes</ListItem>
          <ListItem>Usarlos en React</ListItem>
        </List>
        <Link to = "https://reactjs.org/" openInNewTab>React Docs</Link>
        <Loading show = { true } />
        <Parent />
        <Count />
        <String />
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
