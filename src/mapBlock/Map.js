import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import stationActive from '../icons/station_active.png'
import stationNormal from '../icons/station_normal.png'

// Wrap all `react-google-maps` components with `withGoogleMap` HOC
const Map = withGoogleMap(props => (
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
            lat: station.location.lat,
            lng: station.location.lng,
          }}
          defaultAnimation={4}
          options={{
            icon: station.id === props.activeID ? stationActive : stationNormal,
          }}
          onClick={() => props.onStationClick(station.id)}
        />
      ))}
  </GoogleMap>
))

export default Map
