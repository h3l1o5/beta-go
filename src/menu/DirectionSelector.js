import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

import { setUserSelectedDirection } from '../actions/userSelectionsActions'

const directionOptions = [
  {
    text: '南下',
    value: '南下',
  },
  {
    text: '北上',
    value: '北上',
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
          value={this.props.userSelections.direction}
        />
      </div>
    )
  }
}

DirectionSelector.propTypes = {
  userSelections: PropTypes.object.isRequired,
  setUserSelectedDirection: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  userSelections: state.userSelections,
})

export default connect(mapStateToProps, { setUserSelectedDirection })(
  DirectionSelector
)
