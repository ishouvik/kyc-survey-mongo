import '../init'
import path from 'path'

type configType = {
  name: 'default'
  type: 'mongodb'
  host: string
  port: number
  username: string
  password: string
  database: string
  entities: Array<string>
  logging: boolean
}

const ENTITIES_PATH = path.resolve(__dirname, '..', 'entities', '**.*')

const {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME
} = process.env

const config: configType = {
  name: 'default',
  type: 'mongodb',
  host: DB_HOST || '127.0.0.1',
  port: parseInt(DB_PORT) || 27017,
  username: DB_USERNAME || 'root',
  password: DB_PASSWORD || '',
  database: DB_NAME || 'kyc_poc_development',
  entities: [ENTITIES_PATH],
  logging: false
}

export default config
