import React, { Component } from 'react';
import {Header, CartLine, Offers, Cart} from './components'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CartLine />
        <Offers />
        <Cart />

      </div>
    );
  }
}

export default App;
