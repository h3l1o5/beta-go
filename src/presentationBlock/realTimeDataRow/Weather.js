import React from 'react'
import PropTypes from 'prop-types'

import { dayOrNight } from '../../utils/time'

import './Weather.css'

const Weather = props => {
  const currentHour = new Date(Date.now()).getHours()
  const iconName = `${dayOrNight(currentHour)}${props.data.wxIndex}`
  const weatherIcon = require(`../../icons/weather/${iconName}.jpeg`)
  return (
    <div id="weather" className="card">
      <div id="header">天氣狀況</div>
      <div id="contents">
        <div id="condition">
          <img src={weatherIcon} id="wxIcon" alt="weatherIcon" />
          <div id="discriptions">
            <div id="CI">{props.data.CI}</div>
            <div id="WX">{props.data.WX}</div>
          </div>
        </div>
        <div id="temperature">攝氏 {props.data.TEMP} 度</div>
      </div>
    </div>
  )
}

Weather.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Weather
