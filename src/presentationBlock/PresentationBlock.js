/* eslint-disable */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import AmountPredictBarchart from './predictedDataRow/AmountPredictBarchart'
import AmountPredictPiechart from './predictedDataRow/AmountPredictPiechart'
import SpeedPredict from './predictedDataRow/SpeedPredict'

import './PresentationBlock.css'

class PresentationBlock extends Component {
  state = {
    selectedStationPredictedData: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedStation.predictedData) {
      this.setState({
        selectedStationPredictedData: nextProps.selectedStation.predictedData,
      })
    }
  }

  render() {
    const { selectedStation } = this.props
    const { selectedStationPredictedData } = this.state
    return (
      <div id="presentationBlock">
        {selectedStationPredictedData ? (
          <div id="rows">
            <div id="realTimeDataRow">
              <div className="header">目前路段即時資訊</div>
              <div className="contents">
                <h1>即時資訊圖表</h1>
              </div>
            </div>
            <div id="predictedDataRow">
              <div className="header">未來一天路段預測資訊</div>
              <div className="contents">
                <AmountPredictBarchart data={selectedStationPredictedData} />
                <AmountPredictPiechart />
                <SpeedPredict />
              </div>
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
