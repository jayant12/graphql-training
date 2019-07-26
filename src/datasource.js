import { RESTDataSource } from 'apollo-datasource-rest'
import config from './config'

export class RestService extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = config.host_url || 'http://localhost:4990'
  }

  async getUser() {
    const user =  await this.get('/first')
    return user;
  }

  async getNames() {
    const array = await this.get('/third')
    return array;
  }

  async addNames(data) {
    const array = await this.post('/second', data)
    return array;
  }
};