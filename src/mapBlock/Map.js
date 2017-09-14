/* eslint-disable no-undef */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from 'react-google-maps'
import _ from 'lodash'
import axios from 'axios'

import { fetchAndSetStations } from '../actions/stationsActions'
import { getStationInfo } from '../actions/userSelectionsActions'
import { fetchAndSetSelectedStation } from '../actions/selectedStationActions'

import stationNorth from '../icons/station_north_s.png'
import stationSouth from '../icons/station_south_s.png'

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 23.8, lng: 121 }}
    options={{
      gestureHandling: 'cooperative',
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
        {
          featureType: 'transit',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }],
        },
      ],
    }}
  >
    {props.stations &&
      props.stations.map(station => (
        <Marker
          key={station.id}
          position={{
            lat: station.location.lng,
            lng: station.location.lat,
          }}
          defaultAnimation={4}
          options={{
            icon: station.direction === '北上' ? stationNorth : stationSouth,
          }}
          onClick={() => props.onStationClick(station.id)}
        />
      ))}
  </GoogleMap>
))

class Map extends Component {
  componentDidUpdate(prevProps) {
    const prevHighway = prevProps.userSelections.highway
    const prevDirection = prevProps.userSelections.direction
    const highway = this.props.userSelections.highway
    const direction = this.props.userSelections.direction

    if (!prevHighway || !prevDirection) {
      if (highway && direction) {
        this.props.fetchAndSetStations(highway, direction)
      }
    } else {
      const isHighwayEqual = prevHighway === highway
      const isDirectionEqual = prevDirection === direction
      if (!isHighwayEqual || !isDirectionEqual) {
        this.props.fetchAndSetStations(highway, direction)
      }
    }
  }

  onStationClick = id => {
    this.props.fetchAndSetSelectedStation(id)
  }

  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        stations={this.props.stations}
        onStationClick={this.onStationClick}
      />
    )
  }
}

const mapStateToProps = state => ({
  userSelections: state.userSelections,
  stations: state.stations,
})

export default connect(mapStateToProps, {
  fetchAndSetStations,
  fetchAndSetSelectedStation,
})(Map)
