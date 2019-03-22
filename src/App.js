import React, { Component } from 'react';

import ProductList from './containers/Product-List';
import Header from './containers/Header';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <Header/>        
        <ProductList/>
      </div>
    );
  }
}

export default App;
