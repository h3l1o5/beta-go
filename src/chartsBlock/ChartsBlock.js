import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ChartsBlock.css'

class ChartsBlock extends Component {
  render() {
    if (this.props.selectedStation) {
      let { id, name, highway, direction, region } = this.props.selectedStation
      switch (highway) {
        case '1':
          highway = '國道一號'
          break
        case '3':
          highway = '國道三號'
          break
        case '5':
          highway = '國道五號'
          break
        default:
          break
      }
      direction = direction === 'N' ? '北上' : '南下'
      return (
        <div id="chartsBlock">
          <h1>圖表</h1>
          <h5>{id}</h5>
          <h5>{name}</h5>
          <h5>{highway}</h5>
          <h5>{direction}</h5>
          <h5>{region}</h5>
        </div>
      )
    }
    return (
      <div id="chartsBlock">
        <h1>請選擇一個偵測站</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedStation: state.selectedStation,
})

export default connect(mapStateToProps, null)(ChartsBlock)
