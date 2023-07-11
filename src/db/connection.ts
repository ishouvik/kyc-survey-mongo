import 'reflect-metadata'
import dataSource from './dataSource'

const connection = {
  async create () {
    try {
      await dataSource.initialize()
    } catch (error) {
      throw new Error(error)
    }
  },

  async close () {
    try {
      await dataSource.destroy()
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default connection
