import ChargeStation from '../models/ChargeStation'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

const ensureStationsExisting = () => {
  ChargeStation.find({}, (err, stations) => {
    if (_.isEmpty(stations)) {
      const jsonData = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'chargeStations.json'), 'utf8')
      )
      _.forEach(jsonData, station => {
        const newStation = new ChargeStation({
          id: station.id,
          name: station.name,
          highway: `${station.highway}`,
          direction: station.direction,
          location: station.location,
          region: station.region,
          data: [],
        })
        newStation
          .save()
          .then(() => console.log('success'))
          .catch(err => console.log(err))
      })
      console.log('migrate `chargeStations.json` to db')
    }
  })
}

export { ensureStationsExisting }
