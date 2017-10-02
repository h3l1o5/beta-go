import React from 'react'

import './Weather.css'

const Weather = props => (
  <div id="weather">
    <div id="header">天氣狀況</div>
    <div id="contents">
      {props.data.TEMP}
      {props.data.CI}
      {props.data.WX}
    </div>
  </div>
)

export default Weather
