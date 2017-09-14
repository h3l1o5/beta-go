import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  BarChart,
  Cell,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

class AmountPredictBarChart extends Component {
  state = {
    activeIndex: null,
  }

  handleBarClick = (data, index) => {
    this.setState({ activeIndex: index })
  }

  render() {
    return (
      <div id="predictDataChart" style={{ height: '40%' }}>
        <ResponsiveContainer width="33%" height="100%">
          <BarChart
            data={this.props.data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="time"
              interval={10}
              tick={{ transform: 'translate(0, 4)' }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="總車流量" fill="#8884d8" onClick={this.handleBarClick}>
              {this.props.data.map((entry, index) => (
                <Cell
                  cursor="pointer"
                  fill={
                    index === this.state.activeIndex ? '#82ca9d' : '#8884d8'
                  }
                  key={entry._id}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

AmountPredictBarChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default AmountPredictBarChart
