/* eslint-disable */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import AmountPredictBarchart from './predictedDataRow/AmountPredictBarchart'
import AmountPredictPiechart from './predictedDataRow/AmountPredictPiechart'
import SpeedPredict from './predictedDataRow/SpeedPredict'
import RealtimeDataRow from './realTimeDataRow/RealtimeDataRow'

import './PresentationBlock.css'

class PresentationBlock extends Component {
  state = {
    predictedData: null,
    realtimeData: null,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedStation.predictedData) {
      this.setState({
        predictedData: nextProps.selectedStation.predictedData,
        realtimeData: nextProps.selectedStation.realtimeData,
      })
    }
  }

  render() {
    const { selectedStation } = this.props
    const { predictedData, realtimeData } = this.state
    return (
      <div id="presentationBlock">
        {predictedData ? (
          <div id="rows">
            <RealtimeDataRow realtimeData={realtimeData} />
            <div id="predictedDataRow">
              <div className="header">未來一天路段預測資訊</div>
              <div className="contents">
                <AmountPredictBarchart data={predictedData} />
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
