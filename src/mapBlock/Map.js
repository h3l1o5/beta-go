/* eslint-disable no-undef */

import React, { Component } from 'react'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from 'react-google-maps'
import _ from 'lodash'
import axios from 'axios'

import stationNorth from '../icons/station_north.png'
import stationSouth from '../icons/station_south.png'

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
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
          defaultAnimation={2}
          options={{
            icon: station.direction === 'N' ? stationNorth : stationSouth,
          }}
        />
      ))}
    {!_.isEmpty(props.directions) &&
      _.map(props.directions, direction => (
        <DirectionsRenderer
          directions={direction}
          options={{
            suppressMarkers: true,
            polylineOptions: { strokeColor: 'green', strokeWeight: 10 },
          }}
        />
      ))}
  </GoogleMap>
))

class Map extends Component {
  state = {
    stations: [],
    directions: [],
  }

  componentWillMount() {
    axios
      .get('/api/chargeStations')
      .then(res => this.setState({ stations: res.data.stations }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (_.isEmpty(prevState.stations)) {
      console.log(google.maps)
      const DirectionsService = new google.maps.DirectionsService()

      let station1 = this.state.stations[1].location
      let origin = new google.maps.LatLng(station1.lng, station1.lat)
      let station2 = this.state.stations[10].location
      let destination = new google.maps.LatLng(station2.lng, station2.lat)
      DirectionsService.route(
        {
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({ directions: [...this.state.directions, result] })
          } else {
            console.error(`error fetching directions ${result}`)
          }
        }
      )
      station1 = this.state.stations[11].location
      origin = new google.maps.LatLng(station1.lng, station1.lat)
      station2 = this.state.stations[20].location
      destination = new google.maps.LatLng(station2.lng, station2.lat)
      DirectionsService.route(
        {
          origin,
          destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({ directions: [...this.state.directions, result] })
          } else {
            console.error(`error fetching directions ${result}`)
          }
        }
      )
    }
  }

  handleMapLoad = map => {
    this._mapComponent = map
    if (map) {
      console.log(map.getZoom())
    }
  }

  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={this.handleMapLoad}
        stations={this.state.stations}
        directions={this.state.directions}
      />
    )
  }
}

export default Map
