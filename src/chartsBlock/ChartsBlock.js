/* eslint-disable */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './ChartsBlock.css'

class ChartsBlock extends Component {
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
      <div id="chartsBlock">
        {selectedStationPredictData ? (
          <div id="M03A">
            <h1>
              {selectedStation.highway} {selectedStation.direction}
            </h1>
            <h1>{selectedStation.name}</h1>
            <h1>{selectedStation.region}</h1>
            <h1>
              {selectedStationPredictData[0].date} -{' '}
              {selectedStationPredictData[23].date}
            </h1>
            <ResponsiveContainer width="45%" aspect={2}>
              <BarChart
                data={selectedStationPredictData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="總車流量" stackId="a" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
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

export default connect(mapStateToProps, null)(ChartsBlock)
