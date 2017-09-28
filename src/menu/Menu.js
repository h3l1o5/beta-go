import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/zh-tw'

import DirectionSelector from './DirectionSelector'
import HighwaySelector from './HighwaySelector'

import './Menu.css'

class Menu extends Component {
  state = {
    date: '',
    time: '',
  }

  componentDidMount() {
    this.setDateTime()
    this.timer = setInterval(this.setDateTime, 1000)
  }

  setDateTime = () => {
    moment.locale('zh-tw')
    const date = moment().format('YYYY[年]M[月]D[日] dddd')
    const time = moment().format('ah:mm:ss')
    this.setState({ date, time })
  }

  componentWillUnMount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div id="menu">
        <div id="timer">
          <div id="date">{this.state.date}</div>
          <div id="time">{this.state.time}</div>
        </div>
        <DirectionSelector />
        <HighwaySelector />
      </div>
    )
  }
}

export default Menu
