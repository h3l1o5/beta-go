import React from 'react'

import './App.css'
import PresentationBlock from './presentationBlock/PresentationBlock'
import Menu from './menu/Menu'
import NavigationBlock from './navigationBlock/NavigationBlock'
import MapBlock from './mapBlock/MapBlock'

const App = () => (
  <div id="app">
    <div id="app-first-row">
      <Menu />
      <NavigationBlock />
    </div>
    <div id="app-second-row">
      <MapBlock />
      <PresentationBlock />
    </div>
  </div>
)

export default App
