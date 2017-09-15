import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

import DirectionSelector from './DirectionSelector'
import HighwaySelector from './HighwaySelector'

import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <div id="menu">
        <DirectionSelector />
        <HighwaySelector />
      </div>
    )
  }
}

export default Menu
