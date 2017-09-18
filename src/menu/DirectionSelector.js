import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

import { setUserSelectedDirection } from '../actions/userSelectionsActions'

const directionOptions = [
  {
    text: '南下',
    value: 'S',
  },
  {
    text: '北上',
    value: 'N',
  },
]

class DirectionSelector extends Component {
  state = {
    direction: '',
  }

  handleChange = (_, data) => {
    this.props.setUserSelectedDirection(data.value)
  }

  render() {
    return (
      <div id="directionSelector">
        <Dropdown
          placeholder="選擇方向"
          options={directionOptions}
          onChange={this.handleChange}
          basic
        />
      </div>
    )
  }
}

export default connect(null, { setUserSelectedDirection })(DirectionSelector)
