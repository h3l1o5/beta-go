import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

import { setUserSelectedHighway } from '../actions/userSelectionsActions'

const highwayOptions = [
  {
    text: '國道1號',
    value: '1',
  },
  {
    text: '國道3號',
    value: '3',
  },
  {
    text: '國道5號',
    value: '5',
  },
]

class HighwaySelector extends Component {
  handleChange = (_, data) => {
    this.props.setUserSelectedHighway(data.value)
  }

  render() {
    return (
      <div id="highwaySelector">
        <Dropdown
          placeholder="選擇國道"
          options={highwayOptions}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default connect(null, { setUserSelectedHighway })(HighwaySelector)