import React from 'react'
import PropTypes from 'prop-types'

import './CurrentStation.css'

const CurrentStation = props => {
  const { selectedStation } = props
  return (
    <div id="currentStation">
      <p className="sectionName">目前選擇路段</p>
      <div id="info">
        <p>
          {selectedStation.highway} {selectedStation.direction}
        </p>
        <p>{selectedStation.name}</p>
      </div>
    </div>
  )
}

CurrentStation.propTypes = {
  selectedStation: PropTypes.object.isRequired,
}

export default CurrentStation
