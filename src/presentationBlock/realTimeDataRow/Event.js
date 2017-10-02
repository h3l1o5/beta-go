import React from 'react'

import './Event.css'

const Event = props => (
  <div id="event">
    <div id="header">特殊狀況</div>
    <div id="contents">{props.data.event}</div>
  </div>
)

export default Event
