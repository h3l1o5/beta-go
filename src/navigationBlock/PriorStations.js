import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import { fetchAndSetSelectedStation } from '../actions/selectedStationActions'
import {
  setUserSelectedDirection,
  setUserSelectedHighway,
} from '../actions/userSelectionsActions'
import { setAmountPredictBarchartActiveID } from '../actions/presentationBlockActions'

import './PriorStations.css'

class PriorStations extends Component {
  handleListItemClick = (ID, highway, direction) => {
    this.props.fetchAndSetSelectedStation(ID)
    this.props.setUserSelectedHighway(highway)
    this.props.setUserSelectedDirection(direction)
    this.props.setAmountPredictBarchartActiveID(null)
  }

  render() {
    return (
      <div id="priorStations">
        <p className="sectionName">上一個收費點</p>
        <div id="info">
          {_.map(this.props.stationList, station => {
            let changeHighwayTip = ''
            if (station.highway !== this.props.selectedStation.highway) {
              changeHighwayTip = `[${station.highway}] `
            }
            return (
              <div className="listItem">
                <a
                  role="button"
                  tabIndex="0"
                  key={station.id}
                  onClick={() =>
                    this.handleListItemClick(
                      station.id,
                      station.highway,
                      station.direction
                    )}
                >
                  {changeHighwayTip}
                  {station.name}
                </a>
                <span>{'----------->'}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

PriorStations.propTypes = {
  stationList: PropTypes.array.isRequired,
  selectedStation: PropTypes.object.isRequired,
  fetchAndSetSelectedStation: PropTypes.func.isRequired,
  setUserSelectedDirection: PropTypes.func.isRequired,
  setUserSelectedHighway: PropTypes.func.isRequired,
  setAmountPredictBarchartActiveID: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  selectedStation: state.selectedStation,
})

export default connect(mapStateToProps, {
  fetchAndSetSelectedStation,
  setUserSelectedDirection,
  setUserSelectedHighway,
  setAmountPredictBarchartActiveID,
})(PriorStations)
