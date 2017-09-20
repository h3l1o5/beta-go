import React from 'react'

import './CurrentStation.css'

const CurrentStation = props => {
  const { selectedStation } = props
  return (
    <div id="currentStation">
      <p className="sectionName">目前選擇收費點</p>
      <div id="info">
        <p>
          {selectedStation.highway} {selectedStation.direction}
        </p>
        <p>{selectedStation.name}</p>
      </div>
    </div>
  )
}

export default CurrentStation
