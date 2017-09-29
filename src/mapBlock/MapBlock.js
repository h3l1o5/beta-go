/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import Map from './Map'
import { fetchAndSetStations } from '../actions/stationsActions'
import { fetchAndSetSelectedStation } from '../actions/selectedStationActions'
import { setAmountPredictBarchartActiveID } from '../actions/presentationBlockActions'

import './MapBlock.css'

class MapBlock extends Component {
  state = {
    displayedStations: null,
  }

  componentDidMount() {
    this.props.fetchAndSetStations()
  }

  componentWillReceiveProps(nextProps) {
    const { highway, direction } = nextProps.userSelections
    const { stations } = nextProps

    const displayedStations = _.filter(
      stations,
      station => station.highway === highway && station.direction === direction
    )

    this.setState({ displayedStations })
  }

  onStationClick = id => {
    this.props.fetchAndSetSelectedStation(id)
    this.props.setAmountPredictBarchartActiveID(null)
  }

  render() {
    return (
      <div id="mapBlock">
        <Map
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          stations={this.state.displayedStations}
          onStationClick={this.onStationClick}
          activeID={
            this.props.selectedStation ? this.props.selectedStation.id : null
          }
        />
      </div>
    )
  }
}

MapBlock.propTypes = {
  stations: PropTypes.array,
  selectedStation: PropTypes.object,
  userSelections: PropTypes.object.isRequired,
  fetchAndSetStations: PropTypes.func.isRequired,
  fetchAndSetSelectedStation: PropTypes.func.isRequired,
  setAmountPredictBarchartActiveID: PropTypes.func.isRequired,
}

MapBlock.defaultProps = {
  stations: null,
  selectedStation: null,
}

const mapStateToProps = state => ({
  userSelections: state.userSelections,
  stations: state.stations,
  selectedStation: state.selectedStation,
})

export default connect(mapStateToProps, {
  fetchAndSetStations,
  fetchAndSetSelectedStation,
  setAmountPredictBarchartActiveID,
})(MapBlock)
