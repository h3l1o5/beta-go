import React, { Component } from 'react'
import { connect } from 'react-redux'

import './NavigationBlock.css'

class NavigationBlock extends Component {
  render() {
    const { selectedStation } = this.props
    return (
      <div id="navigationBlock">
        <div id="priorStations">
          <p className="sectionName">上一個路段</p>
        </div>
        <div id="currentStation">
          <p className="sectionName">目前選擇路段</p>
          <div id="currentStationInfo">
            {selectedStation ? selectedStation.name : <h1>在地圖上選擇一個路段</h1>}
          </div>
        </div>
        <div id="nextStations">
          <p className="sectionName">下一個路段</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedStation: state.selectedStation,
})

export default connect(mapStateToProps, null)(NavigationBlock)
