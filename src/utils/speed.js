const colorSelector = speed => {
  let color = ''

  switch (true) {
    case speed >= 80:
      color = '#41A541'
      break
    case speed >= 70:
      color = '#C1FF6B'
      break
    case speed >= 60:
      color = '#FFE13C'
      break
    case speed >= 50:
      color = '#FFCD28'
      break
    case speed >= 40:
      color = '#FF8200'
      break
    case speed >= 30:
      color = '#FF7F50'
      break
    case speed >= 20:
      color = '#FF3232'
      break
    case speed >= 10:
      color = '#CD0000'
      break
    case speed >= 0:
      color = '#800000'
      break
    default:
      break
  }

  return color
}

export { colorSelector }
