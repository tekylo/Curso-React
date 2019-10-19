import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Button from '@material-ui/core/Button';

export default function App() {

  return (
    <Router>
        <Users />
      <div>
        <nav>
          <ul>
            <li>
            <Button variant="contained" color="secondary">
                <Link to="/">Home</Link>
            </Button>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users/:id">
                <Users />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
            </Switch>
      </div>
    </Router>
  );
}

function NotFound() {
    return <h2>404</h2>;
  }

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
    let {id} = useParams()
    return <h2>Users {id}</h2>;
}