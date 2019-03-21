import React, { Component } from 'react';

import ProductList from './containers/Product-List';

class App extends Component {
  
  render() {
    return (
      <div className="container">
        <header>
          <h2>welcome</h2>
        </header>
        <ProductList/>
      </div>
    );
  }
}

export default App;
