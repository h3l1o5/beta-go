import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

import { setUserSelectedHighway } from '../actions/userSelectionsActions'

const highwayOptions = [
  {
    text: '國道1號',
    value: '國道1號',
  },
  {
    text: '國道3號',
    value: '國道3號',
  },
  {
    text: '國道5號',
    value: '國道5號',
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
          value={this.props.userSelections.highway}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userSelections: state.userSelections,
})

export default connect(mapStateToProps, { setUserSelectedHighway })(
  HighwaySelector
)
