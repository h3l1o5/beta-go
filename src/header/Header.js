import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

import DirectionSelector from './DirectionSelector'
import HighwaySelector from './HighwaySelector'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <DirectionSelector />
        <HighwaySelector />
      </div>
    )
  }
}

export default Header
