import React, { Component } from 'react';
import Header from './containers/header.js';
import Dashboard from './containers/dashboard.js';
import Footer from './containers/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    );
  }
}

export default App;
