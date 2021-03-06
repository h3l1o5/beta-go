import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import CurrentStation from './CurrentStation'
import NextStations from './NextStations'
import PriorStations from './PriorStations'
import { findPriorStations, findNextStations } from '../utils/findStations'

import './NavigationBlock.css'

const NavigationBlock = props => {
  const { selectedStation, stations } = props
  if (selectedStation) {
    const priorStations = findPriorStations(selectedStation, stations)
    const nextStations = findNextStations(selectedStation, stations)
    return (
      <div id="navigationBlock">
        <PriorStations stationList={priorStations} />
        <CurrentStation selectedStation={selectedStation} />
        <NextStations stationList={nextStations} />
      </div>
    )
  }
  return (
    <div id="navigationBlock">
      <div id="requireStationTip">在地圖上選擇一個路段</div>
    </div>
  )
}

NavigationBlock.propTypes = {
  selectedStation: PropTypes.object,
  stations: PropTypes.array,
}

NavigationBlock.defaultProps = {
  selectedStation: null,
  stations: null,
}

const mapStateToProps = state => ({
  stations: state.stations,
  selectedStation: state.selectedStation,
})

export default connect(mapStateToProps, null)(NavigationBlock)
