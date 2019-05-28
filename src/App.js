import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductList from './containers/Product-List';
import Header from './containers/Header';
import Cart from './containers/Cart';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
