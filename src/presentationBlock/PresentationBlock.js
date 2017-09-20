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
          <div id="rows">
            <div id="realTimeDataRow">
              <div className="header">道路即時資訊</div>
              <div className="charts">
                <h1>即時資訊圖表</h1>
              </div>
            </div>
            <div id="predictDataRow">
              <div className="header">道路預測資訊</div>
              <div className="charts">
                <AmountPredictBarchart data={selectedStationPredictData} />
                <AmountPredictPiechart />
                <div id="weather">
                  <h1>車速預測</h1>
                </div>
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
