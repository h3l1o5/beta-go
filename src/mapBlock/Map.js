import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker, Circle } from 'react-google-maps'
import _ from 'lodash'

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// and name it GettingStartedGoogleMap
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
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
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
    <Circle />
  </GoogleMap>
))

class Map2 extends Component {
  state = {
    markers: [
      {
        position: {
          lat: 25.1183111,
          lng: 121.7316361,
        },
        key: `1`,
        defaultAnimation: 2,
      },
      {
        position: {
          lat: 25.1187861,
          lng: 121.7317639,
        },
        key: `2`,
        defaultAnimation: 2,
      },
      {
        position: {
          lat: 25.1095667,
          lng: 121.7259056,
        },
        key: `3`,
        defaultAnimation: 2,
      },
    ],
  }

  handleMapLoad = map => {
    this._mapComponent = map
    if (map) {
      console.log(map.getZoom())
    }
  }

  handleMapClick = event => {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ]
    this.setState({
      markers: nextMarkers,
    })
  }

  handleMarkerRightClick = targetMarker => {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter((marker, index) => {
      console.log(marker)
      return index !== targetMarker
    })
    console.log(nextMarkers)
    this.setState({
      markers: nextMarkers,
    })
  }

  render() {
    return (
      <GettingStartedGoogleMap
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={this.handleMapLoad}
        onMapClick={this.handleMapClick}
        markers={this.state.markers}
        onMarkerRightClick={this.handleMarkerRightClick}
      />
    )
  }
}

export default Map2
