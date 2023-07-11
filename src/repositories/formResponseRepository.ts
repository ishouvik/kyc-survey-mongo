import dataSource from "../db/dataSource"
import { FormResponse } from "../entities/formResponse"

export default class Repository {
  private repository = dataSource.getRepository(FormResponse)

  async query(query:object = {}) {
    try {
      return this.repository.find({
        where: query
      })
    } catch (error) {
      console.error('error')
      throw new Error(error)
    }
  }

  async one(query: object) {
    try {
      return this.repository.findOne({
        where: query
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  async save(params: object) {
    try {
      let formResponse = new FormResponse()

      formResponse = Object.assign(formResponse, params)
      return this.repository.save(formResponse)
    } catch (error) {
      throw new Error(error)
    }
  }
}

