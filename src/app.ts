import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { beforeAction, afterAction } from './middlewares/reqCallbacks'
import * as dbConnection from './middlewares/dbConnection'

import apiV1Welcome  from './routes/api/v1/welcome'
import formResponses from './routes/api/v1/formResponses'

/**
 * Routes
 */

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())
app.disable('x-powered-by')

app.use(beforeAction)
app.use(dbConnection.connect)

app.use('*/api/v1/welcome', apiV1Welcome)
app.use('*/api/v1/form-responses', formResponses)

app.use(dbConnection.close)
app.use(afterAction)

export default app
