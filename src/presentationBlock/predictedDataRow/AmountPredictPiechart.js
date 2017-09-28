import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from 'recharts'

import './AmountPredictPiechart.css'

class AmountPredictPiechart extends Component {
  state = {
    data: null,
  }

  componentWillReceiveProps(nextProps) {
    const { amountPredictBarchart } = nextProps.presentationBlock
    const { predictData } = nextProps.selectedStation
    if (amountPredictBarchart.activeID) {
      const targetData = _.find(
        predictData,
        o => o._id === amountPredictBarchart.activeID
      )
      const data = [
        { name: '小客車', value: targetData.小客車, color: '#0088FE' },
        { name: '小貨車', value: targetData.小貨車, color: '#00C49F' },
        { name: '大客車', value: targetData.大客車, color: '#FFBB28' },
        { name: '大貨車', value: targetData.大貨車, color: '#FF8042' },
        { name: '聯結車', value: targetData.聯結車, color: '#1A2B3C' },
      ]
      this.setState({ data })
    } else {
      this.setState({ data: null })
    }
  }

  render() {
    return (
      <div id="amountPredictPiechart">
        <p>單一小時各車種數量預測</p>
        {this.state.data ? (
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie
                data={this.state.data}
                nameKey="name"
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                legendType="circle"
                label
              >
                {this.state.data.map(entry => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <h1 id="tip">選擇一段時間</h1>
        )}
      </div>
    )
  }
}

AmountPredictPiechart.propTypes = {
  presentationBlock: PropTypes.object.isRequired,
  selectedStation: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  selectedStation: state.selectedStation,
  presentationBlock: state.presentationBlock,
})

export default connect(mapStateToProps, null)(AmountPredictPiechart)
