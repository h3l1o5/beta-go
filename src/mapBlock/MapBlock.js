import React, { Component } from 'react'

import Map from './Map'
import './MapBlock.css'

class MapBlock extends Component {
  render() {
    return (
      <div id="mapBlock">
        <Map />
      </div>
    )
  }
}

export default MapBlock
