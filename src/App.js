import React, { Component } from 'react'

import './App.css'
import PresentationBlock from './presentationBlock/PresentationBlock'
import Menu from './menu/Menu'
import NavigationBlock from './navigationBlock/navigationBlock'
import MapBlock from './mapBlock/MapBlock'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Menu />
        <NavigationBlock />
        <MapBlock />
        <PresentationBlock />
      </div>
    )
  }
}

export default App
