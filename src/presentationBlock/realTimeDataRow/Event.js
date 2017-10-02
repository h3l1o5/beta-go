import React from 'react'
import _ from 'lodash'

import './Event.css'

const Event = props => (
  <div id="event" className="card">
    <div id="header">特殊狀況</div>
    <div id="contents">
      {_.isEmpty(props.data.event) ? (
        <div id="tip">目前無特殊狀況</div>
      ) : (
        <div id="eventList">{props.data.event}</div>
      )}
    </div>
  </div>
)

export default Event
