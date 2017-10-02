import React from 'react'
import PropTypes from 'prop-types'

import Weather from './Weather'
import WindAndPOP from './WindAndPOP'
import Event from './Event'

import './RealtimeDataRow.css'

const RealtimeDataRow = props => {
  const { realtimeData } = props

  const weatherData = {
    TEMP: realtimeData.TEMP,
    CI: realtimeData.CI,
    WX: realtimeData.WX,
    wxIndex: realtimeData.wxIndex,
  }
  const windAndPOPData = {
    WDSD: realtimeData.WDSD,
    POP: realtimeData.POP,
  }
  const eventData = {
    event: realtimeData.event,
  }

  return (
    <div id="realtimeDataRow">
      <div className="header">目前路段即時資訊</div>
      <div className="contents">
        <Weather data={weatherData} />
        <WindAndPOP data={windAndPOPData} />
        <Event data={eventData} />
      </div>
    </div>
  )
}

RealtimeDataRow.propTypes = {
  realtimeData: PropTypes.object.isRequired,
}

export default RealtimeDataRow
