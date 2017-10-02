import React from 'react'

import './WindAndPOP.css'

const getTip = WDSD => {
  switch (true) {
    case WDSD >= 24.5:
      return '路段封閉'
    case WDSD >= 17.2:
      return '速限降低至40km/h, 並持續禁止大型車行駛高架路段'
    case WDSD >= 13.9:
      return '速限降低至70km/h, 並禁止大型車行駛高架路段'
    default:
      return '依路段速限正常行駛'
  }
}

const Wind = props => {
  const tip = getTip(props.data.WDSD)
  return (
    <div id="windAndPOP" className="card">
      <div id="header">風速與降雨機率</div>
      <div id="contents">
        <div id="WDSD">
          <div id="content">風速 : {props.data.WDSD} 公尺每秒</div>
          <div id="tip">{tip}</div>
        </div>
        <div id="POP">降雨機率 : {props.data.POP}%</div>
      </div>
    </div>
  )
}

export default Wind
