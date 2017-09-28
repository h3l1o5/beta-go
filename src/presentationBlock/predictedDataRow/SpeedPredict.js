import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { colorSelector } from '../../utils/speed'

import './SpeedPredict.css'

class SpeedPredict extends Component {
  state = {
    speed: null,
    speedColor: null,
  }

  componentWillReceiveProps(nextProps) {
    const { activeID } = nextProps.presentationBlock.amountPredictBarchart
    const { predictData } = nextProps.selectedStation
    if (activeID) {
      const targetData = _.find(predictData, o => o._id === activeID)
      const speed = Math.round(targetData.速度)
      const speedColor = colorSelector(speed)
      this.setState({ speed, speedColor })
    } else {
      this.setState({ speed: null, speedColor: null })
    }
  }

  render() {
    const { speed, speedColor } = this.state
    return (
      <div id="speedPredict">
        <p id="header">單一小時平均車速預測</p>
        {speed ? (
          <p id="content" style={{ color: speedColor }}>
            {speed}
            <span>KM/h</span>
          </p>
        ) : (
          <h1 id="tip">選擇一段時間</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedStation: state.selectedStation,
  presentationBlock: state.presentationBlock,
})

export default connect(mapStateToProps, null)(SpeedPredict)
