import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import apiV1Welcome  from './routes/api/v1/welcome'

/**
 * Routes
 */

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.disable('x-powered-by')

app.use('*/api/v1/welcome', apiV1Welcome)

export default app
