import React from 'react';
import topNav from "./components/topNav"
import Search from "./pages/Search"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import {Route,Switch,BrowserRouter} from "react-router-dom"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <topNav/>
      <BrowserRouter>
        <Switch>
          <Route exact path ="/" component={Search}/>
          <Route exact path="/product/:id" component={Product}/>
          <Route exact path="/cart" component={Cart}/>          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
