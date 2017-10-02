import React from 'react'

import './WindAndPOP.css'

const Wind = props => (
  <div id="windAndPOP">
    <div id="header">風速與降雨機率</div>
    <div id="contents">
      {props.data.WDSD} {props.data.POP}
    </div>
  </div>
)

export default Wind
