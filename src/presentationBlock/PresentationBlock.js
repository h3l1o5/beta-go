/* eslint-disable */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import AmountPredictBarChart from './AmountPredictBarChart'

import './presnetationBlock.css'

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
          <AmountPredictBarChart data={selectedStationPredictData} />
        ) : (
          <h1>請選擇一個偵測站</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedStation: state.selectedStation,
})

export default connect(mapStateToProps, null)(PresentationBlock)
