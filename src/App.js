import React, { Component } from 'react';

import './App.css';
import ChartsBlock from './chartsBlock/ChartsBlock'
import DetailBlock from './detailBlock/DetailBlock'
import Header from './header/Header'
import MapBlock from './mapBlock/MapBlock'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <MapBlock />
        <ChartsBlock />
        <DetailBlock />
      </div>
    );
  }
}

export default App;
