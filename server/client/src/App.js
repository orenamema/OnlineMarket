import React from 'react';
import Search from "./components/Search.js"
import {Route,Switch,BrowserRouter} from "react-router-dom"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Best Buy</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component={Search}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
