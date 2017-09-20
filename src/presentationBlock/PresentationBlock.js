/* eslint-disable */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import AmountPredictBarchart from './AmountPredictBarchart'
import AmountPredictPiechart from './AmountPredictPiechart'

import './PresentationBlock.css'

class PresentationBlock extends Component {
  state = {
    selectedStationPredictData: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedStation.predictData) {
      this.setState({
        selectedStationPredictData: nextProps.selectedStation.predictData,
      })
    }
  }

  render() {
    const { selectedStation } = this.props
    const { selectedStationPredictData } = this.state
    return (
      <div id="presentationBlock">
        {selectedStationPredictData ? (
          <div id="charts">
            <div id="firstRow">
              <AmountPredictBarchart data={selectedStationPredictData} />
              <AmountPredictPiechart />
              <div id="weather">
                <h1>車速預測</h1>
              </div>
            </div>
            <div id="secondRow">
              <h1>第二列</h1>
            </div>
          </div>
        ) : (
          <div id="requireStationTip">在地圖上選擇一個路段</div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedStation: state.selectedStation,
})

export default connect(mapStateToProps, null)(PresentationBlock)
