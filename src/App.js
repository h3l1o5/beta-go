import React, { Component } from 'react'

import './App.css'
import PresentationBlock from './presentationBlock/PresentationBlock'
import Header from './header/Header'
import MapBlock from './mapBlock/MapBlock'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <MapBlock />
        <PresentationBlock />
      </div>
    )
  }
}

export default App
