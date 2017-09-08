import express from 'express'

import chargeStation from './chargeStation'

const router = express()

router.use('/chargeStations', chargeStation)

export default router
