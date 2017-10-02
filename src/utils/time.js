import _ from 'lodash'

const beautifyDataTime = data => {
  const beautifiedData = _.map(data, hourlyData => {
    let todayOrTomorrow = ''
    let section = ''
    let shortTime = ''

    const comparedTime = Number.parseInt(data[0].time, 10)
    const targetTime = Number.parseInt(hourlyData.time, 10)

    if (targetTime < comparedTime) {
      todayOrTomorrow = '明天'
    } else {
      todayOrTomorrow = '今天'
    }

    switch (true) {
      case targetTime < 6:
        section = '凌晨'
        break
      case targetTime < 12:
        section = '早上'
        break
      case targetTime < 18:
        section = '下午'
        break
      case targetTime < 24:
        section = '晚上'
        break
      default:
        break
    }

    if (targetTime > 12) {
      shortTime = targetTime - 12
    } else {
      shortTime = targetTime
    }

    return {
      ...hourlyData,
      time: `${todayOrTomorrow + section + shortTime}點`,
    }
  })

  return beautifiedData
}

const secondToMinute = second => {
  let min = 0
  let sec = Math.round(second)
  while (sec - 60 >= 0) {
    min += 1
    sec -= 60
  }
  if (sec < 10) {
    sec = `0${sec}`
  }
  return `${min}分${sec}秒`
}

const dayOrNight = hour => {
  if (!Number.isInteger(hour)) {
    return console.error('error: hour must be a integer')
  }

  switch (true) {
    case hour < 6:
      return 'night'
    case hour < 18:
      return 'day'
    case hour < 24:
      return 'night'
    default:
      return console.error('error: hour must between 0~24')
  }
}

export { beautifyDataTime, secondToMinute, dayOrNight }
