import React, { Component } from 'react'

import './App.css'
import ChartsBlock from './chartsBlock/ChartsBlock'
import Header from './header/Header'
import MapBlock from './mapBlock/MapBlock'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <MapBlock />
        <ChartsBlock />
      </div>
    )
  }
}

export default App
